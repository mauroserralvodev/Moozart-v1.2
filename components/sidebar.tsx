"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Globe2, LayoutDashboard, Music, Newspaper, Settings, Store, Wallet, CreditCard } from "lucide-react";
import { usePathname } from "next/navigation";

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

const routes = [
  {
    label: "Generador",
    icon: Music,
    href: "/music",
    color: "gradient-to-r from-blue-600 to-blue-800",
  },
  {
    label: "Marketplace",
    icon: Store,
    href: "/marketplace",
    color: "gradient-to-r from-blue-600 to-blue-800",
  },
  {
    label: "Crypto",
    icon: Wallet,
    href: "/crypto",
    color: "gradient-to-r from-blue-600 to-blue-800",
  },
  {
    label: "News",
    icon: Newspaper,
    href: "/news",
    color: "gradient-to-r from-blue-600 to-blue-800",
  },
  {
    label: "Subscriptions",
    icon: CreditCard,
    href: "/settings",
    color: "gradient-to-r from-blue-600 to-blue-800",
  }
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
      <div className="space-y-4 py-4 flex flex-col h-full
      bg-[#f5f5f7] text-black">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-4/5 h-11">
                    <Image fill alt="logo" src="/white2.png"/>
                </div>
            </Link>
            <section className={space2.className}>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link href={route.href} 
                      key={route.href}
                      className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black rounded-lg transition hover:color-white", pathname === route.href ? "bg-black text-white" : "",)}>
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
            </section>
        </div>
        
        <a href="/politica-de-privacidad" className="p-2 gap-x-2 mx-4 font-md inline-flex justify-center items-center border border-black rounded-lg">
          Politica de Privacidad
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        
        <div className="inline-flex rounded-md w-full items-center m-4">
          <a href="/" aria-current="page" className="px-6 py-2 text-sm bg-white border border-black rounded-s-lg">
          Volver al Inicio
          </a>
          <a href="/brand-id" className="px-6 py-2 text-sm text-gray-900 bg-white border border-black rounded-e-lg">
          Brand ID
          </a>
        </div>

      </div>
    );
  }
  export default Sidebar;