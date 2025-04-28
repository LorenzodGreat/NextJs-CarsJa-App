"use client";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
      <div className="flex h-full flex-col items-center justify-center gap-4 py-52">
        <h2 className="text-center text-2xl font-bold">404 - Car Not Found</h2>
        <p className="mb-4 max-w-prose text-center text-neutral-600">
          The car you&apos;re looking for seems to have taken a detour. No
          worries, though! We have a wide selection of vehicles waiting just for
          you.
        </p>
        <Button size="lg" href="/cars">
              Explore Cars
        </Button>
      </div>
    </div>
  )
}
