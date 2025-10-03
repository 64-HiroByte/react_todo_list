import type { ChangeEvent, FC } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const TextInput: FC<Props> = (props) => {
  const {
    value,
    onChange,
    className = "",
    placeholder = "タスクを入力してください",
    disabled,
  } = props;

  const baseStyle = [
    "bg-gray-50",
    "px-4",
    "py-2",
    "rounded-md",
    "border-2",
    "border-gray-400",
  ];

  const disabledStyle = disabled ? ["text-gray-400"] : [];

  const inputStyle = [...baseStyle, ...disabledStyle, className].join(" ");

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={inputStyle}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
