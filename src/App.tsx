import "./App.css";
import { CancelButton } from "./components/atoms/button/CancelButton";
import { DeleteButton } from "./components/atoms/button/DeleteButton";
import { EditButton } from "./components/atoms/button/EditButton";
// import { BaseButton } from "./components/atoms/button/BaseButton";
import { SaveButton } from "./components/atoms/button/SaveButton";
import { Title } from "./components/atoms/title/Title";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Title />
      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <input className="border bg-green-50" type="text" />

        {/* <BaseButton className="" text="ベース" /> */}
        <SaveButton />
        <SaveButton text="保存" className="w-28" />
        <EditButton />
        <DeleteButton />
        <CancelButton className="w-28" />
        {/* 編集 */}
        {/* </BaseButton> */}
      </div>
      {/* Todoのリスト */}
      <div>
        {/* リスト */}
        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            Todo１
            <button>編集</button>
            <button>削除</button>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            Todo２
            <button>編集</button>
            <button>削除</button>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            Todo３
            <button>編集</button>
            <button>削除</button>
            <div></div>
          </li>
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
