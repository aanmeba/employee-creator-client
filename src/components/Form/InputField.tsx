import { styleInputField, styleRadioBtn } from "../../common/styleClassName";
import { InputFieldType } from "../../common/types_interfaces";

const InputField = ({
  register,
  name,
  required,
  type = "text",
  value,
  onChange,
  pattern,
}: InputFieldType) => {
  const fieldStyle = type === "radio" ? styleRadioBtn : styleInputField;

  const inputField = (value?: string) =>
    value ? (
      <input
        type={type}
        {...register(name, { required: required, pattern: pattern })}
        className={fieldStyle}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        {...register(name, {
          required: required,
          pattern: pattern,
        })}
        className={fieldStyle}
        name={name}
        id={name}
      />
    );

  return (
    <>
      {value ? (
        <label className="flex gap-4 items-center py-2">
          {inputField(value)}
          {value}
        </label>
      ) : (
        inputField()
      )}
    </>
  );
};

export default InputField;
