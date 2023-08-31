import { Inputs } from "../../common/types_interfaces";
import CardLink from "./CardLink";

const Card = ({ employee }: { employee: Inputs }) => {
  const { firstName, lastName, contractType, startDate, email } = employee;
  return (
    <article className="flex justify-between h-32 w-full p-4">
      <div className="flex flex-col justify-around">
        <span className="font-bold">
          {firstName} {lastName}
        </span>
        <span>
          {contractType} - {startDate?.toString()}
        </span>
        <span>{email}</span>
      </div>
      <CardLink />
    </article>
  );
};

export default Card;
