const { useState } = React;
const Welcome = () => {
  let [value, setValue] = useState("default");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <p>{value}</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome />);
