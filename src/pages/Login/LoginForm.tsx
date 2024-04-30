// Import Dependency
import React from "react";

// Import Assets
import eyelogo from "../../assets/eye.png";

//Import Components
import Input from "../../components/Input/Input";

//Import Constants
import { loginStaticData } from "../../constants/static/login";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self-stretch px-4 mt-5 w-full text-stone-300"
    >
      <Input
        label={loginStaticData.email.label}
        placeholder={loginStaticData.email.placeholder}
        id={loginStaticData.email.id}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="flex gap-5 mt-5">
        <label htmlFor="password" className="text-sm">
          {loginStaticData.password.label}
        </label>
        <div className="flex-auto text-xs text-right">
          {loginStaticData.forgotPassword}
        </div>
      </div>
      <Input
        type="password"
        id={loginStaticData.password.id}
        placeholder={loginStaticData.password.placeholder}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        icon={eyelogo}
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-3.5 mt-5 text-base text-white bg-blue-500 rounded"
      >
        {loginStaticData.loginBtn}
      </button>
    </form>
  );
};

export default LoginForm;
