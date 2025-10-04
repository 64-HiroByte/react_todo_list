import type { FC } from "react";

type Props = {
  className?: string;
  text: string;
};

export const Text: FC<Props> = (props) => {
  const { className = "", text } = props;

  const baseStyle = ["text-lg text-gray-900"];
  const disabledStyle = [""];
  const textStyle = [...baseStyle, ...disabledStyle, className].join(" ");

  return <span className={textStyle}>{text}</span>;
};
