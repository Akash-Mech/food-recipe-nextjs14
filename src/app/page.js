import { About } from "@/components/About";

import { Hero } from "@/components/Hero";
import {fetchListOfRecipes} from '../app/recipe-list/page'
import { Category } from "@/components/Category";

export default async function Home() {
  const recipe = await fetchListOfRecipes();
  return (
    <div>
      
      <Hero />
      <Category recipe={recipe} />
      <About />
    
    </div>
  );
}
