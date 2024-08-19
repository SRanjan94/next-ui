import "./App.css";
import Layouts from "./components/Layouts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Layouts>
        {" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layouts>
    </Router>
  );
}

export default App;
