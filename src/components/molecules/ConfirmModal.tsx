import type { FC } from "react";
import { Button } from "../atoms/button/Button";

type Props = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal: FC<Props> = (props) => {
  const { message, onConfirm, onCancel } = props;
  const buttonWidth = "w-30";

  return (
    <div className="bg-opacity-40 fixed inset-0 flex items-center justify-center bg-black">
      <div className="rounded-md bg-white p-6 text-center shadow-lg">
        <p className="mb-4">{message}</p>
        <div className="flex justify-center gap-3">
          <Button
            label="キャンセル"
            className={`bg-gray-500 ${buttonWidth}`}
            onClick={onCancel}
            type="button"
          />
          <Button
            label="削除"
            className={`bg-red-600 ${buttonWidth}`}
            onClick={onConfirm}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};
