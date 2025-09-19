import TodoItem from "./TodoItem";
// import { useContext } from "react";
// import { TodoDataFile } from "../datafile/DataFile";
import { useSelector } from "react-redux";

const TodoList = () => {
  const data = useSelector((store) => store.TODO);
  // console.log(data);

  // const {currentData} = useContext(TodoDataFile);
  // const {delBtnClick} = useContext(TodoDataFile);

  return (
    <>
      {data.map((items) => (
        <TodoItem
          key={items.name}
          names={items.name}
          dueDates={items.dueDate}
        />
      ))}
    </>
  );
};

export default TodoList;
