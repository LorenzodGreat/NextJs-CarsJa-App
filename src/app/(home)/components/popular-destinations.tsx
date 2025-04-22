"use client";
// import Link from "next/link";
// import { SearchParams } from "@/lib/types";
import { formatAmountForDisplay } from "@/lib/utils";
import {
  Card,
  // CardHeader,
  CardBody,
  Image,
  CardFooter,
  // Button,
} from "@heroui/react";
import { locationsWithImages } from "@/data/locations-and-images";

export function PopularDestinations() {
  const featuredLocations = locationsWithImages.filter(
    (location) => location.featured === true
  );

  return (
    <section>
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-balance text-[19px] font-bold sm:text-[21px] lg:text-[23px]">
          Where to Rent Next
        </h2>
        <div className="pt-6">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-5">
            {featuredLocations.map(
              (
                {
                  id,
                  // slug,
                  imageUrl,
                  // latitude,
                  // longitude,
                  name,
                  startingPrice,
                },
                // index
              ) => (
                <Card shadow="sm" key={id} isPressable>
                  <CardBody className="overflow-visible p-0">
                    {/* <Link
                      href={{
                        pathname: "/cars",
                        query: {
                          [SearchParams.LOCATION]: slug,
                          [SearchParams.LAT]: latitude,
                          [SearchParams.LNG]: longitude,
                        },
                      }}
                      className="absolute inset-0 z-10"
                    >
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        Go to
                      </p>
                      <h4 className="text-black font-medium text-2xl">
                        {name}
                      </h4>
                    </Link> */}
                    <Image
                      src={
                        typeof imageUrl === "string" ? imageUrl : imageUrl.src
                      }
                      alt={name}
                      className="w-full object-cover h-[140px]"
                      radius="lg"
                      shadow="sm"
                      width="100%"
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{name}</b>
                    <p className="text-default-500">
                      Cars from{" "}
                      {formatAmountForDisplay(startingPrice, "usd", true)}+
                    </p>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
