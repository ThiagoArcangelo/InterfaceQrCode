import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { InputArea } from "./components/postArea";
import { HeaderMain } from "./components/HeaderMain";
import { UpdateData } from "./components/UpdateModal";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<InputArea />} />
          <Route path="/update/:id" element={<UpdateData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
