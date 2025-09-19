import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "TODO",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
        state.unshift(action.payload);
    },
    del: (state, action) => {
        return state.filter((post) => post.name !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    TODO: todoSlice.reducer,
  },
});

export const todoAction = todoSlice.actions;

export default store;
