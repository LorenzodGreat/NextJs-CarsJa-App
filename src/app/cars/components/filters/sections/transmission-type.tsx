import { Dispatch, SetStateAction } from "react"


import { SelectedFilters, Transmission } from "../types"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Switch } from '@heroui/react';

const transmissions: {
  slug: Transmission
  name: string
  icon: string
}[] = [
  {
    slug: "automatic",
    name: "Automatic",
    icon: "tabler:automatic-gearbox-filled",
  },
  { slug: "manual", name: "Manual", icon: "tabler:manual-gearbox" },
]

interface TransmissionTypeFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function TransmissionTypeFilters({
  selectedFilters,
  setSelectedFilters,
}: TransmissionTypeFiltersProps) {
  const handleTransmissionToggle = (transmission: Transmission) => {
    setSelectedFilters((prevFilters) => {
      const transmissionsSelected = prevFilters.transmissions.includes(
        transmission
      )
        ? prevFilters.transmissions.filter(
            (selected) => selected !== transmission
          )
        : [...prevFilters.transmissions, transmission]

      return { ...prevFilters, transmissions: transmissionsSelected }
    })
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Transmission</h3>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
          {transmissions.map(({ slug, name, icon }) => (
            <Switch
              key={slug}
              className="h-[50px] rounded-full px-4"
              checked={selectedFilters.transmissions.includes(slug)}
              onChange={() => handleTransmissionToggle(slug)}
            >
              <Icon icon={icon} className="mr-2.5 size-7 [stroke-width:1.5]" />
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
