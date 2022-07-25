import "./App.css";
import { Views } from "./components/Views";
import { InputArea } from "./components/InputArea";
import { DeleteContent } from "./components/DeleteContent";

function App() {
  return (
    <div className="App">
      <InputArea />
      <div>
        <Views />
        <DeleteContent />
      </div>
    </div>
  );
}

export default App;
