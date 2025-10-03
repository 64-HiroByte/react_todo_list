import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { TextInput } from "../atoms/input/TextInput";
import { Button } from "../atoms/button/Button";

type Props = {
  initialValue?: string;
  buttonLabel: string;
  onSubmit?: (value: string) => void;
  disabled: boolean;
};

export const TextForm: FC<Props> = (props) => {
  const { buttonLabel, onSubmit, disabled = false, initialValue = "" } = props;

  const [todoText, setTodoText] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(todoText);
    setTodoText(initialValue);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <TextInput onChange={handleChange} value={todoText} className="w-120" />
      <Button
        label={buttonLabel}
        className="bg-blue-700"
        disabled={disabled}
        type="submit"
      />
    </form>
  );
};
