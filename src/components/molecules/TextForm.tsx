import { useState, memo } from "react";
import type { ChangeEvent, FC, FormEvent } from "react";

import { TextInput } from "../atoms/input/TextInput";
import { Button } from "../atoms/button/Button";

type Props = {
  initialValue?: string;
  buttonLabel: string;
  onSubmit?: (value: string) => void;
  disabled?: boolean;
  isEditMode?: boolean;
};

export const TextForm: FC<Props> = memo((props) => {
  const {
    buttonLabel,
    onSubmit,
    disabled = false,
    initialValue = "",
    isEditMode = false,
  } = props;

  const [todoText, setTodoText] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(todoText);
    // onSubmit?.(todoText);  // オプショナルチェイニングによる記述

    setTodoText(initialValue);
  };

  //
  const isButtonDisabled = !isEditMode && todoText.trim() === "";

  return (
    <form
      className="flex items-center justify-between gap-2 p-2"
      onSubmit={handleSubmit}
    >
      <TextInput
        onChange={handleChange}
        value={todoText}
        className="flex-1"
        disabled={disabled}
      />
      <Button
        label={buttonLabel}
        className="bg-blue-700"
        disabled={isButtonDisabled}
        type="submit"
      />
    </form>
  );
});
