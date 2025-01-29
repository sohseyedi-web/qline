"use client";
import api from "@/service/http";
import { CHECK_OTP } from "@/service/urls";
import { CheckOtpTypes } from "@/types";
import Button from "@/ui/Button";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";

const CheckOTP = ({ phoneNumber, onResend, setStep }: CheckOtpTypes) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(60);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FieldValues) => api.post(CHECK_OTP, data),
  });
  const router = useRouter();

  const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber, otp });
      const { message } = data?.data;
      toast.success(message);
      if (!data?.data?.user?.isActive) {
        setStep(3);
      } else {
        router.push("/profile");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 && setInterval(() => setTime((prevTime) => prevTime - 1), 1000);

    return () => {
      if (timer) return clearInterval(timer);
    };
  }, [time]);

  return (
    <form className="space-y-4" onSubmit={checkOTPHandler}>
      <div className="flex flex-col gap-y-3 text-right">
        <div>
          کد به شماره{" "}
          <span className="font-semibold">{toPersianNumbers(phoneNumber)}</span>{" "}
          ارسال شده
        </div>
        <span
          onClick={() => setStep((s) => s - 1)}
          className="text-right font-semibold cursor-pointer  text-cyan-700"
        >
          ویرایش شماره؟
        </span>
      </div>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        inputStyle={{
          width: "11%",
          height: "50px",
          border: "2px solid #e6e7ee",
          borderRadius: "1.2rem",
          backgroundColor: "transparent",
          outline: "none",
        }}
        containerStyle="flex flex-row-reverse justify-between"
        renderInput={(props) => <input {...props} />}
      />
      {time > 0 ? (
        <>
          <Button
            className="text-white bg-[#212121] hover:bg-[#161616]"
            loading={isPending}
            title="ثبت کد"
          />
          <p className="mt-2 text-center" dir="rtl">
            {toPersianNumbers(String(time))} ثانیه تا انقضای کد
          </p>
        </>
      ) : (
        <Button
          className={"text-white bg-gray-800 hover:bg-gray-600"}
          title="ارسال مجدد کد"
          onClick={onResend}
        />
      )}
    </form>
  );
};

export default CheckOTP;
