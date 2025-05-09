import { getLocations } from "@/db/queries/location-repository"
import { SearchPanel } from "./search-panel"
export async function SearchPanelWrapper(props: { [key: string]: unknown }) {
  const locations = await getLocations()

  if (!locations) return null

  return <SearchPanel locations={locations} {...props} />
}
