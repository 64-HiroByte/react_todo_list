import { useState } from "react";
import type { ChangeEvent, FC } from "react";

import { SaveButton } from "../atoms/button/SaveButton";
import { TextInput } from "../atoms/input/TextInput";

type Props = {
  onAddTodo: (title: string) => void;
};

export const InputGroup: FC<Props> = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const onChangeTodotext = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  const handleAdd = () => {
    if (!todoText.trim()) return;
    onAddTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="flex gap-2">
      <TextInput
        value={todoText}
        placeholder="タスクを入力してください"
        className="w-146"
        onChange={onChangeTodotext}
      />
      <SaveButton onClick={handleAdd} />
    </div>
  );
};
