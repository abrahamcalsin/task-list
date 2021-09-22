import React from "react";
import { TaskContext } from "../TaskContext";

function TaskCounter() {
  const { completedTasks, totalTasks } = React.useContext(TaskContext);

  return (
    <h1 className="text-base text-center font-medium text-gray-200 mb-0 sm:text-xl sm:mb-5">
      Completaste {completedTasks} de {totalTasks} Tareas
    </h1>
  );
}

export { TaskCounter };
