const members = [
  {
    no: 78012,
    name: "Jack",
  },
  {
    no: 24232,
    name: "Mary",
  },
  {
    no: 74243,
    name: "Amy",
  },
];
const Welcome = (props) => (
  <h1 className="royalblue">{props.name} 說你好～～</h1>
);
const Student = () => {
  return (
    <>
      {members.map((item, i) => (
        <Welcome key={i} name={item.name} />
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Student />);
