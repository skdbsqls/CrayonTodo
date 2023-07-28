import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { deleteTodo, toggleTodo } from "../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";

interface TodoListProps {
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isDone }) => {
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteButton = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const toggleButton = (id: string): void => {
    dispatch(toggleTodo(id));
  };

  const datailButton = (id: string): void => {
    navigate(`detail/${id}`);
  };

  return (
    <>
      <h2>{isDone ? "금쪽아 수고했어^^" : "금쪽아 다 울었니?"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <button onClick={() => datailButton(todo.id)}>
                여기로 집중!
              </button>
              <div>{todo.title}</div>
              <div>{todo.content}</div>
              <button onClick={() => toggleButton(todo.id)}>
                {todo.isDone ? "뻥이지롱" : "다 했어요"}
              </button>
              <button onClick={() => deleteButton(todo.id)}>안 할래요</button>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
