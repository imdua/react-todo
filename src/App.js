import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";
import { useCallback, useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링 하기", checked: true },
    { id: 3, text: "투두 리스트 만들기", checked: false },
  ]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const nextId = useRef(4);
  /**
   * useRef
   * 렌더링에 필요하지 않은 (렌더링과 상관없이) 바뀔 수 있는 값
   * useRef 는 current 라는 단일 프로퍼티를 가진 객체를 반환함
   * current 는 처음에 전달한 initialValue 로 설정되며 나중에 다른 값으로 바뀔 수 있음
   * 초기화를 제외하고는 렌더링 중에 ref.current 를 쓰거나 읽지 말 것. 동작 예측 불가하게 됨
   * ref.current 프로퍼티를 변경해도 React 는 컴포넌트를 리렌더링 하지 않음
   */
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );
  const onToggle = useCallback((id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      });
    });
  }, []);
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  const onChangeSelectedTodo = (selected) => {
    setSelectedTodo((selectedTodo) => selected);
  };
  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();
      setTodos((todos) => {
        return todos.map((todo) => {
          return todo.id === id ? { ...todo, text } : todo;
        });
      });
    },
    [onInsertToggle]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && (
        <TodoEdit
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          insertToggle={insertToggle}
          onUpdate={onUpdate}
        />
      )}
    </TodoTemplate>
  );
}

export default App;
