import { Routes, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./pages/index";
import { Search } from "./pages/index";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
