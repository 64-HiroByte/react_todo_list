import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold">Todo List</h1>
      {/* 入力エリア */}
      <div>
        <h2>今日は何する？</h2>
        <input className="border bg-green-50" type="text" />
        <button>保存</button>
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
