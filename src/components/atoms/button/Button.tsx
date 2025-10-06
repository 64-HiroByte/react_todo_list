import type { ButtonHTMLAttributes, FC } from "react";
// 一般的な型の指定（間違いではない）
// type Props = {
//   label: string;
//   className?: string;
//   onClick?: () => void;
//   disabled?: boolean;
//   type?: "button" | "submit";
// };
// 👇️ このように書けば型指定を省略できて、必要なものだけ追加することができる
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<Props> = (props) => {
  const { children, className = "", onClick, disabled = false, type } = props;
  // const { label, className = "", onClick, disabled = false, type } = props;

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
      {children}
    </button>
  );
};
