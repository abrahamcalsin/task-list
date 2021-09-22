import React from "react";
import { TaskContext } from "../TaskContext";

function TaskForm() {
  const [newTaskValue, setNewTaskValue] = React.useState("");

  const { addTask, setOpenModal } = React.useContext(TaskContext);

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="m-auto max-w-36 w-full bg-white rounded-2 text-gray-700 p-7"
    >
      <label className="block text-xl font-bold mb-6">Crea una Tarea Nueva:</label>
      <textarea
        value={newTaskValue}
        onChange={onChange}
        className="w-full h-10-rem max-h-20 p-4 focus:outline-none border-2 border-gray-300 rounded-2"
        placeholder="Escribe tu tarea aquí..."
      />
      <div className="flex justify-end gap-3 mt-5">
        <button
          type="button"
          onClick={onCancel}
          className="bg-error-300 hover:bg-error-200 px-6 py-3 rounded-1 text-sm text-white font-medium tracking-wide"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-secondary hover:bg-secondary-200 px-6 py-3 rounded-1 text-sm text-white font-medium tracking-wide"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
export default TaskForm;
