import { FC, useState } from "react";
import SearchInput from "../component/SearchInput";
import RecipeCard from "../component/Card";
import axios from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/useDebounce";

const RecipesList: FC = () => {
  const [search, setSearch] = useState("");
  const [recipesLists, setRecipesLists] = useState([]);
  
  const fetchRecipes = () => {
    return axios.get("/recipe/list").then((res) => res?.data);
  };

  const { isLoading, data: recipeList }: any = useQuery({
    queryKey: ["recipe-list"],
    queryFn: fetchRecipes,
  });

  // DeBounce Function
  useDebounce(
    () => {
      setRecipesLists(
        recipeList.data.filter((d: any) =>
          d.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [recipeList, search],
    1000
  );

  const handleSearch = (e: any) => setSearch(e.target.value);

  return (
    <div>
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
          recipeValue={search || ""}
          handleChangeEvent={handleSearch}
        />
      </div>
      {isLoading ? (
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {recipesLists?.map((dd: any, index: any) => {
            const checkIsEven = index % 2 === 0;
            return (
              <RecipeCard
                isEven={checkIsEven}
                description={dd?.title}
                imgUrl={dd?.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecipesList;