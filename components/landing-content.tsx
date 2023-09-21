"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "#1 Software",
    avatar: "J",
    title: "Moozart AI",
    description: "El primer software capaz de generar música en un instante, desde cualquier dispositivo.",
  },
  {
    name: "#2 Marketplace",
    avatar: "M",
    title: "Moozart Market",
    description: "Marketplace es un espacio dentro de la plataforma donde los usuarios podrán comprar y vender sus canciones.",
  },
  {
    name: "#3 Crypto",
    avatar: "A",
    title: "Amadeus Coin",
    description: "Los Amadeus Coin son la cryptomoneda de la plataforma, se utlizan para la compra-venta de canciones en marketplace.",
  },
  {
    name: "#4 Platform",
    avatar: "M",
    title: "Moozart World",
    description: "Nuestro objetivo es desarrollar una plataforma que integre las funciones de Marketplace, Generador y Crypto.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 mt-40">
      <div className="overflow-hidden">
        <div className="container-1 lg:w-1/2 md:w-1/2 sm:w-1/1 float-left m-2">
           <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl space-y-3 font-extrabold text-black mb-5">Sobre Nosotros</h2>
           <div className="lg:flex">
           <p className="text-black mb-10 w-50 text-1xs lg:text-2xl lg:w-1/1">Somos una plataforma que utiliza la IA para crear música personalizada y única para el usuario, fundada en 2021 en Barcelona con el objetivo de que cualquier persona pueda hacer su propia música sin ningún conocimiento previo, desde casa, con cualquier dispositivo.</p>
        </div>
        </div>
        <div className="container-2 w-1/1 lg:float-right md:float-right sm:float-none justify-center">
           <div className="relative md:display-none lg:w-64 lg:h-64 md:w-64 md:h-64 sm:w-1/1 sm:h-1/1">
             <Image fill alt="Mockup" src="/persona.png" />
            </div>
         </div>
      </div>
      <h2 className="text-center text-4xl text-black font-extrabold mb-10 mt-40">Progreso Startup</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-gray-100 border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h3 className="text-center text-1xl text-white mt-60 mb-0 w-100 h-1 bg-white rounded-lg bg-gradient-to-r from-gray-400 to-gray-300">©2023 Moozart AI - All rights reserved - by Wolfgang Studios</h3>
      <h3 className="text-center text-2xl text-black mt-10 mb-0 w-100 font-bold">Una Plataforma desarrollada por Wolfgang Studios</h3>
      <h3 className="text-center text-1xl text-black mt-0 mb-0 w-100">©2023 Moozart AI - All rights reserved</h3>
    </div>
  )
}