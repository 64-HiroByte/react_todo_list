import type { FC } from "react";

// import { ListItem } from "./ListItem";
import type { TodoType } from "../../types/todo";
import { TodoItem } from "../molecules/TodoItem";

type Props = {
  todos: Array<TodoType>;
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onEditSave: (id: number, newTitle: string) => void;
  onDelete: (todo: TodoType) => void;
};

export const TodoList: FC<Props> = ({
  todos,
  editingId,
  onToggle,
  onEditStart,
  onEditSave,
  onDelete,
}) => {
  if (todos.length === 0) {
    return <p className="text-gray mt-4">Todoが登録されていません</p>;
  }
  return (
    <div className="mt-4 space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          onToggle={() => onToggle(todo.id)}
          onEditStart={() => onEditStart(todo.id)}
          onEditSave={onEditSave}
          onDelete={() => onDelete(todo)}
        />
      ))}
    </div>
  );
};
