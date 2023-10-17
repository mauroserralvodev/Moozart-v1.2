"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Globe2, LayoutDashboard, Music, Newspaper, Settings, Store, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";

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
    label: "Ajustes",
    icon: Settings,
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
                <div className="relative w-4/5 h-16">
                    <Image fill alt="logo" src="/logo.png"/>
                </div>
            </Link>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link href={route.href} 
                      key={route.href}
                      className="text-sm group flex p-3 w-full justify-start 
                      font-medium cursor-pointer hover:text-white
                      hover:bg-black rounded-lg transition hover:color-white">
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
            <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-black dark:bg-blue-900" role="alert">
               <div className="flex items-center mb-3">
                 <span className="bg-white text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Beta</span>
                  <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center text-white rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                    <span className="sr-only">Close</span>
                     <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
               </button>
            </div>
              <p className="mb-3 text-sm text-white dark:text-blue-400">
                  Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
              </p>
            <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
            </div>
        </div>
      </div>
    );
  }
  export default Sidebar;