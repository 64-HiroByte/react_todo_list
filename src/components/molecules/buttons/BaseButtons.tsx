import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const BaseButtons: FC<Props> = ({ children, className = "" }) => {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
};
