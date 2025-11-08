import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/theme-provider";
import { debugRoute } from "./utils/debug";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "../src/pages/admin-dashboard";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Contact from "./pages/Contact";
import SportsTraining from "../src/pages/SportsTraining";
import WeightLossProgram from "../src/pages/WeightLossProgram";
import NutritionCounseling from "../src/pages/NutritionCounseling";
import DigitalMarketing from "../src/pages/DigitalMarketing";
import OngoingSupport from "../src/pages/OngoingSupport";
import NutritionPlans from "../src/pages/NutritionPlans";
import NotFound from "./pages/NotFound";

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
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-12 h-12 border-b-2 border-gray-900 rounded-full animate-spin dark:border-gray-100"></div>
            </div>
          }
        >
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
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
