import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";



function App() {
  return (
    <div className=" min-h-screen">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
