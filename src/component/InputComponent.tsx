import { FC } from "react";

const InputComponent: FC<any> = (props) => {
  const { name, placeholder, type = "text", register } = props;
  return (
    <div>
      <input
        className="w-full p-2 mb-10 rounded-xl border-solid border border-slate-600 px-4 focus:border-red-400 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default InputComponent;
