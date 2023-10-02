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
      <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sobre Nosotros</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Moozart es la primera IA musical generativa del mundo. Una plataforma donde los usuarios podrán crear su propia música en tan solo unos segundos y sin conocimiento previo. Dando unas simples instrucciones al software este podrá crear música personalizada y única, que los usuarios podrán usar libremente ya que no tiene copyright.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Saber más
            </a> 
        </div>
        <div className="pl:20 pr:0 hidden lg:mt-0 lg:col-span-5 lg:flex pl-40">
            <img src="/persona.png" alt="mockup"/>
        </div>                
    </div>
</section>

<section className="bg-white dark:bg-gray-900 mt-18 mb-18">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+12k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Usuarios</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+850k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Canciones generadas</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+100k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Transaciones Crypto</dd>
          </div>
      </dl>
  </div>
</section>

<section className="mb-0">
      <h2 className="text-center text-4xl text-black font-extrabold mb-10 mt-40">Progreso Startup</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-gray-100 border-none shadow">
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
</section>

  </div>
  )
}