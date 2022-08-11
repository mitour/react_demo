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

function Modal({ value, meg }) {
  return <input value={value} type="button" onClick={(e) => alert(meg)} />;
}

function Product() {
  const productData = ["狗食", "貓食", "狗玩具", "貓玩具"];
  return (
    <>
      <h2>產品頁面</h2>
      <Modal value="向客戶打招呼" meg="hi~ 妳好嗎？" />
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
      <Modal
        value="向客戶鼓勵結帳"
        meg="錢錢沒有不見，只是變成你喜歡的形狀！"
      />
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
