"use client"

import { useSearchParams } from "next/navigation"

import { SearchParams } from "@/lib/types"
import { constructUrlWithParams } from "@/lib/utils"
import { Button, Link } from "@heroui/react"

export function CarDetailsButton({ carSlug }: { carSlug: string }) {
  const searchParams = useSearchParams()
  const newParams = new URLSearchParams(searchParams.toString())

  const location = searchParams.get(SearchParams.LOCATION)
  const checkin = searchParams.get(SearchParams.CHECKIN)
  const checkout = searchParams.get(SearchParams.CHECKOUT)

  if (location) newParams.set(SearchParams.LOCATION, location)
  if (checkin) newParams.set(SearchParams.CHECKIN, checkin)
  if (checkout) newParams.set(SearchParams.CHECKOUT, checkout)

  const href = constructUrlWithParams(`/cars/${carSlug}`, newParams)

  return (
    <Link href={href} className="w-full">
    <Button
    variant={"flat"}
    className="h-9 w-full "
    >
      View Details
    </Button>
      </Link>
  )
}
