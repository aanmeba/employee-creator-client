import { ChildrenProps } from "../common/types_interfaces";

const Heading = ({ children }: ChildrenProps) => {
  return <h1 className="text-xl font-bold">{children}</h1>;
};

export default Heading;
