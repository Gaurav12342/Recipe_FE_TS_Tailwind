import { FC } from "react";

const RecipeCard: FC<any> = (props) => {
  const { isEven = false, imgUrl, description } = props;
  return (
    <div>
      <div
        className={`w-72 h-80 m-3 rounded-3xl overflow-hidden shadow-lg bg-gray-50 ${
          isEven ? "bg-red-200" : "bg-lime-200"
        } ${isEven ? "text-lime-200" : "text-gray-400"}`}
      >
        <div className="overflow-hidden">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer h-full"
            src={imgUrl}
            alt="Recipe"
          />
        </div>
        <div className={`h-24 flex items-center cursor-pointer`}>
          <div className="font-bold text-lg text-center">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
