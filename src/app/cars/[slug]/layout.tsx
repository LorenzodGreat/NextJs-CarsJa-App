import { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header" 

export default function CarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
       <SiteHeader />
      {children}
    </div>
  )
}
