// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  // const name = "Rahul";
  // const handleNameChange = () => {
  //   const names = ["bob", "kevin", "dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   return names[int];
  // };
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1 ",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2 ",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3 ",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header />
      {/* <Header title="Groceries List" /> */}
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
