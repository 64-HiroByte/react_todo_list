import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
};

export const EditButton: FC<Props> = ({ text = "編集", className = "" }) => {
  return <BaseButton className={`bg-green-700 ${className}`} text={text} />;
};
