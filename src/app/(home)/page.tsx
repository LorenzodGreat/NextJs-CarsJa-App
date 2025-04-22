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
      <div className="py-6 lg:py-10">
        <BrowseCarTypes />
      </div>
      <div className="border-y border-neutral-900/5">
        <div className="py-6 lg:py-10">
          <Features />
        </div>
      </div>
      <div className="py-6 lg:py-10">
        <PopularDestinations />
      </div>
      <div className="py-6 lg:py-10">
        <Testimonials />
      </div>
      <div className="pb-10 pt-12 sm:pb-10 sm:pt-18">
        <CallToAction />
      </div>
    </main>
  );
}
