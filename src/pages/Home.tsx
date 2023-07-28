import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <Input />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;
