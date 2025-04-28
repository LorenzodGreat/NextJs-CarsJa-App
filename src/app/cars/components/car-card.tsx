import { SelectCar } from "@/db/schema"

import { formatAmountForDisplay } from "@/lib/utils"
import CldImage from "@/components/cld-image"

import { CarDetailsButton } from "./car-details-button"
import { Icon } from "@iconify/react/dist/iconify.js"

interface CarCardProps {
  car: SelectCar
}

export async function CarCard({ car }: CarCardProps) {
  if (!car) {
    return null
  }

  return (
    <article className="overflow-hidden rounded-[10px] border border-black/[0.08] bg-white text-sm shadow-sm">
      <div className="relative aspect-video h-40 w-full">
        <CldImage
          src={car.imageUrl}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 569px) 100vw, (max-width: 840px) 50vw, (max-width: 949px) 33vw, (max-width: 1036px) 60vw, (max-width: 1336px) 30vw, 300px"
          priority
        />
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <div className="flex items-center justify-between gap-1">
          <span className="truncate font-semibold">{car.name}</span>
          <div className="inline-flex shrink-0 items-center justify-center gap-x-1">
            <Icon icon={"material-symbols:star-outline"} className="inline size-3 shrink-0 " />
            <span className="leading-none">
              <span className="font-medium">{car.rating}</span>{" "}
              <span className="text-neutral-600">
                {Number(car.reviewCount) > 0 && `(${car.reviewCount})`}
              </span>
            </span>
          </div>
        </div>
        <div className="capitalize text-neutral-600">
          <div className="flex items-center">
            {car.powertrain.toLowerCase() === "electric" ? (
              <Icon icon={"ph:car-battery"} className="mr-1.5 inline size-[14px] shrink-0" />
            ) : (
              <Icon icon={"mdi:engine-outline"}  className="mr-1.5 inline size-[14px] shrink-0" />
            )}
            <span>{car.powertrain}</span>
          </div>
          <div className="flex items-center">
            {car.transmission.toLowerCase() === "automatic" ? (
              <Icon icon={"ph:car-battery"} className="mr-1.5 inline size-[14px] shrink-0" />
            ) : (
              <Icon icon={"tabler:manual-gearbox"}  className="mr-1.5 inline size-[14px] shrink-0" />
            )}
            <span>{car.transmission}</span>
          </div>
        </div>
        <div className="pt-1">
          <span className="text-[15px] font-semibold tabular-nums leading-none">
            {formatAmountForDisplay(
              Math.round(Number(car.pricePerDay)),
              car.currency,
              true
            )}
          </span>
          <span className="ml-1 leading-none text-neutral-900">day</span>
        </div>
        <div className="pt-4">
          <CarDetailsButton carSlug={car.slug} />
        </div>
      </div>
    </article>
  )
}
