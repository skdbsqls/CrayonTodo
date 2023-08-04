import React from "react";
import { Todo } from "../axios/api";
import * as S from "../styles/StTodoList";
import { useQuery } from "react-query";
import { getTodos } from "../axios/api";

interface TodoListProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

const TodoList: React.FC<TodoListProps> = ({ setTodo }) => {
  // 디테일 페이지 보여주기
  const navigateDetail = (todo: Todo): void => {
    setTodo(todo);
  };

  // Todos 조회
  const {
    isLoading,
    isError,
    data: todos = [],
  } = useQuery<Todo[]>("todos", getTodos);

  if (isLoading) {
    return <h1>로딩중입니다</h1>;
  }
  if (isError) {
    return <h1>오류 발생</h1>;
  }
  return (
    <S.ListContainer>
      {todos.map((todo, index) => {
        return (
          <div
            key={todo.id}
            onClick={() => navigateDetail(todo)}
            style={index % 2 ? { marginLeft: "38px" } : {}}
          >
            <S.TodoTitle>{todo.title}</S.TodoTitle>
          </div>
        );
      })}
    </S.ListContainer>
  );
};

export default TodoList;
