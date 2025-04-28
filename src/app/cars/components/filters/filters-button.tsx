"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { constructUrlWithParams } from "@/lib/utils";

import { FiltersContent } from "./filters-content";
import {
  applyFiltersToParams,
  initializeFiltersFromParams,
} from "./lib/filters";
import { SelectedFilters } from "./types";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

interface FiltersButtonProps {
  initialMinPrice: number;
  initialMaxPrice: number;
  trigger?: React.ReactNode;
}

export function FiltersButton({
  initialMinPrice,
  initialMaxPrice,
}: FiltersButtonProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialFilters = useMemo(
    () =>
      initializeFiltersFromParams(
        searchParams,
        initialMinPrice,
        initialMaxPrice
      ),
    [searchParams, initialMinPrice, initialMaxPrice]
  );

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(initialFilters);

  const handleFiltersReset = useCallback(() => {
    setSelectedFilters({
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      bodyStyles: [],
      powertrain: undefined,
      seats: undefined,
      transmissions: [],
    });
  }, [initialMinPrice, initialMaxPrice]);

  const handleFiltersApply = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    applyFiltersToParams(
      newParams,
      selectedFilters,
      initialMinPrice,
      initialMaxPrice
    );
    router.push(constructUrlWithParams("/cars", newParams));
    setIsModalOpen(false);
  }, [searchParams, selectedFilters, initialMinPrice, initialMaxPrice, router]);


  return (
    <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
      <ModalHeader className="flex flex-col gap-1">Filters</ModalHeader>
      <ModalHeader className="flex flex-col gap-1">
        Refine your search by adjusting the filters below to find your perfect
        match.
      </ModalHeader>
      <ModalContent>
        <FiltersContent
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          initialMinPrice={initialMinPrice}
          initialMaxPrice={initialMaxPrice}
        />
      </ModalContent>
      <ModalFooter>
        <div className="flex w-full items-center justify-between gap-x-2 px-6">
          <ResetFiltersButton onReset={handleFiltersReset} />
          <ApplyFiltersButton onApply={handleFiltersApply} />
        </div>
      </ModalFooter>
    </Modal>
  );
}

export function ApplyFiltersButton({ onApply }: { onApply: () => void }) {
  return (
    <Button size="lg" className="text-[16px]" onClick={onApply}>
      Show cars
    </Button>
  );
}

export function ResetFiltersButton({ onReset }: { onReset: () => void }) {
  return (
    <Button
      variant="ghost"
      className="-ml-2.5 px-2.5 text-[16px]"
      onClick={onReset}
    >
      Clear all
    </Button>
  );
}
