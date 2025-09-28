import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
};

export const DeleteButton: FC<Props> = ({ text = "削除", className = "" }) => {
  return <BaseButton className={`bg-red-700 ${className}`} text={text} />;
};
