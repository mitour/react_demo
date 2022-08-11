function Item({ data }) {
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function Count({ data }) {
  return <p>總共有{data.length}個產品</p>;
}

function Product() {
  const productData = ["狗食", "貓食", "狗玩具", "貓玩具"];
  return (
    <>
      <h2>產品頁面</h2>
      <Item data={productData} />
      <Count data={productData} />
    </>
  );
}
function Cart() {
  const cartData = ["狗食", "貓食"];
  return (
    <>
      <h2>購物車頁面</h2>
      <Item data={cartData} />
      <Count data={cartData} />
    </>
  );
}
const App = function () {
  return (
    <>
      <Product />
      <Cart />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("component"));
root.render(<App />);
