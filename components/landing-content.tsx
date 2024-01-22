"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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

<div className="pb-20 mt-0">
<hr className="stroke-gray-200 sm:mx-auto"/>
<div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:overflow-visible lg:px-0 ">

  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute left-[max(50%,25rem)] top-30 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
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

    <div className="grid px-10 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
        <section className={space.className}>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Sobre Nosotros</h1>
        </section>
        <section className={space2.className}>
            <p className="w-full mb-6 font-light text-black lg:mb-6 md:text-lg lg:text-xl ">Moozart es la primera IA musical generativa del mundo. Una plataforma donde los usuarios podrán crear su propia música en tan solo unos segundos y sin conocimiento previo. Dando unas simples instrucciones al software este podrá crear música personalizada y única, que los usuarios podrán usar libremente ya que no tiene copyright.</p>
        </section>
            <a href="https://es.wikipedia.org/wiki/Inteligencia_artificial" className="bg-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-black rounded-lg transition hover:bg-white hover:text-black focus:ring-4 focus:ring-gray-100 shadow-lg">
                Saber más
            </a> 
        </div>
        <div className="mt-10 pr:0 hidden lg:mt-0 lg:col-span-5 lg:flex pl-30">
            <img className="mr-4" src="/588shots_so.png" alt="mockup"></img>
        </div>
    </div>

</div>
<section className="mb-0 px-10">
<section className={space.className}>
      <h2 className="text-center text-4xl text-black font-extrabold mb-10 mt-20">Progreso Startup</h2>
</section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-white border border-gray-200 shadow-md hover:translate-y-1 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                <section className={space.className}>
                  <p className="text-lg">{item.name}</p>
                </section>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <section className={space2.className}>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
              </section>
            </CardHeader>
          </Card>
        ))}
      </div>
</section>

<section className=" mt-20 mb-0">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 ">
          <div className="flex flex-col items-center justify-center">
          <section className={space.className}>
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+600</dt>
          </section>
          <section className={space2.className}>
              <dd className="font-light text-black mb-10">Usuarios</dd>
          </section>
          </div>
          <div className="flex flex-col items-center justify-center">
          <section className={space.className}>
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+10k</dt>
          </section>
          <section className={space2.className}>
              <dd className="font-light text-black  mb-10">Canciones generadas</dd>
          </section>
          </div>
          <div className="flex flex-col items-center justify-center">
          <section className={space.className}>
              <dt className="mb-2 text-5xl md:text-5xl font-extrabold">+70</dt>
          </section>
          <section className={space2.className}>
              <dd className="font-light text-black mb-10">Transaciones Crypto</dd>
            </section>
          </div>
      </dl>
  </div>
</section>

</div>
  )
}