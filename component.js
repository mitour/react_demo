const { useState } = React;

function Switch({ index, element, floor, setFloor }) {
  const handleClick = () => {
    let newArr = [...floor];
    newArr[index].status = !newArr[index].status;
    setFloor(newArr);
  };
  return (
    <li key={index} className={element.status ? "light" : "dark"}>
      {element.floor}樓
      <input
        type="button"
        value={element.status ? "關" : "開"}
        onClick={handleClick}
      />
    </li>
  );
}

function Restaurant() {
  const [floor, setFloor] = useState([
    { floor: 1, status: true },
    { floor: 2, status: true },
    { floor: 3, status: true },
  ]);
  return (
    <>
      <h2>你才傲嬌貓日式料理</h2>
      <ul className="buliding">
        {floor.map((element, index) => {
          return (
            <Switch
              index={index}
              element={element}
              floor={floor}
              setFloor={setFloor}
            />
          );
        })}
      </ul>
    </>
  );
}

function Cafe() {
  const [floor, setFloor] = useState([
    { floor: 1, status: false },
    { floor: 2, status: false },
  ]);
  return (
    <>
      <h2>巴哥犬咖啡</h2>
      <ul className="buliding">
        {floor.map((element, index) => {
          return (
            <Switch
              index={index}
              element={element}
              floor={floor}
              setFloor={setFloor}
            />
          );
        })}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <h1>第二週小練習</h1>
      <Restaurant />
      <Cafe />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
