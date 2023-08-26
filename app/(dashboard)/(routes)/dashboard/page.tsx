"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Music } from "lucide-react";
import { useRouter } from "next/navigation";

const tools =[
  {
    label: "Generador",
    icon: Music,
    color: "text-gray-500",
    bgColor: "bg-gray-200",
    href: "/music"
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
           Explora el poder de la IA
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Moozart AI - by Wolfgang Studios
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          onClick={() => router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/54 flex items-center 
          justify-between hover:shadow-md transition cursor-pointer"
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