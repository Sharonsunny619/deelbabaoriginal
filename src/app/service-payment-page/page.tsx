"use client";
import ServicePayment from "@/components/service_payment_page/service_payment";
import { users } from "@/components/services/category/data";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ServicePaymentPage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id");

  const service = users.find((pro) => pro.id === parseInt(serviceId));
  return (
    <div>
      <ServicePayment service={service} />
    </div>
  );
}
