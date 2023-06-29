import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "./constant";
import RecipesList from "pages/Recipe";
import RecipeDetail from "pages/Recipe/RecipeDetail";
// import Home from "pages/Home";
import RecipeHome from "pages/index";
import ManageRecipe from "pages/Recipe/ManageRecipe";
import SignIn from "pages/Auth/Sign-In/index";
import SignUp from "pages/Auth/Sign-up";
import Header from "Layout/Header";
import Profile from "pages/Auth/Profile";

const Layout = ({ children }: any) => (
  <div>
    <div className="my-16">
      <Header />
    </div>
    {children}
  </div>
);

const index: any = createBrowserRouter([
  {
    path: routesConstant.recipeHome.path,
    element: <RecipeHome />,
  },
  {
    path: routesConstant.recipe.path,
    element: (
      <Layout>
        <RecipesList />
      </Layout>
    ),
  },
  {
    path: routesConstant.recipeById.path,
    element: (
      <Layout>
        <RecipeDetail />
      </Layout>
    ),
  },
  {
    path: routesConstant.recipeCreate.path,
    element: (
      <Layout>
        <ManageRecipe />
      </Layout>
    ),
  },
  {
    path: routesConstant.profile.path,
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
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
