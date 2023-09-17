import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "router/constant";

const Recipe: FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routesConstant?.recipe?.path);
  };

  const handleSignInNavigate = () => {
    navigate(routesConstant?.signIn?.path);
  };

  const handleSignUpNavigate = () => {
    navigate(routesConstant?.signUp?.path);
  };
  return (
    <>
      <div className="my-8 md:my-16 flex sm:flex-col md:flex-row justify-between items-center">
        <div className="md:mr-8">
          <img
            src="https://recipes-blog-kauanidev.vercel.app/assets/Logo.5d4b5be6.svg"
            alt="img"
            width={100}
            height={48}
          />
        </div>

        <div className="mt-4 md:mt-0 flex flex-row space-x-5">
          <button
            className="py-2 px-5 bg-[#acb9a2] hover:bg-[#fb693c] rounded-full text-white font-bold"
            type="submit"
            onClick={handleSignInNavigate}
          >
            Sign In
          </button>

          <button
            className="py-2 px-5 bg-[#acb9a2] hover:bg-[#fb693c] rounded-full text-white font-bold"
            type="submit"
            onClick={handleSignUpNavigate}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
        <div className="w-full md:w-[370px] text-center md:text-left space-y-4 md:space-y-8">
          <h1 className="text-[#fb693c] text-4xl md:text-5xl font-bold">
            Easy & Smart Recipes
          </h1>

          <p className="text-lg md:text-2xl text-[#909090]">
            Spend less time looking for the recipe you want. Here you will find
            diversity in recipes. No more repeating the same food every day. So,
            shall we cook?
          </p>

          <button
            className="py-2 px-6 md:py-3 md:px-10 bg-[#acb9a2] hover:bg-[#fb693c] rounded-full text-white font-bold"
            type="submit"
            onClick={handleNavigate}
          >
            GO TO RECIPES
          </button>
        </div>

        <div className="w-full">
          <img
            src="https://recipes-blog-kauanidev.vercel.app/assets/home-img.39ac05e7.svg"
            width={480}
            height={409}
            alt="home page"
          />
        </div>
      </div>
    </>
  );
};

export default Recipe;
