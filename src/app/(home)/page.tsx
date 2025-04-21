import { BrowseCarTypes } from "./components/browse-car-types";
import { CallToAction } from "./components/call-to-action";
import { Features } from "./components/features-section";
import { Hero } from "./components/hero";
import { PopularDestinations } from "./components/popular-destinations";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="border-y border-neutral-900/5">
        <div className="py-12 md:py-16">
          <Features />
        </div>
      </div>
      <div className="pt-12 lg:pt-14">
        <BrowseCarTypes />
      </div>
      <div className="pt-12 lg:pt-14">
        <Testimonials />
      </div>
      <div className="py-12 lg:py-16">
        <PopularDestinations />
      </div>
      <div className="pb-12 pt-24 sm:pb-20 sm:pt-36">
        <CallToAction />
      </div>
    </main>
  );
}
