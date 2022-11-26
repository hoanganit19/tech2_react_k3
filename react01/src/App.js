import Footer from "./Components/Footer";
import Header, { a } from "./Components/Header";

function App() {
  const id = "content";

  const attribute = {
    disabled: true,
  };

  const handleClick = (text) => {
    alert("Tech2: " + text);
  };

  return (
    <div id={id} className="content">
      <Header />
      <h1
        style={{
          color: "red",
          fontWeight: "bold",
          fontStyle: "italic",
          textTranform: "uppercase",
        }}
      >
        Tech2 Solutions: {a}
      </h1>
      <h2 className="title">
        <a href="#">Tech2 Solutions</a>
      </h2>
      <label htmlFor="fullname">Tên</label>
      <input type="checkbox" id="fullname" />
      <hr />
      <select value="dn" onChange={() => {}}>
        <option value="hn">Hà Nội</option>
        <option value="dn">Đà Nẵng</option>
        <option value="hcm">Hồ Chí Minh</option>
      </select>
      <input type="text" defaultValue="Hoàng An" {...attribute} />
      <textarea defaultValue="Tin nhắn..." cols="20" rows="10" />

      <button
        onClick={(e) => {
          handleClick(e.target.innerText);
        }}
      >
        Click
      </button>

      <Footer />
    </div>
  );
}

export default App;
