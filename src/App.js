import { BrowserRouter } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Body />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
