import { FC } from "react";

const SearchInput: FC = () => {
  return (
    <div>
      <input className="w-full p-2 rounded-xl border-solid border border-slate-600 px-4 focus:border-red-400 outline-none" type="search" name="searchRecipe" placeholder="Enter the some recipe name" />
    </div>
  );
};

export default SearchInput;
