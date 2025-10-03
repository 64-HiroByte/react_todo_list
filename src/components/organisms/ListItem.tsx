import type { FC } from "react";

import { EditDeleteButtons } from "../molecules/buttons/EditDeleteButtons";
import { TodoTextWithCheckbox } from "../molecules/TodoTextWithCheckbox";
import type { TodoType } from "../../types/todo";
import { InputGroup } from "./InputGroup";

type Props = {
  todo: TodoType;
  isEditing: boolean;
  disableActions: boolean;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onSaveEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const ListItem: FC<Props> = ({
  todo,
  isEditing,
  disableActions,
  onToggle,
  onEditStart,
  onSaveEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-2 border-1">
      {isEditing ? (
        <InputGroup
          initialValue={todo.title}
          onAddTodo={(title) => onSaveEdit(todo.id, title)}
        />
      ) : (
        <>
          <TodoTextWithCheckbox
            completed={todo.completed}
            text={todo.title}
            onToggle={() => onToggle(todo.id)}
          />
          <EditDeleteButtons
            onEdit={() => onEditStart(todo.id)}
            onDelete={() => onDelete(todo.id)}
            disabled={disableActions}
          />
        </>
      )}
    </div>
  );
};
