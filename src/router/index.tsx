import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "./constant";
import RecipesList from "../pages/RecipesList";

const index: any = createBrowserRouter([
  {
    path: routesConstant.recipe.path,
    element: <RecipesList />,
  },
]);

export default index;
