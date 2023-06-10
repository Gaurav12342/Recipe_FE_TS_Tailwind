import { FC } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { useQuery } from "@tanstack/react-query";

const RecipeById: FC = () => {
  const params = useParams();
  const fetchRecipesById = () => {
    return axios.get(`/recipe/list/${params?.id}`).then((res) => res?.data);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["fetch guery by id"],
    queryFn: fetchRecipesById,
  });
  console.log("🚀 ~ file: RecipeById.tsx:16 ~ data:", data);

  return (
    <div>
      {/* Header section */}
      <section className="flex-col text-left py-5">
        <div className="py-3">
          <h1 className="text-red-400 text-5xl font-bold">
            {data?.data?.title}
          </h1>
        </div>
      </section>

      {/* Card section */}
      <div>
        <div
          className={`w-1/1 h-80 my-3 rounded-3xl overflow-hidden shadow-lg bg-red-100 flex mt-7`}
        >
          <div className="overflow-hidden w-2/5">
            <img className="h-full" src={data?.data?.image} alt="Recipe" />
          </div>
          <div
            className={`p-3 h-full flex flex-col space-y-2 justify-center items-left`}
          >
            <div className="flex space-x-2">
              <div className="font-bold text-xl text-red-400">{"Prep:"}</div>
              <div className="font-bold text-xl text-gray-400">
                {`${data?.data?.readyInMinutes} mins`}
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="font-bold text-xl text-red-400">
                {"Servings:"}
              </div>
              <div className="font-bold text-xl text-gray-400">
                {data?.data?.servings}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients section */}
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold text-red-400 mt-14 mb-8">
          Ingredients
        </h1>
        <div>
          {data?.data?.extendedIngredients?.map((ingred: any) => {
            return (
              <ul
                role="list"
                className="list-disc list-inside space-y-3 flex items-end"
              >
                <li className="text-2xl text-lime-400 font-bold">
                  {ingred?.amount} {ingred?.unit} |
                </li>
                <p className="text-2xl text-gray-400">
                  &nbsp; {ingred?.originalName}
                </p>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeById;