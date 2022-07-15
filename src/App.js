import Header from "./components/Header";
import CreateProfile from "./components/CreateProfile";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="headDiv">
        <Header />
        <CreateProfile />
      </div>
    </BrowserRouter>
  );
}

export default App;
