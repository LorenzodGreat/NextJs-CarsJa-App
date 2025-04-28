"use client";
import { LogoLink } from "./logoLink";
import { FiltersButton } from "./filter-btn";
import { SearchPanelWrapper } from "./search-panel-wrapper";
import Filters from "@/app/cars/components/filters/filters-wrapper";
import { Button } from "@heroui/react";



export function SiteHeader({}) {
  return (
    <div className="sticky top-0 z-40 ">
    <div className="md:hidden">
      <div className="bg-white">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <header className="flex h-[var(--site-header-height)] items-center">
            <Button
              variant={"light"}
              type="button"
              className="-ml-2 rounded-full pl-2 text-neutral-800 hover:underline"
             href="/cars"
            >
                  Cars
            </Button>
          </header>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="bg-[hsla(0,0%,100%,.8)] backdrop-blur-[5px] backdrop-saturate-[1.8]">
        <div className="mx-auto h-[var(--site-header-height)] w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <header className="sticky top-0 z-40 h-[var(--site-header-height)]   bg-white">
      {/* Phone and Tablets */}
      <div className="h-full md:hidden">
        <div className="h-full px-5 sm:px-6">
          <div className="grid h-full grid-cols-[1fr_40px] items-center justify-center gap-x-3">
            <div className="h-14 w-full rounded-full border shadow-lg"></div>
              <Filters
                trigger={
                  <FiltersButton
                    variant="light"
                    isIconOnly={true}
                    className="rounded-full"
                  />
                }
              />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden h-full md:block">
        <div className="mx-auto size-full px-6">
          <div className="flex h-[45px] items-end justify-between">
            <LogoLink />
            {/* <UserMenuButton /> */}
          </div>
          <div className="flex h-[calc(var(--site-header-height)_-_45px)] items-center justify-between gap-x-6 lg:grid lg:grid-cols-[auto_minmax(800px,860px)_auto]">
            <div className="hidden w-[110px] lg:block"></div>
            <div className="flex w-full items-center justify-center [--search-panel-height:64px] xl:[--search-panel-height:68px]">
                <SearchPanelWrapper />
            </div>
            <div className="flex w-[110px] shrink-0 grow-0 justify-end justify-self-end">
                <Filters />
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
      </div>
    </div>
  </div>
    
  );
}
