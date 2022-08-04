const CallDogName = () => "Bob";
const content = <h1 className="royalblue">Hey {CallDogName()}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
