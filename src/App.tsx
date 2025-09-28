import "./App.css";
import { CancelButton } from "./components/atoms/button/CancelButton";
import { DeleteButton } from "./components/atoms/button/DeleteButton";
import { EditButton } from "./components/atoms/button/EditButton";
import { SaveButton } from "./components/atoms/button/SaveButton";
import { Checkbox } from "./components/atoms/input/Checkbox";
import { TextInput } from "./components/atoms/input/TextInput";
import { Title } from "./components/atoms/title/Title";
import { EditDeleteButtons } from "./components/molecules/buttons/EditDeleteButtons";
import { DeleteCancelButtons } from "./components/molecules/buttons/DeleteCancelButtons";
import { InputGroup } from "./components/organisms/InputGroup";
import { ListItem } from "./components/organisms/ListItem";

function App() {
  return (
    <div>
      <Title />

      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <TextInput placeholder="タスクを入力してください" className="w-120" />
        {/* <input className="border bg-green-50" type="text" /> */}

        <SaveButton />
        <SaveButton text="保存" className="w-28" />
        <EditButton />
        <DeleteButton />
        <CancelButton className="w-28" />

        <DeleteCancelButtons />
      </div>
      <br />
      <InputGroup />
      <ListItem />

      {/* Todoのリスト */}
      <div>
        {/* リスト */}
        <ul>
          <li>
            {/* <input type="checkbox" name="" id="" /> */}
            <Checkbox className="size-6" />
            Todo１
            <EditDeleteButtons />
            {/* <EditButton />
            <DeleteButton /> */}
          </li>

          {/* <li>
            <input type="checkbox" name="" id="" />
            Todo２
            <EditButton />
            <DeleteButton />
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            Todo３
            <EditButton />
            <DeleteButton />
            <div></div>
          </li> */}
        </ul>

        {/* リストの状態 */}
        <footer>
          <span>Todoアイテム数: XX, 完了済み: XX, 未完了: XX</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
