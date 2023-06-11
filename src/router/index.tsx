import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "./constant";
import RecipesList from "../pages/RecipesList";
import RecipeById from "../pages/RecipeById";
import Home from "../pages/Home";

const index: any = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: routesConstant.recipe.path,
    element: <RecipesList />,
  },
  {
    path: routesConstant.recipeById.path,
    element: <RecipeById />,
  },
]);

export default index;
