import type { FC } from "react";

import { ListItem } from "./ListItem";
import type { TodoType } from "../../types/todo";

type Props = {
  todos: Array<TodoType>;
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onSaveEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoList: FC<Props> = ({
  todos,
  editingId,
  onToggle,
  onEditStart,
  onSaveEdit,
  onDelete,
}) => {
  if (todos.length === 0) {
    return <p className="text-gray mt-4">Todoが登録されていません</p>;
  }
  return (
    <div className="mt-4 space-y-2">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          isEditing={todo.id === editingId}
          onToggle={onToggle}
          onEditStart={onEditStart}
          onSaveEdit={onSaveEdit}
          onDelete={onDelete}
          disableActions={editingId !== null && todo.id !== editingId}
        />
      ))}
    </div>
  );
};
