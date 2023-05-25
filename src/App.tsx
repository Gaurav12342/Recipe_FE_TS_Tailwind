import { FC } from "react";
import "./App.css";
import Recipe from "./pages";

const App: FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Recipe />
        {/* <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe /> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
};

export default App;
