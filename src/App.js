import logo from "./logo.svg";
import Intro from "./components/intro";
import Work from "./components/work";
import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          "background-image":
            "linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default App;
