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
    // "bg-green-700",
    "px-4",
    "py-2",
    "mx-1", // TODO: 後でマージンを調整する
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
