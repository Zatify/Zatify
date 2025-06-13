import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Header from "./partials/Header";
import HomePage from "./components/HomePage";



function App() {
  return (
    <div className=" min-h-screen">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
