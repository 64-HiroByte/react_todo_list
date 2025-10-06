import type { FC } from "react";
import { Button } from "../atoms/button/Button";
import { Span } from "../atoms/text/Span";

type Props = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal: FC<Props> = (props) => {
  const { message, onConfirm, onCancel } = props;
  const buttonWidth = "w-30";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20">
      <div className="rounded-md bg-gray-100 p-6 text-center shadow-lg">
        <Span className="mb-4 inline-block" text={message} />
        <div className="flex justify-center gap-3">
          <Button
            children="キャンセル"
            className={`bg-gray-500 ${buttonWidth}`}
            onClick={onCancel}
            type="button"
          />
          <Button
            children="削除"
            className={`bg-red-600 ${buttonWidth}`}
            onClick={onConfirm}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};
