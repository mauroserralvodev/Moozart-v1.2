"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Music, Store, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

const tools =[
  {
    label: "Generador",
    icon: Music,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    href: "/music"
  },
  {
    label: "Marketplace",
    icon: Store,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    href: "/marketplace"
  },
  {
    label: "Crypto",
    icon: Wallet,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    href: "/crypto"
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-10">
               Descubre Nuestra Plataforma <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 mb-10">"Elevate Your Sound"</h2>
            </h2>
        </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          onClick={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border-none flex items-center font-semiblod
          justify-between shadow-lg bg-gray-100 hover:bg-white transition cursor-pointer m-2"
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
    </div>
  )
}
export default DashboardPage;