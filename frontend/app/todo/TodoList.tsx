"use client";

export default function TodoList({ todos }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="border p-4 rounded bg-white shadow-sm">
          <h2 className="text-xl font-bold">{todo.title}</h2>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
}
