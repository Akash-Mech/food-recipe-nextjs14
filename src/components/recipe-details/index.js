import Image from "next/image";
import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className=" mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      {/* <div className="my-12 px-12 ">
      <Link href={"/recipe-list"} className='p-3  text-xl outline-none px-4 py-2 bg-red-700 text-white rounded-md font-serif hover:scale-110 transition-all ease-in-out'>Go to recipe list</Link>
      </div> */}
      
      <div className="p-6 lg:max-w-6xl max-w-2xl  mx-auto py-24">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <Image
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
              alt={getRecipeDetails?.name}
              width={100}
              height={100}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-color">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-slate-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}