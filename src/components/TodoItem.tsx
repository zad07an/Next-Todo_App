"use client";

import React, { ChangeEvent } from "react";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  handleComplete: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  handleComplete,
  handleDelete,
}) => {
  const handleCompleteTodo = (e: ChangeEvent<HTMLInputElement>) =>
    handleComplete(id, e.target.checked);
  const handleDeleteTodo = () => handleDelete(id);

  return (
    <li className=" w-full flex items-center justify-between py-2 border-b border-slate-600 last:border-0">
      <div className=" flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          defaultChecked={completed}
          onChange={handleCompleteTodo}
          className=" cursor-pointer"
        />
        <label htmlFor={id} className=" text-white cursor-pointer">
          {title}
        </label>
      </div>
      <div>
        <button
          onClick={handleDeleteTodo}
          className=" uppercase text-red-500 text-xl"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
