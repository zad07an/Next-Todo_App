import React from "react";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import Input from "@/components/ui/Input";

async function newTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || !title.trim()) {
    console.log("Error");
  } else {
    await prisma.todo.create({ data: { title, completed: false } });
    redirect("/");
  }
}

const New = () => {
  return (
    <form
      action={newTodo}
      className=" w-[500px] px-6 py-4 border-2 border-white rounded-lg flex items-center flex-col gap-4"
    >
      <div className=" w-full flex items-center">
        <p className=" text-xl text-white uppercase">Create New Todo</p>
      </div>
      <Input />
      <div className=" w-full flex items-center justify-end gap-2">
        <Link
          href={"/"}
          className=" px-6 py-2 uppercase border-2 border-red-500 rounded-md text-red-500"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className=" px-6 py-2 uppercase border-2 border-lime-500 rounded-md text-lime-500"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default New;
