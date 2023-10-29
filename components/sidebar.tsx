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
                      className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black rounded-lg transition hover:color-white", pathname === route.href ? "bg-black text-white" : "",)}>
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
    );
  }
  export default Sidebar;