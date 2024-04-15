import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state of store->can be arr or objs
const initialState = {
  todos: [
    {
      id: 1,
      text: "HELLO",
    },
  ],
};

// function addTodo
// function removeTodo
// function updateTodo

// create a slice->kind of reducer i.e. functionality

export const todoSlice = createSlice({
  //name of slice
  name: "todo",
  //initial state of slice
  initialState,
  //reducers
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      // const { id, newText } = action.payload;
      // const todoToUpdate = state.todos.find((todo) => todo.id === id);
      // if (todoToUpdate) {
      //   todoToUpdate.text = newText;
      // }
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToUpdate) {
        todoToUpdate.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
