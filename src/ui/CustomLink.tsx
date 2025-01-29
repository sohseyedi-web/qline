import Link from "next/link";
import { usePathname } from "next/navigation";

type Customlink = {
  title: string;
  to: string;
};

export const Customlink = ({ title, to }: Customlink) => {

  const pathname = usePathname();
  const navlinkClass =
    "p-2 rounded-xl w-full lg:text-lg transition-all text-[#292a35] duration-300 hover:bg-[#212121] hover:text-white";

  return (
      <Link
        href={to}
        className={
          pathname === to
            ? `${navlinkClass} bg-[#fff] shadow lg:font-semibold font-medium`
            : `${navlinkClass}`
        }
      >
        {title}
      </Link>
  );
};
