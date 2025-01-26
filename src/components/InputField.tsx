import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validation?: Record<string, any>;
  error?: FieldError;
}

const InputField = ({
  id,
  label,
  type,
  placeholder,
  register,
  validation,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray text-[12px]">
        {label}
      </label>
      <input
        {...register(id, validation)}
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-white outline-none py-2 px-4 bg-transparent"
      />
      {error && <p className="text-[12px] text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
