import type { FC, InputHTMLAttributes } from "react";
// 👇️一般的な型の指定（間違いではない）
// type Props = {
//   className?: string;
//   checked: boolean;
//   onChange: () => void;
//   disabled: boolean;
// };
// 👇️ このように書けば型指定で必要なものだけ指定可能（Omit なら使用しないものだけ明示できる）
interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "checked" | "onChange" | "disabled"
  > {
  className?: string;
}

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
