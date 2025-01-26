import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface props {
  setShowForm: (x: boolean) => void;
}

const AuthModel = ({ setShowForm }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { handleUserLogin } = useContext(UserContext);
  const [formState, setFormState] = useState<"login" | "register">("login");

  const handleLogin = (data: any) => {
    handleUserLogin(data);
    reset();
    setShowForm(false);
  };

  const handleRegister = (data: any) => {
    console.log("Register Data:", data);
    reset();
    setShowForm(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black z-[99999] flex items-center justify-center">
        <div className="relative border border-white max-w-[400px] w-full">
          <p
            className="cursor-pointer absolute right-3 z-10 text-2xl top-0.5 text-white"
            onClick={() => setShowForm(false)}
          >
            X
          </p>

          {formState === "login" ? (
            <LoginForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmitForm={handleLogin}
              errors={errors}
            />
          ) : (
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmitForm={handleRegister}
              errors={errors}
            />
          )}

          <div className="text-center text-white mb-4">
            {formState === "login" ? (
              <p className="text-[13px]">
                Don't have an account?{" "}
                <span
                  className="cursor-pointer underline"
                  onClick={() => setFormState("register")}
                >
                  Register Now
                </span>
              </p>
            ) : (
              <p className="text-[13px]">
                Already have an account?{" "}
                <span
                  className="cursor-pointer underline"
                  onClick={() => setFormState("login")}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModel;
