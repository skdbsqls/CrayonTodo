import { useState } from "react";
import TodoList from "../components/TodoList";
import Detail from "../components/Detail";
import Default from "../components/Layout/Default";
import { Todo } from "../axios/api";
import * as S from "../styles/StHome";

const Home = () => {
  const [detailTodo, setDetailTodo] = useState<Todo | null>(null);
  return (
    <>
      <S.MainContainer>
        <TodoList setTodo={setDetailTodo} />
        {detailTodo ? (
          <Detail todo={detailTodo} setTodo={setDetailTodo} />
        ) : (
          <Default />
        )}
      </S.MainContainer>
    </>
  );
};

export default Home;
