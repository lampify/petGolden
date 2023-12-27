import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { RoutesContent } from "./routes/index.routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesContent />
    </BrowserRouter>
  );
}
export default App;
