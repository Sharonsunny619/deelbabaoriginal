import Category from "@/components/shop/category/category";
import { categories } from "@/components/shop/data";
import React from "react";


export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((cat) => cat.id === parseInt(params.id));
 
 
  if (!category) {
    return <div className="p-4 text-center">Category not found</div>;
  }

  return (
   <Category category={category}/>
  );
}