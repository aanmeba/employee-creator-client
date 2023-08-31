import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../../common/types_interfaces";
import InputSection from "./InputSection/InputSection";
import Label from "./Label/Label";
import Heading from "../Heading/Heading";
import FormSection from "./FormSection/FormSection";
import DateField from "../Date/DateField";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import FieldErrorMessage from "./FieldErrorMessage/FieldErrorMessage";

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver<Inputs>(schema) });

  // const defaultValues = {
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   email: "",
  //   mobile: "",
  //   address: "",
  //   contractType: "",
  //   hoursType: "",
  //   hoursPerWeek: 0,
  // };
  // const [formValues, setFormValues] = useState<Inputs>(defaultValues);

  // : SubmitHandler<Inputs>
  const onSubmit = (data: Inputs) => {
    console.log("--- form submitted -----");
    console.log(data, " --- onSubmit data");
  };

  // const onError = (errors: FieldErrors<Inputs>) =>
  //   console.log("something went wrong", errors);

  const options = {
    contractType: ["permanent", "contract"],
    hoursType: ["full-time", "part-time"],
  };

  const defaultState = {
    contractType: "",
    // startDateMonth: "",
    // finishDateMonth: "",
    hoursType: "",
  };
  const [selectOptions, setSelectOptions] = useState(defaultState);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setSelectOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <FormSection>
        <Heading>Personal information</Heading>
        <InputSection>
          <Label>First name</Label>
          <InputField register={register} name="firstName" required={true} />
          {errors.firstName && (
            <FieldErrorMessage message={errors.firstName.message} />
          )}
        </InputSection>
        <InputSection>
          <Label>Middle name (if applicable)</Label>
          <InputField register={register} name="middleName" required={false} />
        </InputSection>
        <InputSection>
          <Label>Last name</Label>
          <InputField register={register} name="lastName" required={true} />
          {errors.lastName && (
            <FieldErrorMessage message={errors.lastName.message} />
          )}
        </InputSection>
      </FormSection>

      <FormSection>
        <Heading>Contact details</Heading>
        <InputSection>
          <Label>Email address</Label>
          <InputField register={register} name="email" required={true} />

          {errors.email && <FieldErrorMessage message={errors.email.message} />}
        </InputSection>
        <InputSection>
          <Label>Mobile number</Label>
          {/* <InputField register={register} name="mobile" required={false} /> */}
          <input
            type="text"
            {...register("mobile", {
              valueAsNumber: true,
              required: true,
            })}
            className="border"
            name="mobile"
            id="mobile"
          />
          {errors.mobile && (
            <FieldErrorMessage message={errors.mobile.message} />
          )}
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
        <InputField register={register} name="startDate" type="date" />
        {/* <DateField
          register={register}
          name="startDate"
          value={selectOptions.startDateMonth}
          onChange={handleChange}
        /> */}
        {errors.startDate && (
          <FieldErrorMessage message={errors.startDate.message} />
        )}
        <InputField register={register} name="finishDate" type="date" />
        {errors.finishDate && (
          <FieldErrorMessage message={errors.finishDate.message} />
        )}
        {/* <DateField
          register={register}
          name="finishDate"
          value={selectOptions.finishDateMonth}
          onChange={handleChange}
        /> */}
        <InputSection>
          <Label>Is this on a full-time or part-time basis?</Label>
          {options.hoursType.map((opt, i) => (
            <InputField
              type="radio"
              value={opt}
              register={register}
              name="hoursType"
              required={true}
              key={i}
              onChange={handleChange}
            />
          ))}
        </InputSection>
        <InputSection>
          <Label>Hours per week</Label>
          <InputField register={register} name="hoursPerWeek" type="number" />
          {errors.hoursPerWeek && (
            <FieldErrorMessage message={errors.hoursPerWeek.message} />
          )}
        </InputSection>
      </FormSection>

      <button>Register</button>
    </form>
  );
};

export default Form;
