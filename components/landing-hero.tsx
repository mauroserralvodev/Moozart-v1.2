"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="mt-20 text-black font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-3 font-extrabold">
        <h1>La Primera IA Músical</h1>
        <h1>Generativa Del Mundo</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600 text-2xl ">
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
          <Button className="text-white md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-800">
            Empieza a crear gratis
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
