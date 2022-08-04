const root = ReactDOM.createRoot(document.getElementById("root"));
const Tick = () => {
  const content = (
    <h1 className="royalblue">It's {new Date().toLocaleTimeString()} now</h1>
  );
  root.render(content);
};

setInterval(Tick, 1000);
