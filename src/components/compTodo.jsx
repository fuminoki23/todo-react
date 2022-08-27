export const CompTodo = (props) => {
  const { compTodos, onClickBack } = props;
  return (
    <div className="complete">
      <p className="title">完了したtodo</p>
      <ul className="list">
        {compTodos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻る</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
