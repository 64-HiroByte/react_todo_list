import type { FC } from "react";

import { BaseButtons } from "./BaseButtons";
import { EditButton } from "../../atoms/button/EditButton";
import { DeleteButton } from "../../atoms/button/DeleteButton";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export const EditDeleteButtons: FC<Props> = ({ onEdit, onDelete }) => {
  return (
    <BaseButtons>
      <EditButton onClick={onEdit} />
      <DeleteButton onClick={onDelete} />
    </BaseButtons>
  );
};
