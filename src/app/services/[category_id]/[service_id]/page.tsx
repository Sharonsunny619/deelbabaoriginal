 "use client"
import { users } from '@/components/services/category/data';
 import ServiceDetail from '@/components/services/category/detail/service_detail'
import { useParams } from 'next/navigation';
import React from 'react'

export default function ScheduleCategoryPage() {
    const params = useParams();
    const categoryId = parseInt(params?.service_id as string);
    
     const service = users.find((pro) => pro.id === categoryId);
     console.log("service",service);
     
  return (
    <div>
      <ServiceDetail service={service}/>
    </div>
  )
}


