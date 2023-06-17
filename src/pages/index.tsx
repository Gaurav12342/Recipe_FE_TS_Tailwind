import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../router/constant";

const Recipe: FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routesConstant?.recipe?.path);
  };
  return (
    <div>
      <div className="my-16 flex flex-row justify-between items-center">
        <img
          src="https://recipes-blog-kauanidev.vercel.app/assets/Logo.5d4b5be6.svg"
          alt="img"
          width={100}
          height={48}
        />

        <button
          className="py-5 px-12 bg-[#acb9a2] hover:bg-[#fb693c] rounded-full text-white font-bold"
          type="submit"
          onClick={handleNavigate}
        >
          GO TO RECIPES
        </button>
      </div>

      <div className="grid grid-col-6 grid-flow-col gap-32">
        <div className="w-[370px] text-left">
          <h1 className="text-[#fb693c] mb-8 font-bold text-5xl">
            Easy & Smart Recipes
          </h1>

          <p className="text-2xl text-[#909090]">
            Spend less time looking for the recipe you want. Here you will find
            diversity in recipes. No more repeating the same food every day. So,
            shall we cook?
          </p>
        </div>

        <div>
          <img
            src="https://recipes-blog-kauanidev.vercel.app/assets/home-img.39ac05e7.svg"
            width={480}
            height={409}
            alt="home page"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
