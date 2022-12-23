import { Home } from "./pages/home/Home";
import "./css/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Links } from "./pages/links/Links";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/link" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
