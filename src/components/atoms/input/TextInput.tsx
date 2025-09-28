import type { FC } from "react";

type Props = {
  className?: string;
  onChange?: () => void;
  placeholder?: string;
  //   type?: "text" | "checkbox";
};

export const TextInput: FC<Props> = ({ className = "", placeholder = "" }) => {
  const baseClasses = [
    "bg-gray-50",
    "",
    "px-4",
    "py-2",
    "rounded-md",
    "border-2",
    "border-gray-400",
  ];
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${baseClasses.join(" ")} ${className}`}
    />
  );
};
