import { ChildrenProps } from "../../common/types_interfaces";

interface ButtonProps extends ChildrenProps {
  defaultBtn: boolean;
}

const Button = ({ children, defaultBtn }: ButtonProps) => {
  return (
    <button
      className={`w-32 py-2 border-2 rounded-md ${
        defaultBtn ? "bg-slate-100" : "bg-sky-900"
      } ${defaultBtn ? "text-slate-900" : "text-white"}
      text-xs font-bold
      `}
    >
      {children}
    </button>
  );
};

export default Button;
