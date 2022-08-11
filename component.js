const { useState } = React;

function AddMenuInput({ item, setItem }) {
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (!input) return;
    setInput("");
    setItem([...item, input]);
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input type="button" value="提交" onClick={handleClick} />
    </>
  );
}

function Cafe() {
  const [item, setItem] = useState(["單杯手沖哥倫比雅愛情靈藥", "隨便曼特寧"]);
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

function Restaurant() {
  const [item, setItem] = useState(["大蝦醋", "鮭魚子"]);
  return (
    <>
      <h1>你才傲嬌日本料理</h1>
      <AddMenuInput item={item} setItem={setItem} />
      <ol>
        {item.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ol>
    </>
  );
}

function App() {
  return (
    <>
      <Restaurant />
      <Cafe />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
