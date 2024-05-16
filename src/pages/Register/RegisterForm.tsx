import * as React from "react";
import eyelogo from "../../assets/eye.png";
import Input from "../../components/Input/Input";
import { registerStaticData } from "../../constants/static/register";

interface RegisterFormProps {
  onSubmit: (email: string, username: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self-stretch px-4 mt-5 w-full text-stone-300"
    >
      <Input
        label={registerStaticData.email.label}
        placeholder={registerStaticData.email.placeholder}
        id={registerStaticData.email.id}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        label={registerStaticData.username.label}
        placeholder={registerStaticData.username.placeholder}
        id={registerStaticData.username.id}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        label={registerStaticData.password.label}
        type="password"
        id={registerStaticData.password.id}
        placeholder={registerStaticData.password.placeholder}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        icon={eyelogo}
      />
      <button
        type="submit"
        className="justify-center items-center px-16 py-3.5 mt-5 text-base text-white bg-blue-500 rounded"
      >
        {registerStaticData.continueBtn}
      </button>
    </form>
  );
};

export default RegisterForm;
