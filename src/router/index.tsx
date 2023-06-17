import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "./constant";
import RecipesList from "../pages/RecipesList";
import RecipeById from "../pages/RecipeById";
// import Home from "../pages/Home";
import RecipeHome from "../pages/index";
import ManageRecipe from "../pages/ManageRecipe";

const index: any = createBrowserRouter([
  {
    path: routesConstant.recipeHome.path,
    element: <RecipeHome />,
  },
  {
    path: routesConstant.recipe.path,
    element: <RecipesList />,
  },
  {
    path: routesConstant.recipeById.path,
    element: <RecipeById />,
  },
  {
    path: routesConstant.recipeCreate.path,
    element: <ManageRecipe />,
  },
]);

export default index;
