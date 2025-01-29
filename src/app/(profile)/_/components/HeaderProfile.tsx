"use client";
import { useResponsiveStore } from "@/store/useResponsive";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { RiMenu4Line } from "react-icons/ri";

const HeaderProfile = () => {
  const { setActive } = useResponsiveStore();

  return (
    <section className="absolute left-3 top-3 flex i gap-x-3">
    <ToggleSwitch />
      <div
        onClick={() => setActive(true)}
        className="cursor-pointer flex items-center justify-center lg:hidden border border-[#e6e7ee] rounded-xl hover:bg-gray-50 transition-all duration-300 h-[42px] w-[42px]"
      >
        <RiMenu4Line className="w-7 h-7" />
      </div>
    </section>
  );
};

export default HeaderProfile;
