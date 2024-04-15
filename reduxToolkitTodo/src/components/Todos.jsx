import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state to manage input for editing and ID of todo being edited
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleEditSubmit = (id) => {
    dispatch(updateTodo({ id, text: editInput }));
    setEditInput(""); // Clear input field after update
    setEditId(null); // Clear edit ID
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId !== todo.id ? (
              // Display todo text if not being edited
              <div className="text-white">{todo.text}</div>
            ) : (
              // Display input field if being edited
              <input
                type="text"
                value={editInput}
                onChange={handleEditChange}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            )}
            <div>
              {editId !== todo.id ? (
                // Display Edit button if not being edited
                <button
                  onClick={() => {
                    setEditInput(todo.text); // Set input field value to current todo text
                    setEditId(todo.id); // Set edit ID to current todo ID
                  }}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md mr-2"
                >
                  Edit
                </button>
              ) : (
                // Display Update button if being edited
                <button
                  onClick={() => handleEditSubmit(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md mr-2"
                >
                  Update
                </button>
              )}
              {/* Always display Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
