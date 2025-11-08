import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/theme-provider";
import About from "./pages/About";
import AdminDashboard from "../src/pages/admin-dashboard";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Services from "./pages/Services";
import DigitalMarketing from "../src/pages/DigitalMarketing";
import NutritionCounseling from "../src/pages/NutritionCounseling";
import NutritionPlans from "../src/pages/NutritionPlans";
import OngoingSupport from "../src/pages/OngoingSupport";
import SportsTraining from "../src/pages/SportsTraining";
import WeightLossProgram from "../src/pages/WeightLossProgram";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home2"
            element={
              <ProtectedRoute>
                <Home2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/1"
            element={
              <ProtectedRoute>
                <BlogPost1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/2"
            element={
              <ProtectedRoute>
                <BlogPost2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/3"
            element={
              <ProtectedRoute>
                <BlogPost3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/yoga"
            element={
              <ProtectedRoute>
                <SportsTraining />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/weight-loss-program"
            element={
              <ProtectedRoute>
                <WeightLossProgram />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/nutrition-counseling"
            element={
              <ProtectedRoute>
                <NutritionCounseling />
              </ProtectedRoute>
            }
          />

          <Route
            path="/services/ayurvedic-treatment"
            element={
              <ProtectedRoute>
                <DigitalMarketing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/theta-healing"
            element={
              <ProtectedRoute>
                <OngoingSupport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/mental-health"
            element={
              <ProtectedRoute>
                <NutritionPlans />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
