import { createSlice } from "@reduxjs/toolkit";

const FetchSlice = createSlice({
  name: "fetch",
  initialState: {
    isFetching: false,
    dataFetched: false,
  },
  reducers: {
    markdataFetched: (state) => {
      return (state.dataFetched = true);
    },
    markdataFetchingStarted: (state) => {
      return (state.isFetching = true);
    },
    markdataFetchingEnded: (state) => {
      return (state.isFetching = false);
    },
  },
});

export const fetchAction = FetchSlice.actions;
export default FetchSlice;
