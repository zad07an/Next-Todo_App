"use client";

import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      name="title"
      placeholder="Create your todo..."
      className=" w-full bg-transparent border-2 border-white rounded-md p-2 outline-0 text-white"
    />
  );
};

export default Input;
