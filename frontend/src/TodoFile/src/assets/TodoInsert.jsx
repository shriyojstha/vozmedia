import Style from "../css_modules/TodoInsert.module.css";
import { useRef, useContext } from "react";
// import { TodoDataFile } from "../datafile/DataFile";
import { useDispatch } from "react-redux";
import { todoAction } from "../datafile";

const TodoInsert = () => {
  // const { onAdd } = useContext(TodoDataFile);
  const dispatch = useDispatch();

  const todoName = useRef();
  const todoDate = useRef();

  const addBtnClick = (event) => {
    event.preventDefault();
    const todoNameref = todoName.current.value;
    const tododueDateref = todoDate.current.value;
    const arr = [todoNameref, tododueDateref]
    // onAdd(todoNameref, tododueDateref);
    dispatch(todoAction.addTodo({
      name: todoNameref,
      dueDate: tododueDateref,
    }))
    todoName.current.value = "";
    todoDate.current.value = "";
    
  };

  return (
    <div className="container">
      <form className={`row ${Style.container}`} onSubmit={addBtnClick}>
        <div className={`col-6 `}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo List"
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date"
          className="form-control" ref={todoDate} />
        </div>
        <div className="col-2">
          <button type="submit" className={`btn btn-primary ${Style.myBtn}`}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInsert;
