import * as React from "react";
import { registerStaticData } from "../../constants/static/register";
import RegisterForm from "./RegisterForm";

interface RegisterProps {
  setIsLoginVisible: (isLoginVisible: boolean) => void;
  setIsRegisterVisible: (isLoginVisible: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({
  setIsLoginVisible,
  setIsRegisterVisible,
}) => {
  const handleRegister = (
    email: string,
    username: string,
    password: string
  ) => {
    // Perform signup logic here
    console.log("New User", email, username, password);
  };

  const openLoginModal = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center font-medium max-w-[463px] bg-gradient-to-b from-sharkFin to-jet rounded p-0.5">
        <div className="flex flex-col items-center px-3 py-7 w-full rounded bg-zinc-800">
          <div className="text-sm tracking-wide text-neutral-500">
            {registerStaticData.title}
          </div>
          <h1 className="mt-3 text-lg font-semibold text-white">
            {registerStaticData.description}
          </h1>
          <RegisterForm onSubmit={handleRegister} />
          <div className="mt-4 text-sm px-6 w-full">
            <span className="font-medium text-sharkskin">
              {registerStaticData.notLoggedIn}
            </span>
            <span
              className="font-medium text-stone-300 cursor-pointer"
              onClick={openLoginModal}
            >
              {registerStaticData.loginText}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
