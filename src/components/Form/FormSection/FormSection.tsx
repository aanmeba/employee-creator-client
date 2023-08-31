import { ChildrenProps } from "../../../common/types_interfaces";

const FormSection = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col items-start gap-4">{children}</div>;
};

export default FormSection;
