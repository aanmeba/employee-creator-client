import { NavLink } from "react-router-dom";
import { ChildrenProps } from "../../common/types_interfaces";

const Header = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full h-2/5 bg-slate-100 py-12 px-16">
      <span className="text-slate-400 text-xs block mb-4">
        {`< `}
        <NavLink to="/" className="underline">
          Back
        </NavLink>
      </span>
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
};

export default Header;
