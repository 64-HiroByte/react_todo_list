import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
};

export const SaveButton: FC<Props> = ({ text = "追加", className = "" }) => {
  return <BaseButton className={`bg-blue-700 ${className}`} text={text} />;
};
