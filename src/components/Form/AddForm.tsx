import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../../common/types_interfaces";
import InputSection from "./InputSection/InputSection";
import Label from "./Label/Label";
import Heading from "../Heading/Heading";
import FormSection from "./FormSection/FormSection";
// import DateField from "../Date/DateField";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import FieldErrorMessage from "./FieldErrorMessage/FieldErrorMessage";
import Button from "../Button/Button";
import { styleInputField } from "../../common/styleClassName";
import { createNewEmployee } from "../../services/fetchServices";
import { useNavigate } from "react-router-dom";
import NumberField from "./NumberField";

const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver<Inputs>(schema) });

  const navigation = useNavigate();

  // : SubmitHandler<Inputs>
  const onSubmit = (data: Inputs) => {
    createNewEmployee(data)
      .then((data) => console.log(data, " *** Data received"))
      .catch((err) => console.log(err, " *** error"))
      .finally(() => navigation("/"));
  };

  const options = {
    contractType: ["Permanent", "Contract"],
    hoursType: ["Full-time", "Part-time"],
  };

  const defaultState = {
    contractType: "",
    hoursType: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            className={styleInputField}
            name="mobile"
            id="mobile"
          />
          {errors.mobile && (
            <FieldErrorMessage message={errors.mobile.message} />
          )}
        </InputSection>
        <InputSection inputSize="lg">
          <Label>Residential address</Label>
          <InputField register={register} name="address" required={true} />
        </InputSection>
      </FormSection>

      <FormSection>
        <Heading>Employee status</Heading>
        <InputSection inputSize="lg">
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
        <InputSection>
          <Label>Start date</Label>
          <InputField register={register} name="startDate" type="date" />
          {errors.startDate && (
            <FieldErrorMessage message={errors.startDate.message} />
          )}
        </InputSection>
        <InputSection>
          <Label>Finish date</Label>
          <InputField register={register} name="finishDate" type="date" />
          {errors.finishDate && (
            <FieldErrorMessage message={errors.finishDate.message} />
          )}
        </InputSection>
        <InputSection inputSize="lg">
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
        <InputSection inputSize="md">
          <Label>Hours per week</Label>
          <NumberField register={register} name="hoursPerWeek" type="number" />
          {errors.hoursPerWeek && (
            <FieldErrorMessage message={errors.hoursPerWeek.message} />
          )}
        </InputSection>
      </FormSection>

      <div className="flex gap-4">
        <Button type="submit" defaultBtn={false}>
          Save
        </Button>
        <Button type="reset" defaultBtn={true}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddForm;
