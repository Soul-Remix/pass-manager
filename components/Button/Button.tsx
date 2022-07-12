import { ReactNode } from "react";

interface IProps {
  disabled?: boolean;
  children: ReactNode;
  onClick?: any;
}

const Button = ({ children, disabled, onClick }: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="mt-8 mb-6 p-4 bg-main dark:bg-mainDark text-black rounded-lg shadow-md text-lg flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default Button;
