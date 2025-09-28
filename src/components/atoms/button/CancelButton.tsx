import type { FC } from "react";

import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  className?: string;
};

export const CancelButton: FC<Props> = ({
  text = "キャンセル",
  className = "",
}) => {
  return <BaseButton className={`bg-gray-500 ${className}`} text={text} />;
};
