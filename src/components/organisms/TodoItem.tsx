import { memo } from "react";
import type { FC } from "react";

import { Button } from "../atoms/button/Button";
import { Checkbox } from "../atoms/input/Checkbox";
import { Span } from "../atoms/text/Span";
import { TextForm } from "../molecules/TextForm";
import type { TodoType } from "../../types/todo";

type Props = {
  todo: TodoType;
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onEditSave: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
};

export const TodoItem: FC<Props> = memo((props) => {
  const { todo, editingId, onToggle, onEditStart, onEditSave, onDelete } =
    props;

  const isEditing = editingId === todo.id;
  const isDisabled = editingId !== null && editingId !== todo.id;

  return (
    <>
      {isEditing ? (
        <TextForm
          buttonLabel="保存"
          initialValue={todo.title}
          disabled={!isEditing}
          onSubmit={(newTitle) => onEditSave(todo.id, newTitle)}
          isEditMode={true}
        />
      ) : (
        <div className="flex items-center justify-between gap-2 border-b border-gray-400 p-2">
          <Checkbox
            className="flex-shrink-0"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            disabled={isDisabled}
          />
          <Span
            className={`flex-1 truncate ${todo.completed && "line-through"}`}
            color={`${todo.completed && "text-gray-500"}`}
            text={todo.title}
          />
          <div className="flex flex-shrink-0 gap-2">
            <Button
              label="編集"
              className="bg-green-600"
              disabled={isDisabled}
              onClick={() => onEditStart(todo.id)}
              type="button"
            />
            <Button
              label="削除"
              className="bg-red-600"
              disabled={isDisabled}
              onClick={() => onDelete(todo.id)}
              type="button"
            />
          </div>
        </div>
      )}
    </>
  );
});
