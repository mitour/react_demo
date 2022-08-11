const { useEffect } = React;

function Timer() {
  const [count, setCount] = useState(0);
  // 加入 useEffect 練習
  useEffect(() => {
    console.log(`click count: ${count}`);
  }, [count]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}>更新</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<Timer />);
