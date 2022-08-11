function Board({ product }) {
  return (
    <h3
      style={{
        backgroundColor: "darkslategray",
        borderBottom: "3px solid tan",
        color: "snow",
        padding: "1rem",
      }}
    >
      今日優惠：{product}！
    </h3>
  );
}

function Restaurant() {
  return (
    <>
      <h2>瑪莉喵日料店</h2>
      <Board product="一點也不傲嬌貓壽司" />
    </>
  );
}

function Cafe() {
  return (
    <>
      <h2>章魚女王咖啡廳</h2>
      <Board product="哈密瓜白巧克力風味星冰樂" />
    </>
  );
}

function App() {
  return (
    <>
      <h1>第二週小練習：元件</h1>
      <Restaurant />
      <Cafe />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
