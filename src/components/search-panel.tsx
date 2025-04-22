"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { format, formatISO, isBefore } from "date-fns";
import { SearchParams } from "@/lib/types";
import { constructUrlWithParams } from "../lib/utils";
import { SelectLocation } from "@/db/schema";
import { parseDate, today } from "@internationalized/date";

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export function SearchPanel({ locations }: { locations: SelectLocation[] }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  useEffect(() => {
    const locationParam = searchParams.get(SearchParams.LOCATION);
    const checkinParam = searchParams.get(SearchParams.CHECKIN);
    const checkoutParam = searchParams.get(SearchParams.CHECKOUT);

    if (locationParam) setLocation(locationParam);
    const checkInDate = checkinParam ? new Date(checkinParam) : undefined;
    const checkOutDate = checkoutParam ? new Date(checkoutParam) : undefined;

    if (checkInDate && checkOutDate && isBefore(checkInDate, checkOutDate)) {
      setCheckInDate(checkInDate);
      setCheckOutDate(checkOutDate);
    } else {
      if (checkInDate) setCheckInDate(checkInDate);
      if (checkOutDate) setCheckOutDate(checkOutDate);
    }

    return () => {
      setLocation("");
      setCheckInDate(undefined);
      setCheckOutDate(undefined);
    };
  }, [searchParams]);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!location && !checkInDate && !checkOutDate) return;

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(SearchParams.LOCATION);
    newParams.delete(SearchParams.CHECKIN);
    newParams.delete(SearchParams.CHECKOUT);

    if (location) {
      newParams.set(SearchParams.LOCATION, location);
      const currentLocation = locations.find((loc) => loc.slug === location);
      if (currentLocation) {
        newParams.set(SearchParams.LAT, currentLocation.latitude.toString());
        newParams.set(SearchParams.LNG, currentLocation.longitude.toString());
      }
    }

    if (checkInDate)
      newParams.set(SearchParams.CHECKIN, checkInDate.toISOString());
    if (checkOutDate)
      newParams.set(SearchParams.CHECKOUT, checkOutDate.toISOString());

    push(constructUrlWithParams("/cars", newParams));
  }

  return (
    <form onSubmit={submitForm} className="w-full">
      <div className="rounded-full border border-black/10 bg-white text-black shadow-lg transition-shadow hover:shadow">
        <div className="relative grid h-[var(--search-panel-height)] w-full grid-cols-3 items-center">
          {/* Location Picker */}
          <Dropdown className=" ">
            <DropdownTrigger>
              <Button
                variant="light"
                className="w-full h-full hover:rounded-l-full hover:rounded-r-none flex-col items-start px-5"
              >
                <div className="text-sm font-bold">Pick-up / Drop-off</div>
                <div className="truncate text-neutral-800">
                  {location
                    ? locations.find((loc) => loc.slug === location)?.name
                    : "Select location"}
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {locations.map((loc) => (
                <DropdownItem
                  key={loc.id}
                  onClick={() =>
                    setLocation(loc.slug === location ? "" : loc.slug)
                  }
                >
                  {loc.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {/* Check In */}
          <Popover className=" ">
            <PopoverTrigger>
              <Button
                variant="light"
                radius="none"
                className="w-full h-full flex-col items-start px-5"
              >
                <div className="text-sm font-bold">Check in</div>
                <div className="truncate text-neutral-800">
                  {checkInDate
                    ? format(checkInDate, "LLL dd, y")
                    : "Pick a date"}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar
                value={
                  checkInDate
                    ? parseDate(
                        formatISO(checkInDate, { representation: "date" })
                      )
                    : undefined
                }
                onChange={(value) =>
                  setCheckInDate(value ? new Date(value.toString()) : undefined)
                }
                minValue={today("UTC")}
              />
            </PopoverContent>
          </Popover>

          <div className="p-0 h-full inline-flex">
            {/* Check Out */}
            <Popover className=" ">
              <PopoverTrigger>
                <Button
                  variant="light"
                  radius="none"
                  className="w-full h-full flex-col items-start px-5"
                >
                  <div className="text-sm font-bold">Check out</div>
                  <div className="truncate text-neutral-800">
                    {checkOutDate
                      ? format(checkOutDate, "LLL dd, y")
                      : "Pick a date"}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0  flex">
                <Calendar
                  value={
                    checkOutDate
                      ? parseDate(
                          formatISO(checkOutDate, { representation: "date" })
                        )
                      : undefined
                  }
                  onChange={(value) =>
                    setCheckOutDate(value ? new Date(value.toString()) : undefined)
                  }
                  minValue={today("UTC")}
                />
              </PopoverContent>
            </Popover>
            <div className="mx-auto my-auto p-2 ml-2 items-center">
              <Button type="submit" radius="full" isIconOnly>
                <Icon icon="lucide:search" className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
