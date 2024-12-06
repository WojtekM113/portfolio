
"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { CardWithPicture } from "@/components/ui/CardWithPicture";

import Autoplay from "embla-carousel-autoplay"
 
import { Home as HomeComponent } from "@/components/ui/home"

 


import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
 

export default function Home() {
  return  (
    <div  className="w-device-width" >  
       <div className="sticky top-0 w-full  bg-white shadow-md z-50"> 
        <NavigationMenu  >
          <NavigationMenuList >
            <NavigationMenuItem>
              <NavigationMenuLink href="#home" className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>  
              <NavigationMenuLink href="#about-me-section"  className={navigationMenuTriggerStyle()}>About Me</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>

        <main>
        <section id="home"  >
 
         
          <Carousel  className="w-full max-w-full"   
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
            <CarouselContent>

              <CarouselItem>
                <CardWithPicture title ="1" description="1" content="1"  />
              </CarouselItem>
              <CarouselItem>
                <CardWithPicture  title="hello" description="hello" content="hello"  />
              </CarouselItem>
              <CarouselItem>
                <CardWithPicture title ="3" description="3" content="3"  />
              </CarouselItem>
            </CarouselContent>
          
          </Carousel>
      
          <div>
            <HomeComponent/>
          </div>
        </section>
        

        <section id="projects" className="h-screen flex items-center justify-center">
          <h2 className="text-2xl font-bold">Projects Section</h2>
          <p className="text-center">Here are some of my projects.</p>
        </section>

      </main>
    </div>
   
    
  )  
}
 