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
const membersList = members.map((item, i) => (
  <li key={i}>
    {item.no}: {item.name}
  </li>
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ul>{membersList}</ul>);
