import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

interface TodoState {
  todos: Todo[];
  detailTodo: Todo | null;
}

const initialTodos = [
  {
    id: shortid.generate(),
    title: "타입스크립트 공부하기",
    content: "타입스크립트로 투두리스트를 만들어보자!",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트 공부하기",
    content: "정예반 3번째 과제 하기",
    isDone: false,
  },
];

const initialState: TodoState = {
  todos: initialTodos,
  detailTodo: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            content: action.payload.content,
          };
        } else return todo;
      });
    },
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.detailTodo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
