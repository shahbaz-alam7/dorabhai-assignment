import "./components/style/style.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
