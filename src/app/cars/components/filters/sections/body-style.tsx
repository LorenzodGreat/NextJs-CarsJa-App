import { Dispatch, SetStateAction } from "react"

import { BodyStyle, SelectedFilters } from "../types"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Switch } from "@heroui/react"

export const bodyStyles: {
  slug: BodyStyle
  name: string
  icon: string
}[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    icon: "game-icons:city-car",
  },
  { slug: "minivan", name: "Minivan", icon: "game-icons:surfer-van" },
  {
    slug: "pickup-truck",
    name: "Pickup Truck",
    icon: "mdi:truck-pickup",
  },
  {
    slug: "sports-car",
    name: "Sports Car",
    icon: "game-icons:f1-car",
  },
  { slug: "suv", name: "SUV", icon: "cil:car-alt" },
  { slug: "sedan", name: "Sedan", icon: "mdi:car-side" },
]

interface BodyStyleFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function BodyStyleFilters({
  selectedFilters,
  setSelectedFilters,
}: BodyStyleFiltersProps) {
  const handleBodyStyleToggle = (bodyStyle: BodyStyle) => {
    setSelectedFilters((prevFilters) => {
      const bodyStylesSelected = prevFilters.bodyStyles.includes(bodyStyle)
        ? prevFilters.bodyStyles.filter((selected) => selected !== bodyStyle)
        : [...prevFilters.bodyStyles, bodyStyle]

      return { ...prevFilters, bodyStyles: bodyStylesSelected }
    })
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Body Style</h3>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3.5">
          {bodyStyles.map(({ slug, name, icon  }) => (
            <Switch
              key={slug}
              className="h-[50px] rounded-full px-4"
              checked={selectedFilters.bodyStyles.includes(slug)}
              onChange={() => handleBodyStyleToggle(slug)}
            >
              <Icon icon={icon}className="mr-2.5 size-7" />
              <span className="text-sm font-normal text-neutral-950">
                {name}
              </span>
            </Switch>
          ))}
        </div>
      </div>
    </section>
  )
}
