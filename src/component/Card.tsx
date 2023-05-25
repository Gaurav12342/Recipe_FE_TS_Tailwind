import { FC } from "react";

const RecipeCard: FC<any> = (props) => {
  const { isEven = true } = props;
  return (
    <div>
      <div className={`w-72 h-80 rounded-3xl overflow-hidden shadow-lg bg-gray-50 ${isEven ? 'bg-red-200' : 'bg-lime-200'}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-125 transition-all duration-500 cursor-pointer h-full"
            src="https://spoonacular.com/recipeImages/782585-312x231.jpg"
            alt="Recipe"
          />
        </div>
        <div className={`h-24 flex items-center`}>
          <div className="font-bold text-lg text-center">
            Cannellini Bean and Asparagus Salad with Mushrooms
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
