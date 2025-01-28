import { ClassValue } from "clsx";
import Loading from "./Loading";
import cn from "@/utils/cn";

type ButtonTypes = {
  loading?: boolean;
  title: string;
  onClick?: () => void;
  className: ClassValue;
};

const Button = ({
  className,
  loading,
  title,
  onClick = () => {},
}: ButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "mt-5 btn lg:text-lg text-base rounded-xl transition-all duration-300 border-none w-full h-[45px]",
        className
      )}
    >
      {loading ? <Loading /> : title}
    </button>
  );
};

export default Button;
