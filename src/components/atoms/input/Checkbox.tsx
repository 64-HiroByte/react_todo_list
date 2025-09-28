import type { FC } from "react";

type Props = {
  className?: string;
  onChange?: () => void;
  //   type?: "text" | "checkbox";
};

export const Checkbox: FC<Props> = ({ className = "" }) => {
  return <input type="checkbox" className={className} />;
};
