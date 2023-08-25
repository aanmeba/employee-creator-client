import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../common/types_interfaces";
import InputSection from "./InputSection";
import Label from "./Label";
import Heading from "./Heading";
import FormSection from "./FormSection";
import DateField from "./DateField";
import { ChangeEvent, useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const options = {
    contractType: ["permanent", "contract"],
    isFullTime: ["full-time", "part-time"],
  };

  const defaultState = {
    contractType: "",
    startDateMonth: "",
    finishDateMonth: "",
    isFullTime: false,
  };
  const [selectOptions, setSelectOptions] = useState(defaultState);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    console.log(event, event.target, "--id : ", id, "-- value: ", value);
    setSelectOptions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <FormSection>
        <Heading>Personal information</Heading>
        <InputSection>
          <Label>First name</Label>
          <InputField register={register} name="firstName" required={true} />
        </InputSection>
        <InputSection>
          <Label>Middle name (if applicable)</Label>
          <InputField register={register} name="middleName" required={false} />
        </InputSection>
        <InputSection>
          <Label>Last name</Label>
          <InputField register={register} name="lastName" required={true} />
        </InputSection>
      </FormSection>

      <FormSection>
        <Heading>Contact details</Heading>
        <InputSection>
          <Label>Email address</Label>
          {/* <InputField
            register={register}
            name="email"
            required={true}
            pattern={/^\S+@\S+$/i}
          /> */}
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: "invalid email format" },
            })}
            className="border"
            name={"email"}
            id={"email"}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </InputSection>
        <InputSection>
          <Label>Mobile number</Label>
          <InputField register={register} name="mobile" required={false} />
        </InputSection>
        <InputSection>
          <Label>Residential address</Label>
          <InputField register={register} name="address" required={true} />
        </InputSection>
      </FormSection>

      <FormSection>
        <Heading>Employee status</Heading>
        <InputSection>
          <Label>What is contract type?</Label>
          {options.contractType.map((opt, i) => (
            <InputField
              type="radio"
              value={opt}
              register={register}
              name="contractType"
              required={true}
              key={i}
              onChange={handleChange}
            />
          ))}
        </InputSection>
        <DateField
          register={register}
          name="startDate"
          value={selectOptions.startDateMonth}
          onChange={handleChange}
        />
        <DateField
          register={register}
          name="finishDate"
          value={selectOptions.finishDateMonth}
          onChange={handleChange}
        />
        <InputSection>
          <Label>Is this on a full-time or part-time basis?</Label>
          {options.isFullTime.map((opt, i) => (
            <InputField
              type="radio"
              value={opt}
              register={register}
              name="isFullTime"
              required={true}
              key={i}
              onChange={handleChange}
            />
          ))}
        </InputSection>
        <InputSection>
          <Label>Hours per week</Label>
          <InputField register={register} name="hoursPerWeek" type="number" />
        </InputSection>
      </FormSection>

      <input type="submit" />
    </form>
  );
};

export default Form;
