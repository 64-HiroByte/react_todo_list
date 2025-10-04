import type { FC } from "react";

type Props = {
  className?: string;
  text: string;
  fontSize?: number;
};

export const Span: FC<Props> = (props) => {
  const { className = "", fontSize = 18, text } = props;

  const baseStyle = ["text-gray-900"];
  const disabledStyle = [""];

  const textStyle = [...baseStyle, ...disabledStyle, className].join(" ");

  return (
    // fontSizeは動的に設定するため、別途 style で定義する
    <span className={textStyle} style={{ fontSize: `${fontSize}px` }}>
      {text}
    </span>
  );
};
