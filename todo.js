const { useState } = React;
const App = () => {
  let [todo, setTodo] = useState([]);
  let [value, setValue] = useState("");
  return (
    <>
      <h1>第一週小練習：Todo List</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <input
        type="button"
        onClick={() => {
          setTodo([...todo, value]);
          setValue("");
        }}
        value="submit"
      />
      <ul>
        {todo.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("todo"));
root.render(<App />);
