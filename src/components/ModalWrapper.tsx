import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  className: ClassValue;
};

const ModalWrapper = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}: ModalProps) => {
  if (!isOpen) return;

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={cn(
          `relative z-30 mx-auto bg-white w-[90%] rounded-xl shadow-md border border-[#e6e7ee] p-4 transform transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-40"
          }`,
          className
        )}
      >
        <div className="flex items-center justify-between">
          <h6 className="text-xl font-bold text-zinc-800">{title}</h6>
          <RiCloseLine size={30} className="cursor-pointer" onClick={onClose} />
        </div>
        <hr className="my-3 border-[#e6e7ee]" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
