"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  const [search, setSearch] = useState("");
  // console.log(recipeList);

  const filteredRecipes = recipeList.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div
          className="hero h-96 md:h-[400px] w-full"
          style={{
            backgroundImage: "url(/images/banner.avif)",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-brandColor text-center">
            <h1 className="text-6xl font-bold">Recipes</h1>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <input
            type="text"
            placeholder="search here"
            className="p-3 outline-none border md:w-1/3 rounded-lg "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredRecipes && filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer">
                    <div className="p-2">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recipe.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-white bg-blue-500 rounded-sm border-2 p-2 border-blue-500 font-bold">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </>
  );
}
