import { createSlice } from "@reduxjs/toolkit";



const postSlice = createSlice({
  name: "POSTS",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.unshift(action.payload);
    },
    addPosts: (state, action) => {
      // return [...action.payload, ...state ];
      //  // merge server posts
      state = action.payload
    },
    delPost: (state, action) => {
      return state.filter((post) => post._id !== action.payload);
    },
  },
});

export const postAction = postSlice.actions;
export default postSlice;
