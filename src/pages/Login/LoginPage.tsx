// Import Dependency
import React from "react";

//Import Components
import LoginForm from "./LoginForm";

//Import Constants
import { loginStaticData } from "../../constants/static/login";

function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // Perform login logic here
    console.log("Login submitted:", email, password);
  };

  return (
    <div className="flex flex-col justify-center font-medium max-w-[463px]">
      <div className="flex flex-col items-center px-5 py-11 w-full rounded-lg bg-zinc-800">
        <div className="text-sm tracking-wide text-neutral-500">
          {loginStaticData.title}
        </div>
        <h1 className="mt-4 text-lg font-semibold text-white">
          {loginStaticData.description}
        </h1>
        <LoginForm onSubmit={handleLogin} />
        <div className="mt-4 text-sm px-6 w-full">
          <span className="font-medium text-stone-300">
            {loginStaticData.notRegistered}
          </span>
          <span className="font-medium text-stone-300 cursor-pointer">
            {loginStaticData.registerText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
