import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { InputArea } from "./components/InputArea";
import { HeaderMain } from "./components/HeaderMain";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<InputArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
