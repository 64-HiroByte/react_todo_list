import { useRef, useState } from "react";

import "./App.css";
import { Title } from "./components/atoms/title/Title";
import type { TodoType } from "./types/todo";
import { InputGroup } from "./components/organisms/InputGroup";
import { TodoList } from "./components/organisms/TodoList";
import { Button } from "./components/atoms/button/Button";

function App() {
  // const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const id = useRef(0);

  // 追加ボタン
  const handleAddTodo = (title: string) => {
    const newTodo: TodoType = {
      id: id.current++,
      title: title,
      completed: false,
      // isEditing: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  // チェックボックスのトグル切り替え
  const onChangeCompleted = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEditStart = (id: number) => {
    setEditingId(id);
  };

  // 編集ボタン
  const handleSaveEdit = (id: number, newTitle: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle.trim() || todo.title }
          : todo,
      ),
    );
    setEditingId(null);
  };

  // 削除ボタン
  const onClickDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoCount: number = todos.length;
  const completedCount: number = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <Title />

      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <Button label="保存" className="bg-blue-800" />
        {/* <InputGroup onAddTodo={handleAddTodo} /> */}
      </div>
      <br />

      {/* Todoのリスト */}
      <div>
        {/* リスト */}
        {/* <TodoList
          todos={todos}
          editingId={editingId}
          onToggle={onChangeCompleted}
          onEditStart={handleEditStart}
          onSaveEdit={handleSaveEdit}
          onDelete={onClickDelete}
        /> */}

        {/* リストの状態 */}
        <footer>
          <span>
            Todoアイテム数: {todoCount}, 完了済み: {completedCount}, 未完了:{" "}
            {todoCount - completedCount}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
