import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectDetails from "./Components/ProjectDetails";
import Home from "./Layout/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
