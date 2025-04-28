import { Dispatch, SetStateAction } from "react"
import { Powertrain, SelectedFilters } from "../types"
import { Radio, RadioGroup } from "@heroui/react"

const powertrains: {
  slug: Powertrain
  name: string
}[] = [
  { slug: "gasoline", name: "Gasoline" },
  { slug: "diesel", name: "Diesel" },
  { slug: "hybrid", name: "Hybrid" },
  { slug: "electric", name: "Electric" },
]

interface PowertrainFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function PowertrainFilters({
  selectedFilters,
  setSelectedFilters,
}: PowertrainFiltersProps) {
  const handlePowertrainChange = (powertrain: Powertrain | undefined) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      powertrain: powertrain ?? undefined,
    }))
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Powertrain</h3>
      <div className="pt-5">
        <RadioGroup
          value={selectedFilters.powertrain ?? ""}
          onChange={(event) => handlePowertrainChange(event.target.value as Powertrain)}
          className="grid min-h-14 w-full auto-cols-fr grid-flow-col gap-0 rounded-2xl border border-neutral-300 p-1"
        >
          {powertrains.map(({ slug, name }) => (
            <Radio
              key={slug}
              value={slug}
            >
                  {name}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </section>
  )
}
