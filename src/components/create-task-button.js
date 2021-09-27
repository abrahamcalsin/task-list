import React from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTaskButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <React.Fragment>
      <button
        onClick={onClickButton}
        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-full h-10 py-9 rounded-2 font-medium text-base"
      >
        <span className="mr-4">
          <FontAwesomeIcon icon={faPlusSquare} />
        </span>
        Crear una Tarea Nueva
      </button>
    </React.Fragment>
  );
}

export { CreateTaskButton };
