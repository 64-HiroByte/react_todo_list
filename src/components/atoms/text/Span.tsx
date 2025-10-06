import type { FC } from "react";

type Props = {
  className?: string;
  text: string;
  fontSize?: number;
  color?: string;
};

export const Span: FC<Props> = (props) => {
  const {
    className = "",
    fontSize = 18,
    color = "text-gray-900",
    text,
  } = props;

  const baseStyle = [color];

  const textStyle = [...baseStyle, className].join(" ");

  return (
    // fontSizeは動的に設定するため、別途 style で定義する
    <span className={textStyle} style={{ fontSize: `${fontSize}px` }}>
      {text}
    </span>
  );
};
