// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  // const name = "Rahul";
  // const handleNameChange = () => {
  //   const names = ["bob", "kevin", "dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   return names[int];
  // };
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "Item 1 ",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item 2 ",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item 3 ",
  //   },
  // ]);

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log("submitted");
    // console.log(newItem);
    // setNewItem("");
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      {/* <Header title="Groceries List" /> */}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items
          .filter((item) => item.item.toLowerCase())
          .includes(search.toLowerCase())}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
