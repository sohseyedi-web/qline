"use client";
import api from "@/service/http";
import { GET_OTP } from "@/service/urls";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SendOTP from "./SendOTP";
import CheckOTP from "./CheckOTP";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FieldValues) => api.post(GET_OTP, data),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendOTPHandler = async () => {
    try {
      const { data } = await mutateAsync({ phoneNumber: "09331559119" });
      toast.success(data?.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setStep(2);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            onSubmit={handleSubmit(sendOTPHandler)}
            loading={isPending}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTP
            onResend={sendOTPHandler}
            phoneNumber={"09331559119"}
            setStep={setStep}
          />
        );
    }
  };

  return <section className="w-full py-2">{renderStep()}</section>;
};

export default AuthContainer;
