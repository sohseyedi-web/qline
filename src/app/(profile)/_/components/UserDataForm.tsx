"use client"
import { useDetailUser, useUpdateUser } from "@/hooks/users/useGetUser";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type UserDetailsForm = {
  company: string;
  name: string;
  email: string;
  phoneNumber: string;
};

const UserDataForm = () => {
  const { user, isLoading } = useDetailUser();
  const { updateUserProfile, isUpdating } = useUpdateUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      company: "",
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        company: user?.company || "",
        name: user?.name || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (values: UserDetailsForm) => {
    await updateUserProfile(values);
  };

  if (isLoading) return <div>....</div>;

  return (
    <form
      className="space-y-4 flex flex-col lg:w-[40%] w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label={"نام کاربری"}
        name={"name"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
      />
      <TextField
        label={"ایمیل"}
        name={"email"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "ایمیل ضرروی است",
        }}
      />
      <TextField
        label={"شماره موبایل"}
        name={"phoneNumber"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "شماره موبایل ضرروی است",
        }}
      />
      <TextField
        label={"شرکت"}
        name={"company"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "نام شرکت ضرروی است",
        }}
      />

      <Button
        title="ویرایش اطلاعات"
        loading={isUpdating}
        className="text-white bg-indigo-900 hover:bg-indigo-700"
      />
    </form>
  );
};

export default UserDataForm;
