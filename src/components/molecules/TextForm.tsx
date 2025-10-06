import { useState, memo } from "react";
import type { ChangeEvent, FC, FormEvent } from "react";

import { TextInput } from "../atoms/input/TextInput";
import { Button } from "../atoms/button/Button";

type Props = {
  initialValue?: string;
  buttonLabel: string;
  onSubmit: (value: string) => void;
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

  const [text, setText] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(text);
    setText(initialValue);
  };

  //
  const isButtonDisabled = !isEditMode && text.trim() === "";

  return (
    <form
      className="flex items-center justify-between gap-2 p-2"
      onSubmit={handleSubmit}
    >
      <TextInput
        onChange={handleChange}
        value={text}
        className="flex-1"
        disabled={disabled}
      />
      <Button
        children={buttonLabel}
        className="bg-blue-700"
        disabled={isButtonDisabled}
        type="submit"
      />
    </form>
  );
});
