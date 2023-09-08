import { ChangeEventHandler, ReactNode } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface Inputs {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  address?: string;
  contractType?: string;
  startDate?: Date;
  finishDate?: Date;
  hoursType?: string;
  hoursPerWeek: number;
}

export interface ReceivedInputs extends Inputs {
  id: number;
}

export type ContractType = "permanent" | "contract";

export interface ChildrenProps {
  children: ReactNode;
}

export interface InputFieldType {
  register: UseFormRegister<FieldValues & Inputs>;
  name: string;
  required?: boolean;
  type?: string;
  onChange?: ChangeEventHandler;
  // pattern?: RegExp;
}

export interface TextInputFieldType extends InputFieldType {
  value?: string;
  storedValue?: string;
}
export interface NumberInputFieldType extends InputFieldType {
  value?: number;
}
