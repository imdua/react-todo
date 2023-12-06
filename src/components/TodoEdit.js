import { useCallback, useState } from "react";
import "./TodoEdit.scss";

function TodoEdit({ insertToggle, selectedTodo, onUpdate }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue((value) => e.target.value);
  }, []);
  return (
    <div className="background">
      <form action="" className="todoedit__insert">
        <h2>수정하기</h2>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={value}
          onChange={onChange}
        />
        <button>수정하기</button>
      </form>
    </div>
  );
}
export default TodoEdit;
