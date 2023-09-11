import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../../common/types_interfaces";

interface ButtonProps extends ChildrenProps {
  defaultBtn: boolean;
  type?: "submit" | "button" | "reset" | undefined;
}

const Button = ({ children, defaultBtn, type = "submit" }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => type === "reset" && navigate("/");

  return (
    <button
      className={`w-32 py-2 border-2 rounded-md ${
        defaultBtn ? "bg-slate-100" : "bg-sky-900"
      } ${defaultBtn ? "text-slate-900" : "text-white"}
      text-xs font-bold
      `}
      type={type === "reset" ? "button" : type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
