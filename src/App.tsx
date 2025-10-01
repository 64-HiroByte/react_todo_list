import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

import "./App.css";
import { Title } from "./components/atoms/title/Title";
import type { TodoType } from "./types/todo";

// import { Checkbox } from "./components/atoms/input/Checkbox";
// import { TextInput } from "./components/atoms/input/TextInput";
// import { EditDeleteButtons } from "./components/molecules/buttons/EditDeleteButtons";
// import { DeleteCancelButtons } from "./components/molecules/buttons/DeleteCancelButtons";
// import { InputGroup } from "./components/organisms/InputGroup";
// import { ListItem } from "./components/organisms/ListItem";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const id = useRef(0);

  const onChageTodotext = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    if (!todoText.trim()) return;

    const newTodo: TodoType = {
      id: id.current++,
      title: todoText.trim(),
      completed: false,
      isEditting: false,
    };

    const newTodos: Array<TodoType> = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText("");
  };

  // チェックボックスのトグル切り替え
  const onChangeCompleted = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 削除ボタン
  const onClickDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // 編集ボタン
  const onClickEdit = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditting: true } : todo,
      ),
    );
  };

  const todoCount: number = todos.length;
  const completedCount: number = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <Title />

      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <input
          className="border bg-green-50"
          type="text"
          value={todoText}
          onChange={onChageTodotext}
        />
        <button className="bg-blue-400" onClick={onClickAdd}>
          追加
        </button>
      </div>
      <br />
      {/* <InputGroup />
      <ListItem /> */}

      {/* Todoのリスト */}
      <div>
        {/* リスト */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.isEditting ? (
                <>
                  <input
                    className="border bg-green-50"
                    type="text"
                    value={todoText}
                    onChange={onChageTodotext}
                  />
                  <button className="bg-blue-400" onClick={onClickAdd}>
                    追加
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    onChange={() => onChangeCompleted(todo.id)}
                    checked={todo.completed}
                  />
                  {todo.id}: {todo.title}, {todo.completed ? "✅️" : ""}
                  {/* 削除ボタン */}
                  <button
                    className="bg-red-500"
                    onClick={() => onClickDelete(todo.id)}
                  >
                    削除
                  </button>
                  {/* 編集ボタン */}
                  <button
                    className="bg-green-500"
                    onClick={() => onClickEdit(todo.id)}
                  >
                    編集
                  </button>
                </>
              )}
            </li>
          ))}
          {/* <li><input type="checkbox"></li> */}
        </ul>

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
