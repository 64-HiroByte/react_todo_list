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
  const baseStyle = ["size-6"];
  const disabledStyle = disabled
    ? ["opacity-40", "cursor-not-allowed"]
    : ["cursor-pointer"];

  const checkboxStyle = [...baseStyle, ...disabledStyle, className].join(" ");
  return (
    <input
      type="checkbox"
      className={checkboxStyle}
      checked={checked}
      onChange={onChange}
    />
  );
};
