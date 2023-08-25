// import InputField from "./InputField";
import { InputFieldType } from "../common/types_interfaces";
import SelectField from "./SelectField";

const DateField = ({ register, name, onChange, value }: InputFieldType) => {
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
      />
      <SelectField
        register={register}
        name={name + "Month"}
        onChange={onChange}
        value={value}
      />
      <input
        type="datetime"
        placeholder="Year"
        {...register("Year", { required: true, pattern: /yyyy/i })}
      />
    </div>
  );
};

export default DateField;
