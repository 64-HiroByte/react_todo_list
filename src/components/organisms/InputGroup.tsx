import { useState } from "react";
import type { ChangeEvent, FC } from "react";

import { SaveButton } from "../atoms/button/SaveButton";
import { TextInput } from "../atoms/input/TextInput";

type Props = {
  onSave: (text: string) => void;
  onAddTodo: (title: string) => void;
  initialValue?: string;
  placeholder: string;
  disabled?: boolean;
};

export const InputGroup: FC<Props> = ({
  onSave,
  initialValue = "",
  placeholder = "タスクを入力してください",
  disabled = false,
}) => {
  const [todoText, setTodoText] = useState(initialValue);

  const onChangeTodotext = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  //   const handleAdd = () => {
  //     if (!todoText.trim()) return;
  //     onAddTodo(todoText);
  //     setTodoText("");
  //   };

  return (
    <div className="flex gap-2">
      <TextInput
        value={todoText}
        placeholder={placeholder}
        className="w-146"
        onChange={onChangeTodotext}
        disabled={disabled}
      />
      <SaveButton onClick={() => onSave(todoText)} />
    </div>
  );
};
