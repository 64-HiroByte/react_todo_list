import type { TodoType } from "./todo";

export type TodoFunctionType = {
  editingId: number | null;
  onToggle: (id: number) => void;
  onEditStart: (id: number) => void;
  onEditSave: (id: number, newTitle: string) => void;
  onDelete: (todo: TodoType) => void;
};
