import { UseFormRegister } from "react-hook-form";
import InputField from "./InputField";

interface formProps {
  register: UseFormRegister<any>;
  handleSubmit: any;
  errors: any;
  onSubmitForm: any;
}

const LoginForm = ({
  register,
  handleSubmit,
  errors,
  onSubmitForm,
}: formProps) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="font-poppins flex flex-col gap-4 mx-auto text-white p-5 relative"
    >
      <h1 className="text-xl font-bold text-center">
        Welcome Back to <br /> Vege-Foods
      </h1>

      <InputField
        id="email"
        label="Your Email"
        type="email"
        placeholder="example@gmail.com"
        register={register}
        validation={{ required: "Email is required" }}
        error={errors.email}
      />

      <InputField
        id="password"
        label="Your Password"
        type="password"
        placeholder="********"
        register={register}
        validation={{ required: "Password is required" }}
        error={errors.password}
      />

      <button
        type="submit"
        className="w-full bg-primary/90 px-4 py-2 uppercase font-semibold duration-150 hover:shadow-md hover:shadow-primary"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
