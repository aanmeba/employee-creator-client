import { NavLink } from "react-router-dom";
import { removeEmployeeById } from "../../services/fetchServices";
import { ReceivedInputs } from "../../common/types_interfaces";

const CardLink = ({ id }: Partial<ReceivedInputs>) => {
  const styleLinkText = "font-bold underline";

  const handleRemoveBtn = () => {
    console.log("-- remove btn clicked ", id);

    removeEmployeeById(id)
      .then((data) => console.log(data))
      .catch((err) => console.log("SOMETHING WENT WRONG!!!", err));
  };

  return (
    <div className="flex items-start gap-2">
      <NavLink to="/edit" state={id} className={styleLinkText}>
        Edit
      </NavLink>
      |
      <button onClick={handleRemoveBtn} className={styleLinkText}>
        Remove
      </button>
    </div>
  );
};

export default CardLink;
