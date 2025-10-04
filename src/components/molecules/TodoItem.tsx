import { useState, type FC } from "react";
import { Checkbox } from "../atoms/input/Checkbox";
import { Button } from "../atoms/button/Button";
import { Text } from "../atoms/Text";
import type { TodoType } from "../../types/todo";
import { TextForm } from "./TextForm";

type Props = {
  todo: TodoType;
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onEditSave: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
};

export const TodoItem: FC<Props> = (props) => {
  const { todo, editingId, onToggle, onEditStart, onEditSave, onDelete } =
    props;

  const isEditing = editingId === todo.id;
  const isDisabled = editingId !== null && editingId !== todo.id;
  //   const isDisabled = editingId !== null && isEditing;

  return (
    <div>
      {isEditing ? (
        <TextForm
          buttonLabel="保存"
          initialValue={todo.title}
          disabled={!isEditing}
          onSubmit={(newTitle) => onEditSave(todo.id, newTitle)}
        />
      ) : (
        <div className="flex gap-2">
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            disabled={isDisabled}
          />
          <Text
            className={`${todo.completed && "text-gray-400 line-through"}`}
            text={todo.title}
          />
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
      )}
    </div>
  );
};
