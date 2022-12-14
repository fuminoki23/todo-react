import { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/inputTodo";
import { IncompTodo } from "./components/incompTodo";
import { CompTodo } from "./components/compTodo";

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
      <InputTodo
        disabled={incompTodos.length >= 5 && true}
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      {incompTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までです</p>
      )}
      <IncompTodo
        incompTodos={incompTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />
      <CompTodo compTodos={compTodos} onClickBack={onClickBack} />
    </>
  );
}
