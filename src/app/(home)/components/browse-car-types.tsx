"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Image, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { carTypes } from "@/data/car-types";
import Link from "next/link";
import { SearchParams } from "@/lib/types";

export function BrowseCarTypes() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 3 : 5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === carTypes.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return carTypes.length - 1;
      }
      return prev - 1;
    });
  };

  const totalPages = Math.ceil(carTypes.length / itemsPerPage);

  const isLastPage = currentIndex === totalPages - 1;
  const isFirstPage = currentIndex === 0;

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-full max-w-[90vw]">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px]">
          Pick Your Perfect Match
        </h2>
        <div className="overflow-hidden pt-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex w-full flex-shrink-0 gap-4 px-2"
              >
                {carTypes
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage
                  )
                  .map((item) => (
                      <Card key={item.id}
                        className={
                          itemsPerPage === 5
                            ? "w-1/5 hover:scale-90 hover:transition-all hover:duration-400 duration-700 relative"
                            : "w-full hover:scale-90 hover:transition-all hover:duration-400 duration-700 relative"
                        }
                      >
                        
                        <Link
                          href={{
                            pathname: "/cars",
                            query: {
                              [SearchParams.BODY_STYLE]: item.slug,
                            },
                          }}
                          className="absolute inset-0 z-20 size-full rounded-xl"
                        />
                   
                        <CardHeader className="absolute z-50 top-1 flex-col !items-start">
                          <Chip
                            variant="solid"
                            color="primary"
                            className="text-tiny uppercase font-bold"
                          >
                            {item.name}
                          </Chip>
                        </CardHeader>
                        <Image
                          removeWrapper
                          src={item.imageUrl.src}
                          alt={item.name}
                          className="h-[200px] w-full object-cover"
                        />
                      </Card>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          isIconOnly
          className="absolute -left-12 top-1/2 -translate-y-1/2 transform"
          variant="flat"
          isDisabled={isFirstPage}
          onPress={prevSlide}
        >
          <Icon icon="lucide:chevron-left" className="h-6 w-6" />
        </Button>

        <Button
          isIconOnly
          className="absolute -right-12 top-1/2 -translate-y-1/2 transform"
          variant="flat"
          isDisabled={isLastPage}
          onPress={nextSlide}
        >
          <Icon icon="lucide:chevron-right" className="h-6 w-6" />
        </Button>

        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              isIconOnly
              size="sm"
              variant={currentIndex === index ? "solid" : "flat"}
              className="min-w-unit-6 h-unit-6"
              onPress={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
