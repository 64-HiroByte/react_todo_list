import type { FC } from "react";

type Props = {
  className?: string;
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
};

export const Checkbox: FC<Props> = ({
  className = "",
  checked,
  onChange,
  disabled,
}) => {
  const baseStyle = [
    "size-6",
    "cursor-pointer",
    "disabled:opacity-40",
    "disabled:cursor-not-allowed",
  ];
  const checkboxStyle = [...baseStyle, className].join(" ");

  return (
    <input
      type="checkbox"
      className={checkboxStyle}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
