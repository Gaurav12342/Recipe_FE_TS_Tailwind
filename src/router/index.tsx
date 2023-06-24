import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "./constant";
import RecipesList from "../pages/Recipe";
import RecipeDetail from "../pages/Recipe/RecipeDetail";
// import Home from "../pages/Home";
import RecipeHome from "../pages/index";
import ManageRecipe from "../pages/Recipe/ManageRecipe";
import SignIn from "../pages/Auth/Sign-In/index";
import SignUp from "../pages/Auth/Sign-up";

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
    element: <RecipeDetail />,
  },
  {
    path: routesConstant.recipeCreate.path,
    element: <ManageRecipe />,
  },
  {
    path: routesConstant.signIn.path,
    element: <SignIn />,
  },
  {
    path: routesConstant.signUp.path,
    element: <SignUp />,
  },
]);

export default index;
