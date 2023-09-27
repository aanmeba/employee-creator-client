// import InputField from "./InputField";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { InputFieldType } from "../../common/types_interfaces";
import SelectField from "../../../.archive/SelectField";

const DateField = ({ register, name }: InputFieldType) => {
  const dateObj = {
    day: "",
    month: "",
    year: "",
  };

  const [dateState, setDateState] = useState(dateObj);

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { name: fieldName, value } = e.target;
    console.log(fieldName, value);
    setDateState((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <div className="flex gap-4" id={name}>
      <input
        type="datetime"
        placeholder="Day"
        {...register("Day", {
          required: true,
          max: 31,
          min: 1,
          maxLength: 2,
          pattern: /dd/i,
        })}
        name="day"
        onChange={handleChange}
      />
      <SelectField
        register={register}
        name={name + "Month"}
        onChange={handleChange}
        value={dateState.month}
      />
      <input
        type="datetime"
        placeholder="Year"
        {...register("Year", { required: true, pattern: /yyyy/i })}
        onChange={handleChange}
        name="year"
      />
    </div>
  );
};

export default DateField;
