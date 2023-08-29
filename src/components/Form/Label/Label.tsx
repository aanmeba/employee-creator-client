import { ChildrenProps } from "../../../common/types_interfaces";

const Label = ({ children }: ChildrenProps) => {
  return <label className="align-start">{children}</label>;
};

export default Label;
