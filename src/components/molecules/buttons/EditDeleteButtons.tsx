import type { FC } from "react";

import { BaseButtons } from "./BaseButtons";
import { EditButton } from "../../atoms/button/EditButton";
import { DeleteButton } from "../../atoms/button/DeleteButton";

type Props = {};

export const EditDeleteButtons: FC<Props> = () => {
  return (
    <BaseButtons>
      <EditButton />
      <DeleteButton />
    </BaseButtons>
  );
};
