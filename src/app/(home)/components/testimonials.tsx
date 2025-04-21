"use client"
import { Card } from "@heroui/react"
import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">Build by makers, loved by thousand developers</h2>
          <p className="text-muted-foreground">
            Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping
            developers and businesses innovate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid gap-8 p-6 [grid-template-rows:auto_1fr] sm:col-span-2 lg:row-span-2 lg:p-12">
            <Image
              className="h-6 w-fit dark:invert"
              src="/placeholder.svg?height=24&width=80"
              alt="Nike Logo"
              height={24}
              width={80}
            />

            <blockquote className="grid gap-6 [grid-template-rows:1fr_auto]">
              <p className="text-xl font-medium">
              &quot;Tailus has transformed the way I develop web applications. Their extensive collection of UI components,
                blocks, and templates has significantly accelerated my workflow. The flexibility to customize every
                aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development&quot;
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Shekinah Tshiokufila"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="text-sm font-medium not-italic">Shekinah Tshiokufila</cite>
                  <span className="block text-sm text-muted-foreground">Software Engineer</span>
                </div>
              </div>
            </blockquote>
          </Card>

          <Card className="p-6 sm:col-span-2 lg:p-12">
            <blockquote className="grid h-full gap-6 [grid-template-rows:1fr_auto]">
              <p className="text-xl font-medium">
              &quot;Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.&quot;
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Jonathan Yombo"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="text-sm font-medium not-italic">Jonathan Yombo</cite>
                  <span className="block text-sm text-muted-foreground">Software Engineer</span>
                </div>
              </div>
            </blockquote>
          </Card>

          <Card className="p-6">
            <blockquote className="space-y-6">
              <p>
              &quot;Great work on tailfolio template. This is one of the best personal website that I have seen so far :)&quot;
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Yucel Faruksahan"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="text-sm font-medium not-italic">Yucel Faruksahan</cite>
                  <span className="block text-sm text-muted-foreground">Creator, Tailkits</span>
                </div>
              </div>
            </blockquote>
          </Card>

          <Card className="p-6">
            <blockquote className="space-y-6">
              <p>
              &quot;Great work on tailfolio template. This is one of the best personal website that I have seen so far :)&quot;
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Rodrigo Aguilar"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="text-sm font-medium not-italic">Rodrigo Aguilar</cite>
                  <span className="block text-sm text-muted-foreground">Creator, TailwindAwesome</span>
                </div>
              </div>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  )
}
