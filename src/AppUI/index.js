import React from "react";
import { TaskContext } from "../TaskContext";
import { TaskCounter } from "../components/task-counter";
import { TaskSearch } from "../components/task-search";
import { TaskList } from "../components/task-list";
import { TaskItem } from "../components/task-item";
import { CreateTaskButton } from "../components/create-task-button";
import Modal from "../components/modal";
import TaskForm from "../components/task-form";

function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);

  return (
    <div className="relative m-auto max-w-40 w-full mt-4 p-5 sm:px-10 sm:pt-11">
      <div className="m-auto w-5/12 mb-8 sm:w-3/12 sm:mb-11">
        <img src="/logo/task-list-logo.svg" alt="Tasks" className="block w-full" />
      </div>
      <TaskCounter />
      <TaskSearch />

      <TaskList>
        {error && <p>Hubo un Error...</p>}
        {loading && (
          <div className="absolute flex items-center justify-center top-0 mt-auto bottom-0 mb-auto right-0 mr-auto left-0 ml-auto">
            <div className="loading-animated"></div>
          </div>
        )}
        {!loading && !searchedTasks.length && (
          <div className="w-full flex h-20 justify-center items-center sm:h-30">
            <div className="text-center">
              <svg
                className="fill-current m-auto mb-7"
                viewBox="0 0 512 512"
                width="70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m121 0h150v92h-150z" />
                  <path d="m481 317c0-74.789-60.376-135-135-135-74.443 0-135 60.557-135 135s60.557 135 135 135c24.655 0 45.25-6.096 66.037-17.752l78.752 77.752 21.211-21.211-75.062-74.062c27.333-24.906 44.062-60.672 44.062-99.727zm-150 75v-30h30v30zm30-62.563v17.563h-30v-45h15c8.276 0 15-6.724 15-15s-6.724-15-15-15-15 6.724-15 15h-30c0-24.814 20.186-45 45-45s45 20.186 45 45c0 19.556-12.539 36.24-30 42.437z" />
                  <path d="m0 512h391v-36.641c-11.645 3.273-21.53 6.641-45 6.641-24.39 0-47.481-5.46-68.335-15h-126.665v-30h82.103c-17.661-16.624-31.637-37.042-40.642-60h-41.461v-30h32.867c-1.8-9.743-2.867-19.742-2.867-30s1.068-20.257 2.867-30h-32.867v-30h41.461c9.005-22.958 22.982-43.376 40.642-60h-82.103v-30h126.665c20.854-9.54 43.945-15 68.335-15 21.527 0 33.113 3.279 45 6.548v-128.548h-90v92h-210v-92h-91zm91-345h30v30h-30zm0 90h30v30h-30zm0 90h30v30h-30zm0 90h30v30h-30z" />
                </g>
              </svg>
              <p>¡Aún no hay tareas!</p>
              <p>Crea una.</p>
            </div>
          </div>
        )}

        {searchedTasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      {openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
      <CreateTaskButton setOpenModal={setOpenModal} />
      <div className="text-center text-sm mt-10 mb-7 sm:text-base sm:mt-11 sm:mb-0">
        <p>
          {"{"}Developed by{" "}
          <a href="https://abrahamcalsin.com" target="__blank" className="font-bold">
            Abraham Calsin
          </a>
          {"}"}
        </p>
      </div>
    </div>
  );
}

export { AppUI };
