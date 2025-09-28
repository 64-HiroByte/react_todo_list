import type { FC } from "react";

import { BaseButtons } from "./BaseButtons";
import { CancelButton } from "../../atoms/button/CancelButton";
import { DeleteButton } from "../../atoms/button/DeleteButton";

type Props = {};

export const DeleteCancelButtons: FC<Props> = () => {
  const width: string = "w-28";
  return (
    <BaseButtons>
      <CancelButton className={width} />
      <DeleteButton className={width} text="削除する" />
    </BaseButtons>
  );
};
