import { memo, type FC } from "react";

import { TodoItem } from "./TodoItem";
import type { TodoType } from "../../types/todo";
import type { TodoFunctionType } from "../../types/todoFunction";

type Props = {
  todos: Array<TodoType>;
  // editingId: number | null;
  // onToggle: (id: number) => void;
  // onEditStart: (id: number) => void;
  // onEditSave: (id: number, newTitle: string) => void;
  // onDelete: (todo: TodoType) => void;
} & TodoFunctionType;

export const TodoList: FC<Props> = memo((props) => {
  const { todos, editingId, onToggle, onEditStart, onEditSave, onDelete } =
    props;

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          onToggle={onToggle}
          onEditStart={onEditStart}
          onEditSave={onEditSave}
          onDelete={onDelete}
        />
      ))}
    </>
  );
});
