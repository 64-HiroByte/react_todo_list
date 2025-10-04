import { useRef, useState } from "react";

import "./App.css";
import { Title } from "./components/atoms/title/Title";
import type { TodoType } from "./types/todo";
import { TodoList } from "./components/organisms/TodoList";
import { TextForm } from "./components/molecules/TextForm";
import { ConfirmModal } from "./components/molecules/ConfirmModal";

function App() {
  // state
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTargert] = useState<TodoType | null>(null);

  // useRefでkeyとなるIDの採番
  const id = useRef(1);

  /** --- CRUD操作 --- */
  // 新規登録
  const handleAddTodo = (title: string) => {
    if (!title.trim()) return;

    const newTodo: TodoType = {
      id: id.current++,
      title: title,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  // 完了状態の切り替え
  const handleToggle = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 編集対象を設定
  const handleEditStart = (id: number) => {
    setEditingId(id);
  };

  // 編集内容の保存
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

  // 削除確認モーダル表示
  const handleDeleteConfirm = (todo: TodoType) => {
    setDeleteTargert(todo);
    setShowModal(true);
  };

  // 削除確認モーダル非表示
  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteTargert(null);
  };

  // 削除の実行
  const handleDelete = () => {
    if (deleteTarget === null) return;
    setTodos((todos) => todos.filter((todo) => todo.id !== deleteTarget.id));
    setShowModal(false);
    setDeleteTargert(null);
  };

  const todoCount: number = todos.length;
  const completedCount: number = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <Title />

      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <TextForm
          buttonLabel="追加"
          onSubmit={handleAddTodo}
          disabled={editingId !== null}
        />
      </div>
      <br />

      {/* Todoのリスト */}
      <div>
        {/* リスト */}
        <TodoList
          todos={todos}
          editingId={editingId}
          onToggle={handleToggle}
          onEditStart={handleEditStart}
          onEditSave={handleSaveEdit}
          onDelete={handleDeleteConfirm}
        />

        {/* リストの状態 */}
        <footer>
          <span>
            Todoアイテム数: {todoCount}, 完了済み: {completedCount}, 未完了:{" "}
            {todoCount - completedCount}
          </span>
        </footer>
      </div>
      {/* 削除確認モーダル */}
      {showModal && deleteTarget && (
        <ConfirmModal
          message={`タスク: 「${deleteTarget.title}」 を削除しますか？`}
          onConfirm={handleDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default App;
