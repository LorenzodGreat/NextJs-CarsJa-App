import { Dispatch, SetStateAction, useState } from "react"
import { SelectedFilters } from "../types"
import { Button } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"

interface SeatingCapacityFiltersProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function SeatingCapacityFilters({
  selectedFilters,
  setSelectedFilters,
}: SeatingCapacityFiltersProps) {
  const [counter, setCounter] = useState(selectedFilters.seats || 0)

  const handleMinusClick = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter - 1
      setSelectedFilters({
        ...selectedFilters,
        seats: newCounter > 0 ? newCounter : undefined,
      })
      return newCounter
    })
  }

  const handlePlusClick = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1
      setSelectedFilters({
        ...selectedFilters,
        seats: newCounter > 0 ? newCounter : undefined,
      })
      return newCounter
    })
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Seats</h3>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <Button
            onClick={handleMinusClick}
            variant={"light"}
            isIconOnly
            // className="size-9 shrink-0 border-neutral-400 text-neutral-600 hover:border-black hover:bg-neutral-50 disabled:border-black/20 disabled:text-neutral-400"
            disabled={counter <= 0}
          >
            <Icon icon={"lsicon:minus-outline"} className="inline size-4 shrink-0" />
          </Button>

          <div className="w-9 text-center tabular-nums">
            {!selectedFilters.seats
              ? "Any"
              : selectedFilters.seats === 7
                ? `${selectedFilters.seats}+`
                : selectedFilters.seats}
          </div>

          <Button
            onClick={handlePlusClick}
            variant={"light"}
            isIconOnly
            // className="size-9 shrink-0 border-neutral-400 text-neutral-600 hover:border-black hover:bg-neutral-50 disabled:border-black/20 disabled:text-neutral-400"
            disabled={counter >= 7}
          >
            <Icon icon={'icons8:plus'} className="inline size-4 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}
