import React from "react";
// import React, { useCallback } from "react";
// import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList({
  todos,
  onRemove,
  onToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  // const rowRenderer = useCallback(
  //   ({ index, key, style }) => {
  //     const todo = todos[index];
  //     return (
  //       <TodoListItem
  //         className="todolist-item"
  //         todo={todo}
  //         key={key}
  //         onToggle={onToggle}
  //         onRemove={onRemove}
  //         onInsertToggle={onInsertToggle}
  //         onChangeSelectedTodo={onChangeSelectedTodo}
  //         style={style}
  //       />
  //     );
  //   },
  //   [todos, onRemove, onToggle, onInsertToggle, onChangeSelectedTodo]
  // );
  // return (
  //   <List
  //     className="TodoList"
  //     width={512}
  //     height={513}
  //     rowCount={todos.length}
  //     rowHeight={57}
  //     rowRenderer={rowRenderer}
  //   />
  // );
  return (
    <div className="TodoList">
      {todos.map((todo, idx) => {
        return (
          <TodoListItem
            className="todolist-item"
            todo={todo}
            key={idx}
            onToggle={onToggle}
            onRemove={onRemove}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
            // style={style}
          />
        );
      })}
    </div>
  );
}
export default React.memo(TodoList);
