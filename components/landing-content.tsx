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
<div className="px-10 pb-20 mt-0">
<hr className=" border-gray-200 sm:mx-auto dark:border-gray-700" />
<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
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
<section className=" dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sobre Nosotros</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Moozart es la primera IA musical generativa del mundo. Una plataforma donde los usuarios podrán crear su propia música en tan solo unos segundos y sin conocimiento previo. Dando unas simples instrucciones al software este podrá crear música personalizada y única, que los usuarios podrán usar libremente ya que no tiene copyright.</p>
            <a href="https://es.wikipedia.org/wiki/Inteligencia_artificial" className="bg-white inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-lg">
                Saber más
            </a> 
        </div>
        <div className="pl:20 pr:0 hidden lg:mt-0 lg:col-span-5 lg:flex pl-40">
            <img className="mr-4" src="/persona.png" alt="mockup"></img>
        </div>
    </div>
</section>
</div>
<section className="mb-0">
      <h2 className="text-center text-4xl text-black font-extrabold mb-10 mt-20">Progreso Startup</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-white border border-gray-200 shadow-md hover:translate-y-1 hover:shadow-lg transition">
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
<section className="dark:bg-gray-900 mt-20 mb-0">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+12k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Usuarios</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+450k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Canciones generadas</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+70k</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400 mb-10">Transaciones Crypto</dd>
          </div>
      </dl>
  </div>
</section>
</div>
  )
}