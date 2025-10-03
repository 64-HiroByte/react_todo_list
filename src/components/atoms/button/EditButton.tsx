import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
  onClick: () => void;
};

export const EditButton: FC<Props> = ({
  text = "編集",
  className = "",
  onClick,
}) => {
  return (
    <BaseButton
      className={`bg-green-700 ${className}`}
      text={text}
      onClick={onClick}
    />
  );
};
