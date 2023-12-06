import { useCallback, useEffect, useState } from "react";
import "./TodoEdit.scss";

function TodoEdit({ insertToggle, selectedTodo, onUpdate }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue((value) => e.target.value);
  }, []);
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  /**
   * useEffect
   * 1. 기본형태 - useEffect(() => {})
   * --- 컴포넌트가 로드되는 모든 경우에 해당 함수 실행
   * 2. 비어있는 dependency 추가 - useEffect(() => {}, [])
   * --- 컴포넌트가 처음으로 마운트 되었을 때만 함수 실행. 초기에 한 번 실행할 작업이 필요할 때 사용
   * 3. dependency 추가 - useEffect(() => {}, [something])
   * --- dependency 값이 변경될 때마다 함수 실행
   * 4. cleanup 함수 - useEffect(() => { return () => { ...// cleanup } }, [])
   * --- 해당 컴포넌트가 언마운트 될 때 실행되는 함수를 cleanup 함수라 함
   * --- 컴포넌트가 사라질 때 호출되며, 메모리 누수를 방지하여 메모리 관리를 하거나,
   * --- 컴포넌트 사라질 때 수행 할 작업들을 추가한다
   */
  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue("");
      e.preventDefault();
    },
    [onUpdate, selectedTodo, value]
  );
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="todoedit__insert">
        <h2>수정하기</h2>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={value}
          onChange={onChange}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
export default TodoEdit;
