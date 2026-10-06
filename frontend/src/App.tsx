import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CvDetail from "./pages/CvDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cv/:id" element={<CvDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
