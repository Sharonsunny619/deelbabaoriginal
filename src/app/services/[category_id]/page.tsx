"use client";  

import ServiceCategory from "@/components/services/category/category";
import { professionals } from "@/components/services/data";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import { professionals as homeProfessionals } from "@/components/home/data";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = parseInt(params?.category_id as string);
 const searchParams = useSearchParams();
  const from = searchParams.get("from");  
 
  const professionalData= from==="home"?homeProfessionals:professionals
  const category = professionalData.find((pro) => pro.id === categoryId);
 
  if (!category) {
    return <div className="p-4 text-center">Category not found</div>;
  }

  return <ServiceCategory category={category} />;
}
