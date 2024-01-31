import "./TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리 (react-todo)</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
