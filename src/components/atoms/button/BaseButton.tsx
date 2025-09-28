import type { FC } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
};

export const BaseButton: FC<Props> = ({
  className = "",
  onClick,
  text,
  type = "button",
}) => {
  const baseClasses = [
    "rounded-md",
    "px-4",
    "py-2",
    "text-white",
    "hover:opacity-80 cursor-pointer",
  ];

  return (
    <button
      type={type}
      className={`${baseClasses.join(" ")} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
