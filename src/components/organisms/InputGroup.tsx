import { useState } from "react";
import type { ChangeEvent, FC } from "react";

// import { SaveButton } from "../atoms/button/SaveButton";
import { TextInput } from "../atoms/input/TextInput";
import { Button } from "../atoms/button/Button";

type Props = {
  label: string;
  onSave?: (text: string) => void;
  onAddTodo?: (title: string) => void;
  initialValue?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const InputGroup: FC<Props> = ({
  label,
  onSave,
  initialValue = "",
  placeholder = "タスクを入力してください",
  disabled = false,
}) => {
  const [todoText, setTodoText] = useState(initialValue);

  const onChangeTodotext = (e: ChangeEvent<HTMLInputElement>) =>
    e.preventDefault();
  setTodoText(e.target.value);

  //   const handleAdd = () => {
  //     if (!todoText.trim()) return;
  //     onAddTodo(todoText);
  //     setTodoText("");
  //   };

  return (
    <form className="flex gap-2">
      <TextInput
        value={todoText}
        placeholder={placeholder}
        className="w-146"
        onChange={(e) => setTodoText(e.target.value)}
        disabled={disabled}
      />
      <Button label={label} type="submit" />
    </form>
  );
};
