import { TextFieldTypes } from "@/types";
import { get, Path } from "react-hook-form";

function TextField<T extends Record<string, any>>({
  label,
  name,
  placeholder = "",
  register,
  errors,
  validationSchema,
  value,
  onChange,
}: TextFieldTypes<T>) {
  return (
    <div className="w-full relative">
      <label htmlFor={name as string} className="block mb-1 text-zinc-700">
        {label}
      </label>
      <input
        autoComplete="off"
        className="placeholder:text-zinc-600 mb-2 input input-bordered text-zinc-800 w-full focus:bg-gray-100 bg-gray-50 h-[45px] text-center transition-all duration-300 rounded-xl outline-none"
        type="text"
        id={name as string}
        value={value}
        defaultValue={value}
        placeholder={placeholder}
        {...register(name as Path<T>, validationSchema)}
        onChange={onChange}
      />
      {get(errors, `${name as string}.message`, null) && (
        <span className="text-red-500 font-semibold">
          {get(errors, `${name as string}.message`, null)}
        </span>
      )}
    </div>
  );
}

export default TextField;
