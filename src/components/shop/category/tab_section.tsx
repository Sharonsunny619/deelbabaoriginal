"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Category, CategoryType } from "./interface";
import Image from "next/image";
import CarTab from "./images/cartab.png";
import BikeTab from "./images/biketab.png";
import Wheeltab from "./images/wheeltab.png";
import EngineTab from "./images/enginetab.png";
import CarWashTab from "./images/carwashtab.png";
import ProductsGrid from "./product_grid";

const categories: Category[] = [
  {
    id: 1,
    name: "Car Spare Parts",
    image: CarTab,
  },
  {
    id: 2,
    name: "Bike Spare Parts",
    image: BikeTab,
  },
  {
    id: 3,
    name: "Accessories",
    image: Wheeltab,
  },
  {
    id: 4,
    name: "Lubrications",
    image: EngineTab,
  },
  {
    id: 5,
    name: "Vehicle Wash",
    image: CarWashTab,
  },
];

export default function TabSection() {
  return (
    <div className=" py-6 px-2">
      <Tabs defaultValue={categories[0].id.toString()} className="w-full flex items-center justify-center">
        <TabsList className="gap-16 bg-transparent rounded-full shadow-none overflow-hidden text-black p-0 h-auto">
          {categories.map((cat: Category) => (
          <div key={cat.id} className="bg-transparent px-16 flex flex-col items-center justify-center">
              <TabsTrigger
                
                value={cat.id.toString()}
                className="flex flex-col  p-4 mt-3 mb-1 shadow-xl rounded-full items-center justify-center flex-1  transition-all bg-[#E9FBE8] hover:bg-[#E9FBE8] hover:scale-110 cursor-pointer  data-[state=active]:bg-green-100 data-[state=active]:scale-105"
              >
                <div className="relative w-16 h-16  ">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill={true}
                    className="object-contain rounded-[22px]"
                  />
                </div>
              </TabsTrigger>
                <span className="text-sm font-semibold text-center">
                  {cat.name}
                </span>
          </div>
          ))}
        </TabsList>

        {categories.map((cat: Category) => (
          <TabsContent key={cat.id} value={cat.id.toString()}>
            <div className="p-4 text-center">
              {/* Content for {cat.name} category (ID: {cat.id}). */}
              <ProductsGrid/>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}