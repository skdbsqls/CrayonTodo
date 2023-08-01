import { useState } from "react";
import Header from "../components/Layout/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Detail from "../components/Detail";
import Default from "../components/Layout/Default";
import { styled } from "styled-components";
import { useAppSelector } from "../hooks";

const Home = () => {
  const { detailTodo } = useAppSelector((state) => state.todos);

  return (
    <>
      <MainContainer>
        <TodoList />
        {detailTodo ? <Detail /> : <Default />}
      </MainContainer>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  width: 1400px;
  height: 900px;
  display: flex;
  justify-content: center;
`;
