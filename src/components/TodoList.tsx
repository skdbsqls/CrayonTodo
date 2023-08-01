import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { Todo, setTodo } from "../redux/modules/todoSlice";
import * as S from "../styles/StyleTodoList";

const TodoList: React.FC = () => {
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const datailButton = (todo: Todo): void => {
    dispatch(setTodo(todo));
  };

  return (
    <S.ListContainer>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} style={index % 2 ? { marginLeft: "38px" } : {}}>
            <S.TodoTitle onClick={() => datailButton(todo)}>
              {todo.title}
            </S.TodoTitle>
          </div>
        );
      })}
    </S.ListContainer>
  );
};

export default TodoList;
