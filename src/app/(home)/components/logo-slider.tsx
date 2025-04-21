"use client"

import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

import { CAR_LOGO_WIDTH, CLONE_SETS_COUNT } from "@/lib/constants"
import { cn, setCSSVariable } from "@/lib/utils"

interface LogoData {
  id: string
  icon: string // iconify icon name
}

const cars: LogoData[] = [
  { id: "kia", icon: "cbi:kia" },
  { id: "subaru", icon: "cbi:subaru" },
  { id: "mini", icon: "simple-icons:mini" },
  { id: "hyundai", icon: "simple-icons:hyundai" },
  { id: "mercedesBenz", icon: "lineicons:mercedes" },
  { id: "toyota", icon: "lineicons:toyota" },
  { id: "bmw", icon: "lineicons:bmw" },
  { id: "honda", icon: "cbi:honda" },
  { id: "audi", icon: "lineicons:audi" },
  { id: "volvo", icon: "simple-icons:volvo" },
]

// Utility to clone logos
function createClonedLogos(logos: LogoData[], totalClones: number): LogoData[] {
  return Array.from({ length: totalClones }).flatMap((_, index) =>
    logos.map(({ id, icon }) => ({
      id: `${id}-clone-${index + 1}`,
      icon,
    }))
  )
}

export function LogoSlider() {
  const logosListRef = useRef<HTMLDivElement>(null)
  const [clonedLogos, setClonedLogos] = useState<LogoData[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const logoList = logosListRef.current

    if (logoList) {
      const totalLogos = cars.length

      // Set CSS variables used for animation
      setCSSVariable("--slider-total-clones", (CLONE_SETS_COUNT + 1).toString())
      setCSSVariable("--slider-total-logos", totalLogos.toString())
      setCSSVariable("--slider-logo-width", CAR_LOGO_WIDTH)
      setCSSVariable(
        "--slider-total-logo-width",
        `calc(var(--slider-total-logos) * var(--slider-logo-width) * (var(--slider-total-clones)))`
      )

      setClonedLogos(createClonedLogos(cars, CLONE_SETS_COUNT))
      setIsVisible(true)
    }
  }, [])

  return (
    <div ref={logosListRef} className="animate-slider">
      <div
        className={cn(
          "flex w-[var(--slider-total-logo-width)] items-center grayscale transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {cars.concat(clonedLogos).map(({ id, icon }) => (
          <div
            key={id}
            className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
          >
            <Icon icon={icon} height="24" />
          </div>
        ))}
      </div>
    </div>
  )
}
