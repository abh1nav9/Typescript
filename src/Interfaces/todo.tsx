// React + Typescript

export default function App() {
  const sampleTodo: TodoType = {
    title: "Learn React",
    description: "Study components, props, and state.",
    done: false,
  };

  return (
    <>
      <div>
        <Todo todo={sampleTodo} />
      </div>
    </>
  );
}

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <h3>{todo.done ? "Done" : "Not Done"}</h3>
    </div>
  );
}
