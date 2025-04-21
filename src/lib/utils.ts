import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const setCSSVariable = (name: string, value: string): void => {
  if (typeof window !== "undefined") {
    document.documentElement?.style.setProperty(name, value)
  }
}

export const formatAmountForDisplay = (
  amount: number,
  currency: string,
  removeCents: boolean = false
): string => {
  if (isNaN(amount)) return ""
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: removeCents ? 0 : 2,
    maximumFractionDigits: removeCents ? 0 : 2,
  })
  return numberFormat.format(amount)
}
