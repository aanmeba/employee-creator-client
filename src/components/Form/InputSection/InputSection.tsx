import { ChildrenProps } from "../../../common/types_interfaces";

const InputSection = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col w-1/2">{children}</div>;
};

export default InputSection;
