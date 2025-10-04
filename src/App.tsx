import { useCallback, useRef, useState } from "react";

import "./App.css";
import { ConfirmModal } from "./components/molecules/ConfirmModal";
import { Span } from "./components/atoms/text/Span";
import { TextForm } from "./components/molecules/TextForm";
import { Title } from "./components/atoms/text/Title";
import { TodoList } from "./components/organisms/TodoList";
import type { TodoType } from "./types/todo";

function App() {
  /** --- state --- */
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTargert] = useState<TodoType | null>(null);

  /** ---  IDの採番（keyとして使用） --- */
  const id = useRef(1);

  /** --- CRUD操作 --- */
  // 新規登録
  const handleAddTodo = useCallback((title: string) => {
    if (!title.trim()) return;

    const newTodo: TodoType = {
      id: id.current++,
      title: title,
      completed: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  }, []);

  // 完了状態の切替え
  const handleToggle = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  // 編集対象の設定
  const handleEditStart = useCallback((id: number) => {
    setEditingId(id);
  }, []);

  // 編集内容の保存
  const handleSaveEdit = useCallback((id: number, newTitle: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle.trim() || todo.title }
          : todo,
      ),
    );
    setEditingId(null);
  }, []);

  // 削除確認モーダル表示
  const handleDeleteConfirm = useCallback((todo: TodoType) => {
    setDeleteTargert(todo);
    setShowModal(true);
  }, []);

  // 削除確認モーダル非表示
  const handleCancelDelete = useCallback(() => {
    setShowModal(false);
    setDeleteTargert(null);
  }, []);

  // 削除の実行
  const handleDelete = useCallback(() => {
    if (deleteTarget === null) return;
    setTodos((todos) => todos.filter((todo) => todo.id !== deleteTarget.id));
    setShowModal(false);
    setDeleteTargert(null);
  }, [deleteTarget]);

  /** --- Todoタスク数の取得 --- */
  const todoCount: number = todos.length;
  const completedCount: number = todos.filter((todo) => todo.completed).length;

  return (
    <div className="mx-auto w-[640px]">
      <Title />

      {/* タスク入力フォーム */}
      <div className="mb-8">
        <Span text="タスクを登録" fontSize={24} className="ms-2" />
        <TextForm
          buttonLabel="追加"
          onSubmit={handleAddTodo}
          disabled={editingId !== null}
          isEditMode={false}
        />
      </div>

      {/* Todoのリスト */}
      <div className="w-[640px] rounded-lg border border-gray-700 shadow-lg">
        <p className="bg-gray-500 py-2 text-center font-sans text-2xl tracking-wide text-gray-100">
          Todo List
        </p>
        {todos.length === 0 ? (
          // タスク未登録時の表示
          <p className="py-4 text-center text-2xl text-gray-800">
            タスクが登録されていません
          </p>
        ) : (
          // Todoリスト一覧表示
          <>
            <TodoList
              todos={todos}
              editingId={editingId}
              onToggle={handleToggle}
              onEditStart={handleEditStart}
              onEditSave={handleSaveEdit}
              onDelete={handleDeleteConfirm}
            />
            {/* タスク数の表示 */}
            <footer className="flex place-content-around p-2">
              <Span text={`タスク数: ${todoCount}`} fontSize={24} />
              <Span text={`完了: ${completedCount}`} fontSize={24} />
              <Span
                text={`未完了: ${todoCount - completedCount}`}
                fontSize={24}
              />
            </footer>
          </>
        )}
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
