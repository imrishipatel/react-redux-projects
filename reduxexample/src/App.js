// import logo from "./logo.svg";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Postform />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
