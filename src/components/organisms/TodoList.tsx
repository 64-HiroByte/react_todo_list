import { memo, type FC } from "react";

import type { TodoType } from "../../types/todo";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Array<TodoType>;
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onEditSave: (id: number, newTitle: string) => void;
  onDelete: (todo: TodoType) => void;
};

export const TodoList: FC<Props> = memo((props) => {
  const { todos, editingId, onToggle, onEditStart, onEditSave, onDelete } =
    props;

  //   if (todos.length === 0) {
  //     return <p className="text-gray mt-4">Todoが登録されていません</p>;
  //   }
  return (
    // <div className="w-[640px] rounded-lg border border-gray-700 shadow-lg">
    //   <p className="bg-gray-500 py-2 text-center font-sans text-2xl tracking-wide text-gray-100">
    //     Todo List
    //   </p>
    <>
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
    </>
    // </div>
  );
});
