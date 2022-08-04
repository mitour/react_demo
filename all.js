const root = ReactDOM.createRoot(document.getElementById("root"));
const Welcome = (props) => {
  return (
    <h1 className="royalblue">
      Hey, I'm {props.name}. I'm {props.age} years old.
    </h1>
  );
};
const Content = () => {
  return (
    <>
      <Welcome name="Mary" age="15"></Welcome>
      <Welcome name="Bob" age="25"></Welcome>
    </>
  );
};
root.render(<Content />);
