import { NavLink, useLocation } from "react-router-dom";
import { ChildrenProps } from "../../common/types_interfaces";

const Header = ({ children }: ChildrenProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full h-44 bg-slate-100 px-16 flex flex-col justify-center">
      {!isHome && (
        <span className="text-slate-400 text-xs block mb-4">
          {`< `}
          <NavLink to="/" className="underline">
            Back
          </NavLink>
        </span>
      )}
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
};

export default Header;
