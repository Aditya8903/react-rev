import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState(""); //For each todo in todos array

  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo: todo, completed: false }); //we did'nt provided id's value because it is already defined
    setTodo(""); //for cleanup
  };
  return (
    <form
      className="flex"
      onSubmit={add}
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
