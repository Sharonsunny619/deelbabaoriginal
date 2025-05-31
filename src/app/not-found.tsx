"use client"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NoFound() {
  const router = useRouter();



  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you&#39;re looking for doesn&#39;t exist or has been moved.</p>
     

      <Button  onClick={()=> router.push("/")} className="group relative h-10 overflow-hidden rounded-lg bg-black text-white px-6 py-2 cursor-pointer transition active:scale-95">
          <span className="relative z-10"> Return Home</span>
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#689567] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </Button>
    </div>
  );
}
