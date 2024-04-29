// Import Dependency
import React from "react";

// Import Assets
import eyelogo from "../../assets/eye.png";

//Import Components
import Input from "../../components/Input/Input";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self-stretch px-6 mt-5 w-full text-stone-300"
    >
      <Input
        label="Email or Username"
        placeholder="Enter your email or username"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="flex gap-5 mt-5">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <div className="flex-auto text-xs text-right">Forgot password?</div>
      </div>
      <Input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        icon={eyelogo}
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-3.5 mt-5 text-base text-white bg-blue-500 rounded"
      >
        Login now
      </button>
    </form>
  );
};

export default LoginForm;
