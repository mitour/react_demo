const { useState } = React;
const App = () => {
  // LV1 取得輸入要換的台幣
  let [value, setValue] = useState(0);
  // LV1, LV2 幣別檔
  let [exchangeRate, setExchangeRate] = useState([
    {
      type: "日幣",
      rate: 4.47,
    },
    {
      type: "美金",
      rate: 0.033,
    },
    {
      type: "澳幣",
      rate: 0.048,
    },
    {
      type: "韓幣",
      rate: 43.67,
    },
    {
      type: "印尼幣",
      rate: 496.24,
    },
  ]);
  // LV2 取得輸入要新增的幣別、匯率
  let [type, setType] = useState("");
  let [rate, setRate] = useState("");
  // Lv3 錢包
  let [wallet, setWallet] = useState(5000);
  let [record, setRecord] = useState([]);
  return (
    <>
      <h1>第一週任務：匯率產生器LV3</h1>
      <h3>新增幣種</h3>
      <input
        type="text"
        placeholder="幣種名稱"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        min="0"
        placeholder="匯率"
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="button"
        value="新增幣種"
        onClick={() => {
          setExchangeRate([...exchangeRate, { type: type, rate: rate }]);
          setType("");
          setRate("");
        }}
      />
      <hr />
      <h3>您錢包還有 {wallet} 元</h3>
      <label htmlFor="input">請輸入您要換的台幣：</label>
      <input
        id="input"
        type="number"
        min="0"
        placeholder="台幣"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>可以換算</p>
      <ul>
        {exchangeRate.map((item, i) => {
          return (
            <li key={i}>
              {item.type}：${(value * item.rate).toFixed(2)}
              <input
                type="button"
                value="兌換"
                onClick={() => {
                  setRecord([
                    ...record,
                    { before: value, after: (value * item.rate).toFixed(2) },
                  ]);
                }}
              />
            </li>
          );
        })}
      </ul>
      <hr />
      <h3>您的兌換記錄</h3>
      <ul>
        {record.map((item, i) => {
          return (
            <li key={i}>
              您用{item.before}元台幣，兌換了{item.after}日幣
            </li>
          );
        })}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("currency"));
root.render(<App />);
