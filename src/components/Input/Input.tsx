// Import Dependencies
import React from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  id,
  value,
  onChange,
  className,
  icon,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm mt-5 text-shining-silver">
          {label}
        </label>
      )}
      <div className="flex gap-5 p-3.5 mt-2.5 text-base rounded border-2 border-solid border-neutral-700 text-sharkskin">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`flex-auto my-auto bg-transparent outline-none ${className}`}
          aria-label={placeholder}
        />
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="shrink-0 w-5 aspect-square cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default Input;
