"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import TextField from "@/ui/TextField";
import api from "@/service/http";
import { COMPLETE_PROFILE } from "@/service/urls";

const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FieldValues) => api.post(COMPLETE_PROFILE, data),
  });

  const completedProfileHandler = async (values: FieldValues) => {
    try {
      const { data } = await mutateAsync(values);
      toast.success(data?.data?.message);
      router.push("/profile");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit(completedProfileHandler)}
    >
      <TextField
        label={"نام کاربری"}
        name="name"
        placeholder="نام خود را وارد کنید"
        register={register}
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
        errors={errors}
      />
      <TextField
        label={"نام شرکت"}
        name="company"
        placeholder="نام شرکت را وارد کنید"
        register={register}
        validationSchema={{
          required: "نام شرکت ضرروی است",
        }}
        errors={errors}
      />
      <TextField
        label={"ایمیل"}
        name="email"
        placeholder="ایمیل خود را وارد کنید"
        register={register}
        validationSchema={{
          required: "ایمیل کاربری ضرروی است",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل نا معتبر است",
          },
        }}
        errors={errors}
      />
      <Button title="تکمیل اطلاعات" loading={isPending} className="text-white bg-[#212121] hover:bg-[#161616]" />
    </form>
  );
};

export default CompleteProfile;
