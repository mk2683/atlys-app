// Import Dependency
import React from "react";

//Import Components
import LoginForm from "./LoginForm";

//Import Constants
import { loginStaticData } from "../../constants/static/login";

// Import Types
import { LoginProps } from "../../types/interfaces/login";

const LoginPage: React.FC<LoginProps> = ({ setIsDashboardVisible }) => {
  const handleLogin = (email: string, password: string) => {
    // Perform login logic here
    console.log("Login submitted:", email, password);
    setIsDashboardVisible(true);
  };

  return (
    <div className="flex flex-col justify-center font-medium max-w-[463px] bg-gradient-to-b from-sharkFin to-jet rounded p-0.5">
      <div className="flex flex-col items-center px-3 py-7 w-full rounded bg-zinc-800">
        <div className="text-sm tracking-wide text-neutral-500">
          {loginStaticData.title}
        </div>
        <h1 className="mt-3 text-lg font-semibold text-white">
          {loginStaticData.description}
        </h1>
        <LoginForm onSubmit={handleLogin} />
        <div className="mt-4 text-sm px-6 w-full">
          <span className="font-medium text-sharkskin">
            {loginStaticData.notRegistered}
          </span>
          <span className="font-medium text-stone-300 cursor-pointer">
            {loginStaticData.registerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
