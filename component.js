const { useState } = React;

function AddMenuInput({ item, setItem }) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="button"
        value="提交"
        onClick={() => {
          setInput("");
          setItem([...item, input]);
        }}
      />
    </>
  );
}

function App() {
  const [item, setItem] = useState([]);
  return (
    <>
      <h1>八哥狗咖啡廳菜單</h1>
      <AddMenuInput item={item} setItem={setItem} />
      <ol>
        {item.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ol>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
