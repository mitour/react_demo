const { useState } = React;
const Welcome = (props) => {
  let [count, setCount] = useState(1);
  return (
    <>
      <h1 className="royalblue">
        {props.name}說了{count}次你好～～
      </h1>
      <input
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
        value="say hi"
      />
      <input
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
        value="regret"
      />
    </>
  );
};
const content = <Welcome name="Mary"></Welcome>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
