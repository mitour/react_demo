const { useState, useEffect } = React;

function Loading() {
  return <h2>Loading...</h2>;
}

function Item({ item }) {
  return (
    <ul>
      {item.map((element, i) => {
        return <li key={i}>{element.name}</li>;
      })}
    </ul>
  );
}

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      setItem(data.results);
    }
    fetchApi();
  }, []);
  return <>{item ? <Item item={item} /> : <Loading />}</>;
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
