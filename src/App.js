import { Route, Routes } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import About from "./components/About";
import Contact from "./components/Contact";
import CreativeTeam from "./components/CreativeTeam";
import TeamMemberDetail from "./components/TeamMemberDetail";
import ServiceSingle from "./components/ServiceSingle";
import Pricingplans from "./components/Pricingplans";
import Projectsgrid from "./components/Projectsgrid";
import BlogGrid from "./components/BlogGrid";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <MenuProvider>
      <div className="min-h-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create-team" element={<CreativeTeam />} />
            <Route path="/team/:memberId" element={<TeamMemberDetail />} />
            <Route path="/service-single" element={<ServiceSingle />} />
            <Route path="/pricing" element={<Pricingplans />} />
            <Route path="/project-grid" element={<Projectsgrid />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </div>
    </MenuProvider>
  );
}

export default App;
