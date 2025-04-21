import hatchback from "../../public/cars/hatchback.jpg"
import minivan from "../../public/cars/minivan.jpg"
import pickupTruck from "../../public/cars/pickup-truck.jpg"
import sedan from "../../public/cars/sedan.jpg"
import sportsCar from "../../public/cars/sports-car.jpg"
import suv from "../../public/cars/suv.jpg"

export const carTypes = [
  {
    id: 1,
    slug: "hatchback",
    name: "Hatchback",
    imageUrl: hatchback,
  },
  {
    id: 2,
    slug: "minivan",
    name: "Minivan",
    imageUrl: minivan,
  },
  {
    id: 3,
    slug: "sports-car",
    name: "Sports Car",
    imageUrl: sportsCar,
  },
  {
    id: 4,
    slug: "pickup-truck",
    name: "Pickup Truck",
    imageUrl: pickupTruck,
  },
  {
    id: 5,
    slug: "suv",
    name: "SUV",
    imageUrl: suv,
  },
  {
    id: 6,
    slug: "sedan",
    name: "Sedan",
    imageUrl: sedan,
  },
]
