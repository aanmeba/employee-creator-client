import { InputFieldType } from "../../common/types_interfaces";

const SelectField = ({
  register,
  name,
  required,
  onChange,
  value,
}: InputFieldType) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <select
      {...(register(name), { required: required })}
      className="border"
      onChange={onChange}
      id={name}
      value={value}
    >
      {months.length > 1 &&
        months.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
    </select>
  );
};

export default SelectField;
