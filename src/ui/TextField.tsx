import { TextFieldTypes } from "@/types";
import { get } from "react-hook-form";

function TextField({
  label,
  name,
  placeholder = "",
  register,
  errors,
  validationSchema,
  value,
  onChange,
}: TextFieldTypes) {
  return (
    <div className="w-full relative">
      <label htmlFor={name} className="block mb-1 text-zinc-700">
        {label}
      </label>
      <input
        autoComplete="off"
        className="placeholder:text-zinc-600 mb-2 input input-bordered text-zinc-800 w-full focus:bg-gray-100 bg-gray-50 h-[45px] text-center transition-all duration-300 rounded-xl outline-none"
        type="text"
        id={name}
        value={value}
        defaultValue={value}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        onChange={onChange}
      />
      {get(errors, `${name}.message`, null) && (
        <span className="text-red-500 font-semibold">
          {get(errors, `${name}.message`, null)}
        </span>
      )}
    </div>
  );
}

export default TextField;
