import React from 'react'
import Hero from './hero'
import CategoryTab from './category_tab'
import OfferBanner from './offer_promo'
import ProductFilter from './product_filter'
import ProductsGrid from './products_grid'

export default function ShopComponent() {
  return (
    <div>
      <Hero/>
      <CategoryTab/>
      <OfferBanner/>
      <ProductFilter/>
      <ProductsGrid/>
    </div>
  )
}


