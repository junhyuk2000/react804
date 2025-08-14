import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./page/Mainpage";
import Subpage from "./page/Subpage";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">메인</Link>
      <Link to="/sub">서브</Link>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/sub" element={<Subpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
