import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
  onClick: () => void;
};

export const SaveButton: FC<Props> = ({
  text = "追加",
  className = "",
  onClick,
}) => {
  return (
    <BaseButton
      className={`bg-blue-700 ${className}`}
      text={text}
      onClick={onClick}
    />
  );
};
