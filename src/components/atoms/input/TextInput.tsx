import type { ChangeEvent, FC } from "react";

type Props = {
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput: FC<Props> = ({
  className = "",
  onChange,
  placeholder = "",
  value,
}) => {
  const baseClasses = [
    "bg-gray-50",
    "px-4",
    "py-2",
    "rounded-md",
    "border-2",
    "border-gray-400",
  ];
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={`${baseClasses.join(" ")} ${className}`}
      onChange={onChange}
    />
  );
};
