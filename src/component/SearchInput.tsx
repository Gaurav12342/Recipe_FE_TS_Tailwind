import { FC } from "react";

const SearchInput: FC<any> = (props) => {
  const {
    handleChangeEvent,
    recipeValue,
    name,
    placeholder,
    type = "text",
  } = props;
  return (
    <div>
      <input
        className="w-full p-2 mb-10 rounded-xl border-solid border border-slate-600 px-4 focus:border-red-400 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChangeEvent}
        value={recipeValue}
      />
    </div>
  );
};

export default SearchInput;
