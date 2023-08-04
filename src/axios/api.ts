import axios from "axios";

const base = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

// 조회
const getTodos = async (): Promise<Todo[]> => {
  const { data } = await base.get("todos");
  return data;
};

// 추가
const addTodo = async (newTodo: Omit<Todo, "id">): Promise<void> => {
  await base.post("todos", newTodo);
};

// 삭제
const deleteTodo = async (id: number): Promise<void> => {
  await base.delete(`todos/${id}`);
};

// 수정
const editTodo = async (editTodo: Todo): Promise<void> => {
  await base.patch(`todos/${editTodo.id}`, editTodo);
};

// 토글
const toggleTodo = async (editTodo: Todo): Promise<void> => {
  await base.patch(`todos/${editTodo.id}`, editTodo);
};

export { getTodos, addTodo, deleteTodo, editTodo, toggleTodo };
