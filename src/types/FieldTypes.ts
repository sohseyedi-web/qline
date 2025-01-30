import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type ValidationSchemaTypes = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type TextFieldTypes<T extends Record<string, any>> = {
  label: string;
  name: keyof T;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  value?: string;
  onChange?: React.ChangeEventHandler;
};
