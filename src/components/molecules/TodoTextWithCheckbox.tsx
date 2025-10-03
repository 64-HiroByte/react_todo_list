import type { FC } from "react";

import { Checkbox } from "../atoms/input/Checkbox";

type Props = {
  completed: boolean;
  text: string;
  onToggle: () => void;
};

export const TodoTextWithCheckbox: FC<Props> = ({
  completed,
  text,
  onToggle,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox className="size-6" checked={completed} onChange={onToggle} />
      <span className={completed ? "text-gray-400 line-through" : ""}>
        {text}
      </span>
    </div>
  );
};
