"use client";
import { RiUserLine } from "react-icons/ri";
import { useDetailUser } from "@/hooks/users/useGetUser";
import { useRouter } from "next/navigation";

const UserAuthBtn = ({ onOpen }: { onOpen: () => void }) => {
  const { user, isLoading } = useDetailUser();
  const router = useRouter();

  const onHandleRouter = () => {
    if (user) {
      router.push("/profile");
    } else {
      onOpen();
    }
  };

  const buttonClasses = `
    ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}
    ${user ? "border-2" : "border"}
    md:w-[150px] w-[42px] h-[42px] rounded-xl border-[#e6e7ee]
    flex items-center justify-center hover:bg-gray-50 transition-all
    duration-300 text-[#292a33] font-medium
  `;

  return (
    <button
      onClick={onHandleRouter}
      aria-label={user ? "صفحه پروفایل شما" : "ورود به کیولاین"}
      className={buttonClasses}
    >
      <span className="md:block hidden">
        {user ? user.name : "ورود به کیولاین"}
      </span>
      <RiUserLine size={25} className="md:hidden block" />
    </button>
  );
};

export default UserAuthBtn;
