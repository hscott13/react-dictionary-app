import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>DICTIONARY</h1>
      <div className="sub-heading">
        <h2>noun</h2>
        <h3>
          A resource that lists the words of a language and gives their meaning.
        </h3>
      </div>
      <Search />

      <footer>
        <div>
          Open-sourced on{" "}
          <a
            href="https://github.com/hscott13/react-weather-app-v2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , coded by{" "}
          <a
            href="https://celebrated-arithmetic-8e4959.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Heather Scott
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
