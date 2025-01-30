"use client";
import useQlineStore from "@/store/useQlineStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function CreatePage() {
  const selection = useQlineStore((state) => state.selection);
  const router = useRouter();

  useEffect(() => {
    if (!selection) {
      router.push("/profile");
    }
  },[selection,router]);

  return (
    <section className="p-3">
      <header className="flex items-center justify-between gap-x-5 mt-16">
        <h6 className="text-2xl font-semibold text-[#292a35]">
          ایجاد {selection?.name}
        </h6>
        <Link
          href={"/guide"}
          className="text-cyan-700 flex items-center"
        >
         راهنمای کیولاین
        </Link>
      </header>
      <hr className="mb-4 mt-1 border-[#e6e7ee]" />
    </section>
  );
}
