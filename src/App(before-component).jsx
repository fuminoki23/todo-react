// コンポーネント化前

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");

  const [incompTodos, setIncompTodos] = useState(["ああああ", "いいいい"]);
  const [compTodos, setCompTodos] = useState(["おおおお"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompTodos, todoText];
    setIncompTodos(newTodos);
    setTodoText("");
  };

  const onClickDel = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1);
    setIncompTodos(newIncompTodos);

    const newCompTodos = [...compTodos, incompTodos[index]];
    setCompTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);
    setCompTodos(newCompTodos);

    const newIncompTodos = [...incompTodos, compTodos[index]];
    setIncompTodos(newIncompTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete">
        <p className="title">未完了のtodo</p>
        <ul className="list">
          {incompTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDel(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete">
        <p className="title">完了したtodo</p>
        <ul className="list">
          {compTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
