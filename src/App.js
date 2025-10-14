import { Route, Routes } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import About from "./components/About";
import Contact from "./components/Contact";
import CreativeTeam from "./components/CreativeTeam";
import TeamMemberDetail from "./components/TeamMemberDetail";
import Pricingplans from "./components/Pricingplans";
import Projectsgrid from "./components/Projectsgrid";
import BlogGrid from "./components/BlogGrid";
import ProjectDetail from "./components/ProjectDetail";
import ZaloMiniApp from "./components/ZaloMiniApp";
import ZaloNotificationService from "./components/ZNS";
import ZaloAds from "./components/ZaloAds";
import ZaloOfficialAccount from "./components/ZOA";
import FAQ from "./components/FAQ";
import ViewBlog from "./components/ViewBlog";
import Bai1 from "./components/Blog/Bai1";
import Bai2 from "./components/Blog/Bai2";
import Bai3 from "./components/Blog/Bai3";
import Bai4 from "./components/Blog/Bai4";
import Bai5 from "./components/Blog/Bai5";
import Bai6 from "./components/Blog/Bai6";
import Bai7 from "./components/Blog/Bai7";
import Bai8 from "./components/Blog/Bai8";
import Bai9 from "./components/Blog/Bai9";
import Bai10 from "./components/Blog/Bai10";
import Bai11 from "./components/Blog/Bai11";
import Bai12 from "./components/Blog/Bai12";
import Bai13 from "./components/Blog/Bai13";
import Bai14 from "./components/Blog/Bai14";
import Bai15 from "./components/Blog/Bai15";
import Bai16 from "./components/Blog/Bai16";
import Bai17 from "./components/Blog/Bai17";
import Bai18 from "./components/Blog/Bai18";
import Bai19 from "./components/Blog/Bai19";
import Bai20 from "./components/Blog/Bai20";

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
            <Route path="/pricing" element={<Pricingplans />} />
            <Route path="/project-grid" element={<Projectsgrid />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/view-blog" element={<ViewBlog />}>
              <Route path="blog_1" element={<Bai1 />} />
              <Route path="blog_2" element={<Bai2 />} />
              <Route path="blog_3" element={<Bai3 />} />
              <Route path="blog_4" element={<Bai4 />} />
              <Route path="blog_5" element={<Bai5 />} />
              <Route path="blog_6" element={<Bai6 />} />
              <Route path="blog_7" element={<Bai7 />} />
              <Route path="blog_8" element={<Bai8 />} />
              <Route path="blog_9" element={<Bai9 />} />
              <Route path="blog_10" element={<Bai10 />} />
              <Route path="blog_11" element={<Bai11 />} />
              <Route path="blog_12" element={<Bai12 />} />
              <Route path="blog_13" element={<Bai13 />} />
              <Route path="blog_14" element={<Bai14 />} />
              <Route path="blog_15" element={<Bai15 />} />
              <Route path="blog_16" element={<Bai16 />} />
              <Route path="blog_17" element={<Bai17 />} />
              <Route path="blog_18" element={<Bai18 />} />
              <Route path="blog_19" element={<Bai19 />} />
              <Route path="blog_20" element={<Bai20 />} />
            </Route>
            <Route path="/project/:id" element={<ProjectDetail />} />
            {/* Dịch vụ  */}
            <Route path="/zalo-mini-app" element={<ZaloMiniApp />} />
            <Route path="/zalo-oficial-account" element={<ZaloOfficialAccount />} />
            <Route path="/zalo-notification-service" element={<ZaloNotificationService />} />
            <Route path="/zalo-ads" element={<ZaloAds />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
        </Routes>
      </div>
    </MenuProvider>
  );
}

export default App;
