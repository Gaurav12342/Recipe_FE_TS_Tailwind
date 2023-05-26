import { FC } from "react";
import RecipeCard from "../component/Card";
import SearchInput from "../component/SearchInput";

const Recipe: FC = () => {
  return (
    <div className="w-2/4">
      <section className="flex-col text-left py-5">
        <div className="py-3">
          <h1 className="text-red-400 text-5xl font-bold">Recipes</h1>
        </div>
        <p className="text-xl text-gray-500">Easy recipes to cook at home</p>
      </section>
      <div>
        <SearchInput
          placeholder="Enter the some recipe name..."
          name={"searchRecipe"}
          type={"search"}
        />
      </div>
      <div className="flex flex-wrap">
        {[1, 2, 3, 4,5,6,7,8,9]?.map((dd) => {
          return (
            <RecipeCard
              description="Cannellini Bean and Asparagus Salad with Mushrooms"
              imgUrl="https://spoonacular.com/recipeImages/782585-312x231.jpg"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
