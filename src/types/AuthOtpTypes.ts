import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type SendOtpTypes = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export type CheckOtpTypes = {
  phoneNumber: string;
  onResend: () => void;
  setStep: Dispatch<SetStateAction<number>>;
};
