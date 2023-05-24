import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import React from "react";

function getTodos() {
  return prisma.todo.findMany();
}

async function handleComplete(id: string, completed: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { completed } });
}

async function handleDelete(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
}

const Home = async () => {
  const todos = await getTodos();

  return (
    <div className=" w-[500px] px-6 py-4 border-2 border-white rounded-lg">
      <header className=" w-full flex items-center justify-between pb-6 border-b-2 border-white">
        <div>
          <p className=" text-2xl uppercase text-white">Todos</p>
        </div>
        <div>
          <Link
            href={"/new"}
            className=" px-6 py-2 uppercase border-2 border-white rounded-md text-white "
          >
            New
          </Link>
        </div>
      </header>
      <ul className=" w-full pt-6">
        {!todos.length ? (
          <div className=" w-full flex items-center justify-center">
            <p className=" text-white">No todos!</p>
          </div>
        ) : (
          todos?.map((todo) => {
            return (
              <TodoItem
                key={todo?.id}
                {...todo}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Home;
