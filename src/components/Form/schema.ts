// import { Resolver } from "react-hook-form";
import * as yup from "yup";
import { ContractType } from "../../common/types_interfaces";

export const schema = yup.object({
  firstName: yup.string().required("please enter your firstname"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("please enter your lastname"),
  email: yup
    .string()
    .required("please enter your email")
    .email("email must be a valid format"),
  mobile: yup
    .string()
    .required("please enter your mobile number")
    .min(9, "must be an Australian number"),
  address: yup.string(),
  // .required("please enter your address"),
  contractType: yup.string<ContractType>(),
  startDate: yup.date().required("please enter your start date"),
  finishDate: yup.date().optional(),
  isFullTime: yup.boolean().optional(),
  hoursPerWeek: yup
    .number()
    .required("please enter how many hours you work per week")
    .min(4, "working hour must be at least 4 hours per week"),
});
