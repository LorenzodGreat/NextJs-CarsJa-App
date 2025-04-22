import { SelectCar } from "@/db/schema"

export const getCarImagePublicId = (bodyStyle: SelectCar["bodyStyle"]) => {
  switch (bodyStyle) {
    case "hatchback":
      return "carsja/cars/hatchback_hawhtv"

    case "minivan":
      return "carsja/cars/minivan_vlkx4g"

    case "sedan":
      return "carsja/cars/sedan_rfl011"

    case "sports-car":
      return "carsja/cars/sports-car_hmxtaj"

    case "pickup-truck":
      return "carsja/cars/pickup-truck_ihwn41"

    case "suv":
      return "carsja/cars/suv_rdgyby"

    default:
      return null
  }
}
