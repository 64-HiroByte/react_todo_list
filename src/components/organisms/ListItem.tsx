import type { FC } from "react";
import { Checkbox } from "../atoms/input/Checkbox";
import { EditDeleteButtons } from "../molecules/buttons/EditDeleteButtons";

type Props = {};

export const ListItem: FC<Props> = () => {
  return (
    <div className="flex items-center gap-2 border-1">
      <Checkbox className="size-6" />
      <span className="w-120">TODO Listの１番目</span>
      <EditDeleteButtons />
    </div>
  );
};
