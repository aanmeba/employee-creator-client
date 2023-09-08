import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../../common/types_interfaces";
import InputSection from "./InputSection/InputSection";
import Label from "./Label/Label";
import Heading from "../Heading/Heading";
import FormSection from "./FormSection/FormSection";
import { ChangeEvent, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import FieldErrorMessage from "./FieldErrorMessage/FieldErrorMessage";
import Button from "../Button/Button";
import { styleInputField } from "../../common/styleClassName";
import { getEmployeeById } from "../../services/fetchServices";
import { useLocation } from "react-router-dom";

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver<Inputs>(schema) });

  const { pathname } = useLocation();
  const employeeId = +pathname.split("/edit/")[1];

  const [details, setDetails] = useState<Inputs>();

  const getData = async (id: number) => {
    return await getEmployeeById(id);
    // console.log(response, " ***** RESPONSE ");
  };

  useEffect(() => {
    try {
      getData(employeeId).then((data) => {
        console.log(data, " **** data");
        setDetails(data);
        setSelectOptions({
          contractType: data?.contractType,
          hoursType: data?.hoursType,
        });
      });
    } catch (err) {
      console.log("ERROR *** ", err);
    }
  }, [employeeId]);

  const onSubmit = (data: Inputs) => {
    // createNewEmployee(data)
    //   .then((data) => console.log(data, " *** Data received"))
    //   .catch((err) => console.log(err, " *** error"));
  };

  const options = {
    contractType: ["Permanent", "Contract"],
    hoursType: ["Full-time", "Part-time"],
  };

  const defaultState = {
    contractType: "",
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
          <InputField
            register={register}
            name="firstName"
            required={true}
            value={details?.firstName}
          />
          {errors.firstName && (
            <FieldErrorMessage message={errors.firstName.message} />
          )}
        </InputSection>
        <InputSection>
          <Label>Middle name (if applicable)</Label>
          <InputField
            register={register}
            name="middleName"
            required={false}
            value={details?.middleName}
          />
        </InputSection>
        <InputSection>
          <Label>Last name</Label>
          <InputField
            register={register}
            name="lastName"
            required={true}
            value={details?.lastName}
          />
          {errors.lastName && (
            <FieldErrorMessage message={errors.lastName.message} />
          )}
        </InputSection>
      </FormSection>

      <FormSection>
        <Heading>Contact details</Heading>
        <InputSection>
          <Label>Email address</Label>
          <InputField
            register={register}
            name="email"
            required={true}
            value={details?.email}
          />

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
            value={details?.mobile}
          />
          {errors.mobile && (
            <FieldErrorMessage message={errors.mobile.message} />
          )}
        </InputSection>
        <InputSection>
          <Label>Residential address</Label>
          <InputField
            register={register}
            name="address"
            required={true}
            value={details?.address}
          />
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
              storedValue={details?.contractType}
            />
          ))}
        </InputSection>
        <InputField
          register={register}
          name="startDate"
          type="date"
          value={details?.startDate?.toString()}
        />

        {errors.startDate && (
          <FieldErrorMessage message={errors.startDate.message} />
        )}
        <InputField
          register={register}
          name="finishDate"
          type="date"
          value={details?.finishDate?.toString()}
        />
        {errors.finishDate && (
          <FieldErrorMessage message={errors.finishDate.message} />
        )}
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
              storedValue={selectOptions?.hoursType}
            />
          ))}
        </InputSection>
        <InputSection>
          <Label>Hours per week</Label>
          <InputField
            register={register}
            name="hoursPerWeek"
            type="number"
            value={details?.hoursPerWeek}
          />
          {errors.hoursPerWeek && (
            <FieldErrorMessage message={errors.hoursPerWeek.message} />
          )}
        </InputSection>
      </FormSection>

      <div className="flex gap-4">
        <Button defaultBtn={false}>Save</Button>
        <Button defaultBtn={true}>Cancel</Button>
      </div>
    </form>
  );
};

export default EditForm;
