import TodoHeading from "./assets/TodoHeading";
import TodoInsert from "./assets/TodoInsert";
import TodoList from "./assets/TodoList";
// import TodoList from "./assets/TodoList";
// import { useState } from "react";
// import {useContext} from "react";
import Description12 from "./assets/Desc";
// import { todoDataFile } from "./datafile/DataFile";
// import TodoDataFileProvider from "./datafile/DataFile";
import { Provider } from "react-redux";
import store from "./datafile";

function App1() {
  return (
    <>
      <Provider store={store}>
        <TodoHeading />
        <TodoInsert />
        <Description12 />
        <TodoList />
      </Provider>
    </>
  );
}

export default App1;
