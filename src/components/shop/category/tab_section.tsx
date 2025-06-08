"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Category, CategoryType } from "./interface";
import Image from "next/image";
import ProductsGrid from "./product_grid";
import { tabcategories } from "./data";

export default function TabSection({ category }: { category: CategoryType }) {
  return (
    <div className="py-6 px-2">
      <Tabs defaultValue={tabcategories[0].id.toString()} className="w-full">
        {/* Scrollable Tab Bar */}
        <div className="overflow-x-auto scrollbar-hide">
          <TabsList className="flex md:justify-center flex-nowrap gap-4 md:gap-6 lg:gap-16 xl:gap-40 bg-transparent rounded-full shadow-none text-black p-2 h-auto w-max min-w-full">
            {tabcategories.map((cat: Category) => (
              <div
                key={cat.id}
                className="flex flex-col items-center justify-center px-2"
              >
                <TabsTrigger
                  value={cat.id.toString()}
                  className="flex flex-col p-4 mt-3 mb-1 shadow-xl rounded-full items-center justify-center transition-all bg-[#E9FBE8] hover:bg-[#E9FBE8] hover:scale-110 cursor-pointer data-[state=active]:bg-green-100 data-[state=active]:scale-105"
                >
                  <div className="relative w-16 h-16">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
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
        </div>

        {/* Tab Content */}
        {tabcategories.map((cat: Category) => (
          <TabsContent key={cat.id} value={cat.id.toString()}>
            <div className="p-4 text-center">
              <ProductsGrid tabcategory={cat} shopcategory={category} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
