import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantDetailsPage from "./pages/PlantDetailsPage/PlantDetailsPage.js";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlantDetailsPage />} />
        <Route path="plants/:plantId" element={<PlantDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
