"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { CardWithPicture } from "@/components/ui/CardWithPicture";
import Autoplay from "embla-carousel-autoplay";
import { Home as HomeComponent } from "@/components/ui/home";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden"> {/* Ensure no horizontal scrolling */}
      {/* Sticky Navigation */}
      <div className="sticky top-0 w-full bg-white shadow-md z-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#home"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about-me-section"
                className={navigationMenuTriggerStyle()}
              >
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#projects"
                className={navigationMenuTriggerStyle()}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="w-full">
          <Carousel
            className="w-full max-w-full mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="flex">
              {/* Carousel Items */}
              <CarouselItem>
                <CardWithPicture title="1" description="1" content="1" />
              </CarouselItem>
              <CarouselItem>
                <CardWithPicture title="hello" description="hello" content="hello" />
              </CarouselItem>
              <CarouselItem>
                <CardWithPicture title="3" description="3" content="3" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* HomeComponent */}
          <div>
            <HomeComponent />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen flex items-center justify-center">
          <h2 className="text-2xl font-bold">Projects Section</h2>
          <p className="text-center">Here are some of my projects.</p>
        </section>
      </main>
    </div>
  );
}
