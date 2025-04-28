"use client";
import { Button } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"


export function FiltersButton({
  variant,
  isIconOnly,
  className,
}: {
  variant: string;
  isIconOnly: boolean;
  className: string;
}) {
  return (
    <Button
    variant={variant as "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | "ghost"}
    isIconOnly={isIconOnly}
    className={className}
  >
    <Icon icon={"stash:filter-light"} className="size-5 shrink-0" />
  </Button>
  )
}
