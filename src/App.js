import React from "react";
import Input from "./components/Input";
import Title from "./components/Title";
import Lane from "./components/Lane";
import { useTodo } from "./contexts/ActionContext";
import "./styles.css";

export default function App() {
  const [, { handleAddTodo }] = useTodo();

  return (
    <div className="container">
      <Title> Simple kanban Board </Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}
