import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useState, useCallback } from "react";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
    /**
     * useCallback
     * 배열 안의 값(dependencies, 의존값)이 바뀌었을 때 함수가 새로 생성됨
     * 컴포넌트는 자신의 state 또는 부모에게서 받은 props 가 변경될 때마다 리렌더링 됨
     * 그러나 굳이 리렌더링 안해도 되는 부분까지 리렌더링 하면 리소스 낭비가 일어남
     * 이를 방지하기 위해 전에 생성된 함수를 다시 재활용 할 수 있도록 해줌
     */
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
export default TodoInsert;
