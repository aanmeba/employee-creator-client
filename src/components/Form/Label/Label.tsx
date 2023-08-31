import { ChildrenProps } from "../../../common/types_interfaces";

const Label = ({ children }: ChildrenProps) => {
  return <label className="align-start font-bold">{children}</label>;
};

export default Label;
