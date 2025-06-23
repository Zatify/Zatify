import { Route, Routes } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <MenuProvider>
      <div className="min-h-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
          </Route>
        </Routes>
      </div>
    </MenuProvider>
  );
}

export default App;
