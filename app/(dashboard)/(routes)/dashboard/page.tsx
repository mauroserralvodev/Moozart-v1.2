"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Music, Store, Wallet, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

import { Bricolage_Grotesque, Manrope } from 'next/font/google'

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

const tools =[
  {
    label: "Generador",
    icon: Music,
    color: "text-black",
    bgColor: "bg-white",
    href: "/music"
  },
  {
    label: "Marketplace",
    icon: Store,
    color: "text-black",
    bgColor: "bg-white",
    href: "/marketplace"
  },
  {
    label: "Crypto",
    icon: Wallet,
    color: "text-black",
    bgColor: "bg-white",
    href: "/crypto"
  },
  {
    label: "News",
    icon: Newspaper,
    color: "text-black",
    bgColor: "bg-white",
    href: "/news"
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
            <div className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-center mb-10 mt-10">
            <section className={space.className}> Descubre Nuestra Plataforma</section>
            </div>
        </div>
        <section className={space.className}>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          onClick={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border border-gray-200 flex items-center font-semiblod
          justify-between shadow-md hover:shadow-lg bg-white hover:bg-white transition cursor-pointer m-2"
          > 
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)}/>
            </div>
            <div className="font-semiblod">
              {tool.label}
            </div>
           </div>
           <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
      </section>
    </div>
  )
}
export default DashboardPage;