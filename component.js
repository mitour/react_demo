function Board() {
  return (
    <h3
      style={{
        backgroundColor: "darkslategray",
        borderBottom: "3px solid tan",
        color: "snow",
        padding: "1rem",
      }}
    >
      今日優惠：一點也不傲嬌貓壽司！
    </h3>
  );
}

function Restaurant() {
  return <Board />;
}

function App() {
  return (
    <>
      <h1>第二週小練習：元件</h1>
      <Restaurant />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
