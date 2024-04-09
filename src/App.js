import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Clock />
        <Clock country="India" />
        <Clock others="Others" />
      </div>
    </div>
  );
}

export default App;
