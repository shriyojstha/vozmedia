import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./DataHandling";
import FetchSlice from "./FetchingState";

const store = configureStore({
  reducer: {
    POSTS: postSlice.reducer,
    fetch: FetchSlice.reducer,
  },
});

export default store;
