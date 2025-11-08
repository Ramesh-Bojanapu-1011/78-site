import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/theme-provider";
import { debugRoute } from "./utils/debug";

// Lazy load all page components
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Home = lazy(() => import("./pages/Home"));
const Home2 = lazy(() => import("./pages/Home2"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const Contact = lazy(() => import("./pages/Contact"));
const AdminDashboard = lazy(() => import("./pages/admin-dashboard"));
const SportsTraining = lazy(() => import("./pages/SportsTraining"));
const WeightLossProgram = lazy(() => import("./pages/WeightLossProgram"));
const NutritionCounseling = lazy(() => import("./pages/NutritionCounseling"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const OngoingSupport = lazy(() => import("./pages/OngoingSupport"));
const NutritionPlans = lazy(() => import("./pages/NutritionPlans"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Component to handle route debugging
function RouteDebugger() {
  const location = useLocation();

  React.useEffect(() => {
    console.log("🛣️ Route changed to:", location.pathname);
    debugRoute(location.pathname);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteDebugger />
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
