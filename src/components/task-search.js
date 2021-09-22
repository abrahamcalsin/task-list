import React from "react";
import { TaskContext } from "../TaskContext";

function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(TaskContext);

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        value={searchValue}
        onChange={onSearchValue}
        type="search"
        placeholder="Buscar Tarea"
        className="w-full mt-4 text-white bg-secondary-500  text-center px-4 py-4 placeholder-gray-300 outline-none"
      />
    </div>
  );
}
export { TaskSearch };
