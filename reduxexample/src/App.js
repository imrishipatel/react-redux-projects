// import logo from "./logo.svg";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Postform />
        <hr />
        <Posts />
      </header>
    </div>
  );
}

export default App;
