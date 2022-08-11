const { useState, useEffect } = React;

function Loading() {
  return <h2>Loading...</h2>;
}

function Item({ item }) {
  return (
    <ul>
      {item.map((element, i) => {
        return <li key={i}>{element.text}</li>;
      })}
    </ul>
  );
}

function useFetch(APIUrl) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(APIUrl);
      const data = await response.json();
      setItem(data);
    }
    fetchApi();
  }, []);
  return item;
}

function App() {
  const APIUrl = "https://cat-fact.herokuapp.com/facts";
  const item = useFetch(APIUrl);
  return (
    <>
      <h1>Top 5 facts about CAT</h1>
      {item ? <Item item={item} /> : <Loading />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
