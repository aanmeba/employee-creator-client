import { ReceivedInputs } from "../../common/types_interfaces";
import { calcualteYearsOfEmployment } from "../../helpers/helpers";
import CardLink from "./CardLink";

const Card = ({ employee }: { employee: ReceivedInputs }) => {
  const { id, firstName, lastName, contractType, startDate, email } = employee;
  console.log(employee, typeof id, firstName, startDate, " --- CARD");

  return (
    <article className="flex justify-between h-32 w-full p-4">
      <div className="flex flex-col justify-around">
        <span className="font-bold">
          {firstName} {lastName}
        </span>
        <span>
          {contractType}{" "}
          {startDate
            ? " - " + calcualteYearsOfEmployment(startDate) + " yrs"
            : ""}
        </span>
        <span>{email}</span>
      </div>
      <CardLink id={id} />
    </article>
  );
};

export default Card;
