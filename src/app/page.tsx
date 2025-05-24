"use client";
import React from "react";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import GetServiceSection from "../components/GetServiceSection";
import Store from "../components/GetServiceSection";

import NearestStores from "../components/NearestStores";
import BestDeals from "../components/BestDeals";
import PromoCarousel from "../components/PromoCarousel";
import CategoryScroll from "../components/CategoryScroll";
import ProductCardList from "../components/ProductCardList";

export default function HomePage() {
    return (
        <>
            <Hero />
            <StatsSection />
            <GetServiceSection />
            <NearestStores />
            <BestDeals />
            <PromoCarousel />
            <CategoryScroll />
            <ProductCardList />
            <PromoCarousel />
            {/* Add other home-specific sections here */}
        </>
    );
}
