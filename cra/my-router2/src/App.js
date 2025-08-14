import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Subpage from "./pages/SubPage";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Link to="/sub"></Link>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/sub" element={<Subpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
