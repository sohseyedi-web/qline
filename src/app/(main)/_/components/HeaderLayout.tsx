"use client";
import ModalWrapper from "@/components/ModalWrapper";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { useState } from "react";
import AuthContainer from "./auth/AuthContainer";
import UserAuthBtn from "./UserAuthBtn";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3 md:px-7 px-5 flex items-center justify-between border-b border-[#e6e7ee]">
      <div className="flex items-center gap-x-3">
        <h2 className="text-3xl font-bold text-[#292a35]">Qلاین</h2>
      </div>
      <div className="flex items-center gap-x-2">
        <ToggleSwitch />
        <UserAuthBtn onOpen={() => setIsOpen(true)} />
        <ModalWrapper
          className="lg:w-[28%] md:w-[50%]"
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          title="ورود کاربران"
        >
          <AuthContainer />
        </ModalWrapper>
      </div>
    </header>
  );
};

export default HeaderLayout;
