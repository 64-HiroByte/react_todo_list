import type { FC } from "react";

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export const Button: FC<Props> = (props) => {
  const { label, className = "", onClick, disabled = false, type } = props;

  const baseStyle = [
    "rounded-md",
    "h-11",
    "px-4",
    "py-2",
    "text-white",
    "hover:opacity-80",
    "cursor-pointer",
    "disabled:opacity-40",
    "disabled:cursor-not-allowed",
  ];
  const buttonStyle = [...baseStyle, className].join(" ");

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};
