import type { FC } from "react";

import { SaveButton } from "../atoms/button/SaveButton";
import { TextInput } from "../atoms/input/TextInput";

type Props = {
  //   width?: string;
};

export const InputGroup: FC<Props> = () => {
  return (
    <div className="flex gap-2">
      <TextInput placeholder="タスクを入力してください" className="w-146" />
      <SaveButton />
    </div>
  );
};
