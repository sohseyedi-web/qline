"use client";
import useQlineStore from "@/store/useQlineStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";

const buttonItems = [
  { id: 1, title: "پرسشنامه" },
  { id: 2, title: "نظرسنجی" },
  { id: 3, title: "فرم آنلاین" },
];

const CreateBox = () => {
  const [number, setNumber] = useState(0);
  const router = useRouter();
  const setSelection = useQlineStore((state) => state.setSelection);

  const onOpenModal = (value: number, title: string) => {
    setNumber(value);
    setSelection(number, title);
    router.push("/profile/create");
  };

  return (
    <section className="flex items-center justify-between flex-wrap mt-16 max-w-4xl mx-auto">
      {buttonItems.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onOpenModal(btn.id, btn.title)}
          className="flex items-center md:w-[30%] w-[45%] md:last:w-[30%] last:w-[95%] bg-zinc-800 text-zinc-100 hover:bg-zinc-900 transition-all duration-200 rounded-xl gap-x-2 lg:h-[95px] md:h-[80px] h-[60px] justify-center mb-3 max-w-3xl mx-auto"
        >
          <RiAddLine className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 siz" />
          <span className="lg:text-2xl md:text-xl font-semibold">
            {btn.title}
          </span>
        </button>
      ))}
    </section>
  );
};

export default CreateBox;
