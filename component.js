const { useState } = React;

function TextInput({ value, setValue }) {
  return (
    <input
      type="number"
      value={value}
      placeholder="輸入一個數字"
      min="0"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

function App() {
  const [value, setValue] = useState(null);
  return (
    <>
      <h1>🍊計算機</h1>
      <TextInput value={value} setValue={setValue} />
      <p>{value * value}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
