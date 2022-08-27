export const IncompTodo = (props) => {
  const { incompTodos, onClickComp, onClickDel } = props;

  return (
    <div className="incomplete">
      <p className="title">未完了のtodo</p>
      <ul className="list">
        {incompTodos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
