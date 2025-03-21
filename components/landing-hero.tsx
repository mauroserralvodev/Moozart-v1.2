"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { Bricolage_Grotesque } from 'next/font/google'

const space = Bricolage_Grotesque ({
   style: 'normal',
   subsets: ['latin'],
   weight: '800'
})

const space2 = Bricolage_Grotesque ({
  style: 'normal',
  subsets: ['latin'],
  weight: '200'
})

const space3 = Bricolage_Grotesque ({
  style: 'normal',
  subsets: ['latin'],
  weight: '400'
})

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
<section className={space3.className}>
<div className="relative isolate overflow-hidden bg-white py-12 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
   
    <div className="mt-0 text-black font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-3 font-extrabold">
      <section className={space.className}>
        <h1>La Primera <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">IA Musical</span></h1>
        <h1>Generativa Del Mundo</h1>
      </section>
        <div className="text-black text-xl">
          <TypewriterComponent
            options={{
              strings: [
                "Disfruta de la musica sin copyright.",
                "Crea desde cualquier dispositivo.",
                "¡Prueba Moozart GRATIS ahora!"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="transition bg-black text-white hover:text-black border-2 hover:bg-white border-black md:text-lg p-4 md:p-6 rounded-full font-semibold ">
            Empieza a crear gratis
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  </div>
  </section>
  );
};
