import Kingston from "../../public/locations/kingston.jpg"
import Mobay from "../../public/locations/mobay.jpg"
import Stann from "../../public/locations/st-ann.jpg"
import Stelizabeth from "../../public/locations/stelizabeth.jpg"
import Stthomas from "../../public/locations/st-thomas.jpg"
import { locations } from "./locations"

// Add images to the respective locations
export const locationsWithImages = locations.map((location) => {
  switch (location.slug) {
    case "kingston":
      return { ...location, imageUrl: Kingston }
    case "montego-bay":
      return { ...location, imageUrl: Mobay }
    case "st-ann":
      return { ...location, imageUrl: Stann }
    case "st-elizabeth":
      return { ...location, imageUrl: Stelizabeth }
    case "st-thomas":
      return { ...location, imageUrl: Stthomas }
    default:
      return location // For locations without images
  }
})
