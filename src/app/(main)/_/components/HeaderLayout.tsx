"use client";
import ModalWrapper from "@/components/ModalWrapper";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { useState } from "react";
import { RiUserLine } from "react-icons/ri";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3 md:px-7 px-5 flex items-center justify-between border-b border-[#e6e7ee]">
      <div className="flex items-center gap-x-3">
        <h2 className="text-3xl font-bold text-[#292a35]">Qلاین</h2>
      </div>
      <div className="flex items-center gap-x-2">
        <ToggleSwitch />
        <button
          onClick={() => setIsOpen(true)}
          className="md:w-[150px] w-[42px] h-[42px] rounded-xl border border-[#e6e7ee] flex items-center justify-center hover:bg-gray-50 transition-all duration-300 text-[#292a33] font-medium"
        >
          <span className="md:block hidden">ورود به کیولاین</span>
          <RiUserLine size={25} className="md:hidden block" />
        </button>
        <ModalWrapper
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          title="ورود کاربران"
        >
          اثمم
        </ModalWrapper>
      </div>
    </header>
  );
};

export default HeaderLayout;
