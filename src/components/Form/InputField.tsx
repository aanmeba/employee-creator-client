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
  const inputField = (value?: string) =>
    value ? (
      <input
        type={type}
        {...register(name, { required: required, pattern: pattern })}
        className="border"
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
        className="border"
        name={name}
        id={name}
      />
    );

  return (
    <>
      {value ? (
        <label>
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
