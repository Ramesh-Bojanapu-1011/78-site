import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import ScrollAnimation from "../components/ScrollAnimation";
import WellnessServicesGrid from "../components/WellnessServicesGrid";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function Services() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
    // Theme detection
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [navigate]);

  // Smooth scroll to section if hash is present
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, []);

  const user = getCurrentUser();

  return (
    <div
      className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <Navbar user={user} />

      {/* Showcase */}
      <section
        id="showcase"
        className="relative flex items-center justify-center h-screen overflow-hidden text-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/78Sv.mp4" type="video/mp4" />
          {t("services.video.notSupported")}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white">
            {t("services.showcase.title")}
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/80">
            {t("services.showcase.subtitle")}
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {/* Book Consultation Button */}
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
              style={{ backgroundColor: "#0A5950" }}
            >
              {t("services.showcase.reachOutButton")}
            </a>
          </div>
        </div>
      </section>

      {/* Our Wellness Services section */}
      <WellnessServicesGrid />

      {/* Feature Showcase Section */}
      <section
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <ScrollAnimation animation="fade-up">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold md:text-5xl"
                style={{ color: "#0A5950" }}
              >
                {t("services.features.title", "Why Choose Our Platform")}
              </h2>
              <p
                className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
              >
                {t(
                  "services.features.subtitle",
                  "Experience the next level of wellness management with our comprehensive platform",
                )}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid items-center gap-8 lg:grid-cols-3">
            {/* Left Column - Features 1 & 2 */}
            <div className="space-y-8">
              {/* Feature 1 - Real-time Progress */}
              <ScrollAnimation animation="fade-right" delay={0.1}>
                <div
                  className={`p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? "bg-gray-700" : "bg-white"}`}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {t(
                      "services.features.realTimeProgress.title",
                      "Real-time Progress Tracking",
                    )}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {t(
                      "services.features.realTimeProgress.description",
                      "Gain actionable insights with our real-time progress tracking and analytics dashboard",
                    )}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Feature 2 - Customizable Plans */}
              <ScrollAnimation animation="fade-right" delay={0.2}>
                <div
                  className={`p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? "bg-gray-700" : "bg-white"}`}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {t(
                      "services.features.customizablePlans.title",
                      "Customizable Wellness Plans",
                    )}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {t(
                      "services.features.customizablePlans.description",
                      "Streamline your wellness journey with personalized and automated wellness programs",
                    )}
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Center Column - Image */}
            <div className="flex items-center justify-center">
              <ScrollAnimation animation="zoom-in" delay={0.15}>
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                    style={{ backgroundColor: "#0A5950" }}
                  ></div>
                  <img
                    src="/images/78Simg7.jpg"
                    alt="Wellness Professional"
                    className="relative object-cover w-full max-w-md shadow-2xl rounded-3xl"
                  />
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column - Features 3 & 4 */}
            <div className="space-y-8">
              {/* Feature 3 - Mobile Accessibility */}
              <ScrollAnimation animation="fade-left" delay={0.1}>
                <div
                  className={`p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? "bg-gray-700" : "bg-white"}`}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {t(
                      "services.features.mobileAccess.title",
                      "Mobile Accessibility",
                    )}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {t(
                      "services.features.mobileAccess.description",
                      "Manage your wellness journey on the go with our fully responsive mobile-friendly platform",
                    )}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Feature 4 - Enhanced Security */}
              <ScrollAnimation animation="fade-left" delay={0.2}>
                <div
                  className={`p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isDark ? "bg-gray-700" : "bg-white"}`}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {t(
                      "services.features.enhancedSecurity.title",
                      "Enhanced Privacy & Security",
                    )}
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {t(
                      "services.features.enhancedSecurity.description",
                      "Protect your sensitive health data with our state-of-the-art security measures",
                    )}
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* New Pricing Section */}
      <PricingSection />

      {/* Because You Matter - How It Works Section */}
      <section
        id="because-you-matter"
        className="relative py-24 overflow-hidden transition-colors duration-300"
        style={{
          backgroundImage: "url(/images/63H6.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-16 text-center">
              <h3
                className="mb-4 text-lg font-semibold tracking-wider uppercase"
                style={{ color: "#0A5950" }}
              >
                {t("services.becauseYouMatter.sectionTitle")}
              </h3>
              <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
                {t("services.becauseYouMatter.title")}
              </h2>
            </div>
          </ScrollAnimation>

          {/* Three Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {/* Step 1 */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="p-8 transition-all duration-300 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:bg-white">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("services.becauseYouMatter.step1.badge")}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {t("services.becauseYouMatter.step1.title")}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t("services.becauseYouMatter.step1.description")}
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 2 */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div className="p-8 transition-all duration-300 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:bg-white">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("services.becauseYouMatter.step2.badge")}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {t("services.becauseYouMatter.step2.title")}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t("services.becauseYouMatter.step2.description")}
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 3 */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="p-8 transition-all duration-300 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:bg-white">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("services.becauseYouMatter.step3.badge")}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {t("services.becauseYouMatter.step3.title")}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {t("services.becauseYouMatter.step3.description")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 6) CTA - Looking For Suitable Coaches */}
      <section
        id="cta"
        className={`py-32 transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-white"} relative overflow-hidden`}
      >
        <style>{`
          @keyframes float-hover {
            0%, 100% { transform: translateY(-15px) scale(1.08) rotate(2deg); }
            50% { transform: translateY(-25px) scale(1.1) rotate(-2deg); }
          }
          @keyframes shake-hover {
            0%, 100% { transform: translateX(0) scale(1.05); }
            25% { transform: translateX(-5px) scale(1.08) rotate(-3deg); }
            75% { transform: translateX(5px) scale(1.08) rotate(3deg); }
          }
          @keyframes bounce-hover {
            0%, 100% { transform: translateY(0) scale(1.05); }
            50% { transform: translateY(-20px) scale(1.1); }
          }
          @keyframes pulse-hover {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          @keyframes rotate-hover {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(5deg) scale(1.1); }
            100% { transform: rotate(-5deg) scale(1.08); }
          }
          @keyframes zoom-pulse {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.12) rotate(3deg); }
          }
          
          .cta-image-wrapper {
            transition: all 0.3s ease;
          }
          .cta-image-wrapper:hover img {
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          .hover-float:hover img {
            animation-name: float-hover;
            box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6);
          }
          .hover-shake:hover img {
            animation-name: shake-hover;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
          .hover-bounce:hover img {
            animation-name: bounce-hover;
            box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.7);
          }
          .hover-pulse:hover img {
            animation-name: pulse-hover;
            animation-duration: 0.8s;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
          }
          .hover-rotate:hover img {
            animation-name: rotate-hover;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
          }
          .hover-zoom:hover img {
            animation-name: zoom-pulse;
            animation-duration: 1.2s;
            box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7);
          }
        `}</style>
        <div className="px-4 mx-auto max-w-7xl">
          {/* Decorative Images Positioned Around Content */}
          <div className="relative">
            {/* Top Left Image */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <div className="absolute left-0 hidden h-56 lg:block -top-12 w-44 cta-image-wrapper hover-float">
                <img
                  src="/images/78S6img1.jpg"
                  alt="Wellness"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Top Center-Left Image */}
            <ScrollAnimation animation="fade-up" delay={0.15}>
              <div className="absolute hidden w-40 h-48 lg:block -top-16 left-52 cta-image-wrapper hover-shake">
                <img
                  src="/images/78Bimg1.jpg"
                  alt="Fitness"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Top Right Image */}
            <ScrollAnimation animation="fade-up" delay={0.2}>
              <div className="absolute right-0 hidden h-56 lg:block -top-12 w-44 cta-image-wrapper hover-bounce">
                <img
                  src="/images/78S2Im1.jpg"
                  alt="Yoga"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Bottom Left Image */}
            <ScrollAnimation animation="fade-up" delay={0.25}>
              <div className="absolute hidden w-40 lg:block bottom-8 left-8 h-52 cta-image-wrapper hover-pulse">
                <img
                  src="/images/78S3img4.jpg"
                  alt="Nutrition"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Bottom Center-Left Image */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="absolute hidden h-48 lg:block bottom-12 left-56 w-36 cta-image-wrapper hover-rotate">
                <img
                  src="/images/78S4img1.jpg"
                  alt="Training"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Bottom Right Image */}
            <ScrollAnimation animation="fade-up" delay={0.35}>
              <div className="absolute hidden w-40 lg:block bottom-8 right-12 h-52 cta-image-wrapper hover-zoom">
                <img
                  src="/images/78S4img5.jpg"
                  alt="Meditation"
                  className="object-cover w-full h-full transition-all duration-300 shadow-xl rounded-2xl"
                />
              </div>
            </ScrollAnimation>

            {/* Central Content */}
            <div className="relative z-10 max-w-3xl py-32 mx-auto text-center">
              <ScrollAnimation animation="fade-up">
                {/* Badge */}
                <div className="flex items-center justify-center mb-6">
                  <span
                    className="text-sm font-semibold tracking-widest uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("services.cta.keepGoingOn", "KEEP GOING ON")}
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
                  style={{ color: "#0A5950" }}
                >
                  {t(
                    "services.cta.lookingForCoaches",
                    "Looking For Suitable Coaches",
                  )}
                </h2>

                {/* Description */}
                <p
                  className={`text-lg leading-relaxed mb-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {t(
                    "services.cta.coachesDescription",
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
                  )}
                </p>

                {/* Explore Now Button */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
                  style={{
                    backgroundColor: "#0A5950",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#0A5950";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {t("services.cta.exploreNow", "Explore Now")}
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
