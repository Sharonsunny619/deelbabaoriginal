import React from "react";
import Hero from "./hero";
import StatsSection from "./stats_section";
import GetServiceSection from "./get_a_service";
import PurchaseNearestBanner from "./purchase_nearest_banner";
import NearestStores from "./nearest_store";
import BestDeals from "./best_deals";
import PromoCarousel from "./promo_carousal";
import FindYourNeeds from "./find_your_needs";
import FeaturedProducts from "./featured_product";
export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <GetServiceSection />
      <PurchaseNearestBanner/>
      <NearestStores/>
      <BestDeals/>
      <PromoCarousel/>
      <FindYourNeeds/>
      <FeaturedProducts/>
      <PromoCarousel />

    </div>
  );
}
