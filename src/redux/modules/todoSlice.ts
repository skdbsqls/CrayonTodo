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
}

// const initialState: Todo[] = [] 이렇게만 하면 안 되는 걸까요?
// 위에 처럼 쓰면 return 해줘야 함 immer 요놈을 잘 활용하려면 TodoState를 만들어주는 것이 좋겠음
const initialState: TodoState = {
  todos: [
    {
      id: shortid.generate(),
      title: "배고파요 ",
      content: "집에 갈래요",
      isDone: false,
    },
  ],
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
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
