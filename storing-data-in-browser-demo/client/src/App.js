import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocalStoragePage from "./pages/LocalStoragePage/LocalStoragePage";
import SessionStoragePage from "./pages/SessionStoragePage/SessionStoragePage";
import CookiesPage from "./pages/CookiesPage/CookiesPage";


function App() {
  return (
    <BrowserRouter>
      <h1>Storing data in the browser demo</h1>
      <Routes>
        <Route path="/local-storage" element={<LocalStoragePage />} />
        <Route path="/session-storage" element={<SessionStoragePage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
