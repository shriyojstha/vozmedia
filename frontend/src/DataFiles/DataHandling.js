import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "POSTS",
  initialState: [
    //     {id:1000,
    //     title:"My Dear Madhavi",
    //     body:"This boy really love youuuuu so much",
    //     reactions: {
    //       likes: 124000,
    //     },
    //     tags: ["love", "mybaby","muaaahhhh"],}
  ],
  reducers: {
    addPost: (state, action) => {
      state.unshift(action.payload);
    },
    addPosts: (state, action) => {
      return [...state, ...action.payload]; // merge server posts
    },
    delPost: (state, action) => {
      return state.filter((post) => post._id !== action.payload);
    },
  },
});

export const postAction = postSlice.actions;
export default postSlice;
