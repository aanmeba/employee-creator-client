import { Link, NavLink } from "react-router-dom";

const CardLink = () => {
  const styleLinkText = "font-bold underline";
  return (
    <div className="flex items-start gap-2">
      <NavLink to="/edit" className={styleLinkText}>
        Edit
      </NavLink>
      |
      <Link to="/remove" className={styleLinkText}>
        Remove
      </Link>
    </div>
  );
};

export default CardLink;
