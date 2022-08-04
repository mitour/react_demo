const root = ReactDOM.createRoot(document.getElementById("root"));
const Welcome = (props) => {
  const sayHiCount = 1;
  return `Hey, I'm ${props.name}. I'm ${props.age} years old. ${sayHiCount} times say hi to you.`;
};
const content = (
  <h1 className="royalblue">
    <Welcome name="Mary" age="15"></Welcome>
  </h1>
);
root.render(content);
