import { ChangeEventHandler, ReactNode } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface Inputs {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  address?: string;
  // contractType?: string<'permanent' | 'contract'>;
  contractType?: ContractType;
  startDate: Date;
  finishDate?: Date | boolean;
  isFullTime?: boolean;
  hoursPerWeek: number;
}

export enum ContractType {
  permanent = "permanent",
  contract = "contract",
}

export interface ChildrenProps {
  children: ReactNode;
}

export type InputFieldType = {
  register: UseFormRegister<FieldValues & Inputs>;
  name: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  pattern?: RegExp;
};
