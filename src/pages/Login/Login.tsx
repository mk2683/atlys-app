// Import Dependency
import React from "react";

// Import Assets
import logo from "../../assets/Logo.png";

//Import Components
import LoginPage from "./LoginPage";

// Import Types
import { LoginProps } from "../../types/interfaces/login";

const Login: React.FC<LoginProps> = ({
  setIsDashboardVisible,
  setIsRegisterVisible,
}) => {
  return (
    <div className="flex justify-center items-center h-full px-16 py-20 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col justify-center mt-6 max-w-full w-[467px] max-md:mt-10">
        <img
          loading="lazy"
          src={logo}
          className="self-center w-10 aspect-square mb-12"
          alt="logo"
        />
        <LoginPage
          setIsDashboardVisible={setIsDashboardVisible}
          setIsRegisterVisible={setIsRegisterVisible}
        />
      </div>
    </div>
  );
};

export default Login;
