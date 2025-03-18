import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="relative z-20 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m{" "}
                  <div className="mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                      Chamikara <br /> Kodithuwakku
                    </span>
                  </div>
                </h1>
                <p className="relative z-20 max-w-[600px] text-muted-foreground md:text-xl">
                  A passionate developer creating beautiful and functional web experiences
                </p>
              </div>
              <div className="relative z-20 flex flex-col gap-3 sm:flex-row">
                <Link href="#contact">
                  <Button className="group w-full sm:w-auto text-sm py-2 px-4">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 py-2 px-4 text-sm"
                >
                  <span>Download CV</span>
                  <Download className="h-4 w-4" />
                </HoverBorderGradient>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative z-20 aspect-square overflow-hidden rounded-full border-8 border-muted w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <div className="w-full h-full relative p-4">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/pic_2.png"
                      alt="Profile picture"
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}