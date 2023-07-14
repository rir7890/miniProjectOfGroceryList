// import logo from "./logo.svg";
// import "./App.css";
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
  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
