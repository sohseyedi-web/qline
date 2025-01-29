import { SendOtpTypes } from "@/types";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";

const SendOtp = ({ onSubmit, loading, register, errors }: SendOtpTypes) => {
  return (
    <form className="space-y-5 mt-3 w-full" onSubmit={onSubmit}>
      <p className="my-3">
        برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید:
      </p>
      <TextField
        label={""}
        placeholder="شماره موبایل"
        name={"phoneNumber"}
        register={register}
        errors={errors}
        validationSchema={{
          required: "شماره موبایل ضرروی است",
          minLength: {
            value: 11,
            message: "شماره موبایل اشتباه است",
          },
        }}
      />
      <Button
        className="text-white bg-[#212121] hover:bg-[#161616]"
        title="ورود / ثبت نام"
        loading={loading}
      />
    </form>
  );
};

export default SendOtp;
