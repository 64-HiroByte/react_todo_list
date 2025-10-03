import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
  onClick: () => void;
};

export const DeleteButton: FC<Props> = ({
  text = "削除",
  className = "",
  onClick,
}) => {
  return (
    <BaseButton
      className={`bg-red-700 ${className}`}
      text={text}
      onClick={onClick}
    />
  );
};
