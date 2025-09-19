import Style from "../css_modules/TodoItem.module.css";
import { useDispatch } from "react-redux";
import { todoAction } from "../datafile";

const TodoItem = ({ names, dueDates }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className={`row ${Style.container}`}>
        <div className="col-6 col-n">{names}</div>
        <div className="col-4">{dueDates}</div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-danger"
            // onClick={() => delBtnClicked(names)}
            onClick={() => {
              console.log("btn clicked");
              dispatch(todoAction.del(names));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
