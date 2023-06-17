import { FC } from "react";

const Button: FC<any> = (props) => {
  const {
    children,
    onClick,
    disabled = false,
    type = "submit",
    ...rest
  } = props;
  return (
    <div>
      <button
        className="uppercase  py-2 px-10 bg-[#acb9a2] hover:bg-[#fb693c] rounded-full text-white font-bold"
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
