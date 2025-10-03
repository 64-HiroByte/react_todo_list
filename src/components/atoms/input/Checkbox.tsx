import type { FC } from "react";

type Props = {
  className?: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox: FC<Props> = ({ className = "", checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={className}
      checked={checked}
      onChange={onChange}
    />
  );
};
