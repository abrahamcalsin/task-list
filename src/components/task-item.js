import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

function TaskItem(props) {
  return (
    <div className="flex justify-between items-center my-7 text-sm sm:text-base">
      <div
        className={`flex items-center w-full px-3 py-3 border border-gray-100 rounded-2 ${
          props.completed && "border-gray-300"
        }`}
      >
        {/* Task complet */}
        <span
          onClick={props.onComplete}
          className={`flex items-center justify-center mr-4 p-2 rounded-1 bg-gray-50 text-gray-50 cursor-pointer hover:text-gray-400 ${
            props.completed && "bg-gray-300 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <p className={`w-full ${props.completed && "line-through text-gray-300"}`}>
          {props.text}
        </p>
      </div>

      {/* Task delete */}
      <span
        onClick={props.onDelete}
        className="ml-3 w-11 text-base text-center cursor-pointer bg-error-300 px-5 py-3 rounded-2 hover:bg-error-200"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
    </div>
  );
}

export { TaskItem };
