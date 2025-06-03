import React from 'react';
import CategoryHero from './hero';
import { CategoryType } from './interface';
import TabSection from './tab_section';
import CategoryLastHero from './last_hero';


export default function Category({ category }: { category: CategoryType }) {
  return (
    <>
      <CategoryHero category={category} />
      <TabSection/>
      <CategoryLastHero category={category}/>
    </>
  );
}
