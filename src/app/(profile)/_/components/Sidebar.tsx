"use client";
import dynamic from "next/dynamic";
import { useDetailUser, useLogOut } from "@/hooks/users/useGetUser";
import toast from "react-hot-toast";
import { RiShutDownLine } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";
import { useEffect } from "react";
import { useResponsiveStore } from "@/store/useResponsive";
import { useRouter } from "next/navigation";
import { Customlink } from "@/ui/CustomLink";
import Link from "next/link";

const SidebarWrapper = dynamic(() => import("@/components/SidebarWrapper"), {
  ssr: false,
});

const Sidebar = () => {
  const { logOut, isPending } = useLogOut();
  const { user, isLoading } = useDetailUser();
  const { updateMedia } = useResponsiveStore();
  const router = useRouter()

  const onLogout = async () => {
    const { data } = await logOut();
    toast.success(data?.data?.message);
    router.push("/");
  };


  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

  return (
    <SidebarWrapper>
      <section className="flex flex-col w-full h-screen p-3">
        <div className=" text-center">
          <h2 className="text-3xl font-bold text-[#292a35]">Qلاین</h2>
        </div>
        <div className="flex-1 my-8 flex flex-col space-y-7">
          <Customlink to="/profile" title="صفحه اصلی"/>
        </div>
        <Link href={"/profile/me"} className="w-full z-[5]">
          <div
            className={`${
              isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
            } border-[#e6e7ee] bg-white border-2 w-full rounded-xl px-3 py-1 flex items-center justify-between`}
          >
            <div className="flex flex-col">
              <h5 className="font-semibold text-[#292a35]">{user?.name}</h5>
              <p className="font-medium text-sm">شرکت {user?.company}</p>
            </div>
            {isPending ? (
              <ImSpinner2 size={28} className="text-red-700 animate-spin" />
            ) : (
              <RiShutDownLine
                onClick={onLogout}
                size={28}
                className="text-red-700 cursor-pointer z-10"
              />
            )}
          </div>
        </Link>
      </section>
    </SidebarWrapper>
  );
};

export default Sidebar;
