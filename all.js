const numbers = Array.from({ length: 5 }, (_, index) => index);
const numberList = numbers.map((i, item) => <li key={i}>{item}</li>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ul>{numberList}</ul>);
