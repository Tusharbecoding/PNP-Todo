"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "./todo/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos/")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (newTodo) => {
    axios
      .post("http://localhost:8000/todos/", newTodo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Error adding todo:", error));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
