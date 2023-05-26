import { FC } from "react";
import RecipeCard from "../component/Card";
import SearchInput from "../component/SearchInput";

const Recipe: FC = () => {
  return (
    <div className="w-3/5">
      <SearchInput />
      <RecipeCard />
    </div>
  );
};

export default Recipe;
