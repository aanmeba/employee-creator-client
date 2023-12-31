import { styleInputField, styleRadioBtn } from "../../common/styleClassName";
import { TextInputFieldType } from "../../common/types_interfaces";

const InputField = ({
  register,
  name,
  required,
  type = "text",
  value,
  onChange,
  storedValue,
}: TextInputFieldType) => {
  const fieldStyle = type === "radio" ? styleRadioBtn : styleInputField;

  const inputField = (value?: string) =>
    value ? (
      <input
        type={type}
        {...register(name, { required: required })}
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
        })}
        className={fieldStyle}
        name={name}
        id={name}
      />
    );

  const radioField = (value?: string, storedValue?: string) =>
    storedValue ? (
      <input
        type={type}
        {...register(name, { required: required })}
        className={fieldStyle}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        checked={storedValue?.toLowerCase() === value?.toLowerCase()}
      />
    ) : (
      <input
        type={type}
        {...register(name, { required: required })}
        className={fieldStyle}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    );

  return (
    <>
      {type === "radio" ? (
        <label className="flex gap-4 items-center py-2">
          {radioField(value, storedValue)}
          {value}
        </label>
      ) : value ? (
        inputField(value)
      ) : (
        inputField()
      )}
    </>
  );
};

export default InputField;
