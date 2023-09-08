import { ReceivedInputs } from "../../common/types_interfaces";
import {
  calculateYearsOfEmployment,
  singularOrPlural,
  toCapitalise,
} from "../../helpers/helpers";
import CardLink from "./CardLink";

const Card = ({ employee }: { employee: ReceivedInputs }) => {
  const { id, firstName, lastName, contractType, startDate, email } = employee;

  const years = startDate ? calculateYearsOfEmployment(startDate) : 0;

  return (
    <article className="flex justify-between h-32 w-full p-4">
      <div className="flex flex-col justify-around">
        <span className="font-bold">
          {firstName} {lastName}
        </span>
        <span>
          {contractType && toCapitalise(contractType)}{" "}
          {years > 0 ? ` - ${years} year${singularOrPlural(years)}` : ""}
        </span>
        <span>{email}</span>
      </div>
      <CardLink id={id} />
    </article>
  );
};

export default Card;
