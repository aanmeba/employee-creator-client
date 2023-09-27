import { styleInputField } from "../../common/styleClassName";
import { NumberInputFieldType } from "../../common/types_interfaces";

const NumberField = ({
  register,
  name,
  required,
  type,
  value,
  onChange,
}: NumberInputFieldType) => {
  const inputField = (value?: number) =>
    value ? (
      <input
        type={type}
        {...register(name, { required: required })}
        className={styleInputField}
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
        className={styleInputField}
        name={name}
        id={name}
      />
    );

  return <>{value ? inputField(value) : inputField()}</>;
};

export default NumberField;
