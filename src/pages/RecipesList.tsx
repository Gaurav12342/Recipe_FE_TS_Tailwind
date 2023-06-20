import { FC, useState } from "react";
import SearchInput from "../component/InputComponent";
import RecipeCard from "../component/Card";
import axios from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/useDebounce";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../router/constant";
import InputComponent from "../component/InputComponent";

const RecipesList: FC = () => {
  const navigate = useNavigate();

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

  const navigateCreateRecipe = () => {
    navigate(routesConstant?.recipeCreate?.path);
  };

  return (
    <div>
      <section className="flex-col text-left py-5">
        <div className="py-3">
          <h1 className="text-red-400 text-5xl font-bold">Recipes</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl text-gray-500">Easy recipes to cook at home</p>
          <Button onClick={navigateCreateRecipe}>Create Recipe</Button>
        </div>
      </section>
      <div>
        {/* <InputComponent
          placeholder="Enter the some recipe name..."
          name={"searchRecipe"}
          type={"search"}
          recipeValue={search || ""}
          handleChangeEvent={handleSearch}
        /> */}
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
                {...dd}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecipesList;
