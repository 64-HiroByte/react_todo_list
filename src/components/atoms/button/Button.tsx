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

  const baseStyle = ["rounded-md", "h-11", "px-4", "py-2", "text-white"];
  const disabledStyle = disabled
    ? ["opacity-40", "cursor-not-allowed"]
    : ["hover:opacity-80", "cursor-pointer"];

  const buttonStyle = [...baseStyle, ...disabledStyle, className].join(" ");

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
