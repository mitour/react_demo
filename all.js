const root = ReactDOM.createRoot(document.getElementById("root"));
const Welcome = () => `Hello, How are U`;
const content = (
  <h1 className="royalblue">
    <Welcome></Welcome>
  </h1>
);
root.render(content);
