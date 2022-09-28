import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Create } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
