import { ChildrenProps } from "../../../common/types_interfaces";
import { findWidthValue } from "../../../helpers/helpers";

interface WidthProps extends ChildrenProps {
  inputSize?: string;
}

const InputSection = ({ children, inputSize = "md" }: WidthProps) => {
  const classList = `flex flex-col w-${findWidthValue(
    inputSize
  )} relative h-28`;

  return <div className={classList}>{children}</div>;
};

export default InputSection;
