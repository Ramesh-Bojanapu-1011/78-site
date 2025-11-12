import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function About() {
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
          <source src="/78Av.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
            <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-tight text-white">
              {t("about.showcase.title")}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
            <p className="max-w-3xl mx-auto mt-6 text-xl text-white/80">
              {t("about.showcase.subtitle")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
            <div className="flex justify-center gap-4 mt-8">
              {/* Primary Button */}
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
                style={{ backgroundColor: "#0A5950" }}
              >
                {t("about.showcase.connectButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 3) Health & Wellness Platform Process */}
      <section
        id="wellnessProcess"
        className={`py-20 transition-colors duration-500 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div
              className={`space-y-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
                <div className="mb-4">
                  <span
                    className="text-sm font-semibold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("about.wellnessProcess.badge", "WHO WE ARE")}
                  </span>
                </div>

                <h2
                  className={`text-4xl md:text-5xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {t("about.wellnessProcess.title")}
                </h2>

                <p
                  className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {t("about.wellnessProcess.subtitle")}
                </p>
              </ScrollAnimation>

              {/* Action Buttons */}
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <span>
                      {t("about.wellnessProcess.startButton", "Start Now")}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z" />
                    </svg>
                  </a>
                </div>
              </ScrollAnimation>

              {/* Statistics */}
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div
                      className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {t("about.wellnessProcess.stats.experience.value", "12+")}
                    </div>
                    <div
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {t(
                        "about.wellnessProcess.stats.experience.label",
                        "Years Of Experience",
                      )}
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {t("about.wellnessProcess.stats.coaching.value", "924+")}
                    </div>
                    <div
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {t(
                        "about.wellnessProcess.stats.coaching.label",
                        "Hours Of Coaching",
                      )}
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {t("about.wellnessProcess.stats.courses.value", "248+")}
                    </div>
                    <div
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {t(
                        "about.wellnessProcess.stats.courses.label",
                        "Completed Courses",
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Content - Image with Badges */}
            <div className="relative">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                <div className="relative overflow-hidden shadow-2xl rounded-3xl">
                  <img
                    src="/images/78Aimg1.jpg"
                    alt="Health Coaching Professional"
                    className="w-full h-[600px] object-cover"
                  />

                  {/* Badge: 100K+ People helped */}
                  <div
                    className={`absolute top-6 right-6 rounded-2xl p-4 shadow-xl backdrop-blur-md ${
                      isDark
                        ? "bg-white/10 border border-white/20"
                        : "bg-white/90"
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {t(
                        "about.wellnessProcess.badges.peopleHelped.value",
                        "100K+",
                      )}
                    </div>
                    <div
                      className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {t(
                        "about.wellnessProcess.badges.peopleHelped.label",
                        "People helped",
                      )}
                    </div>
                    <div className="mt-2">
                      <img
                        src="/images/78Bimg7.jpg"
                        alt="Success Stories"
                        className="object-cover w-24 h-16 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Why Choose Us - Personalized Energy */}
      <section
        id="whyChooseUs"
        className={`py-20 transition-colors duration-500 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
        dir="ltr"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content - Images */}
            <div className="relative">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <div className="relative">
                  {/* Main Image */}
                  <div className="overflow-hidden shadow-2xl rounded-3xl">
                    <img
                      src="/images/78Aimg2.jpg"
                      alt="Happy and Energetic Lifestyle"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* Overlapping Small Image */}
                  <div className="absolute w-64 h-64 overflow-hidden border-8 border-white shadow-2xl -bottom-6 -right-6 rounded-3xl dark:border-gray-900">
                    <img
                      src="/images/78Aimg3.jpg"
                      alt="Yoga and Wellness Practice"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Content */}
            <div
              className={`space-y-8 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
                <div className="mb-4">
                  <span
                    className="text-sm font-semibold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("about.whyChooseUs.badge", "WHY CHOOSE US")}
                  </span>
                </div>

                <h2
                  className={`text-4xl md:text-5xl font-bold leading-tight ${isDark ? "text-white" : "text-black"}`}
                >
                  {t(
                    "about.whyChooseUs.title",
                    "Personalized Energy For Optimal Health",
                  )}
                </h2>
              </ScrollAnimation>

              {/* Features List */}
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
                <div className="mt-8 space-y-6">
                  {[
                    {
                      text: t(
                        "about.whyChooseUs.features.customizedPlan",
                        "Customized Plan Based On Your Specific Needs",
                      ),
                    },
                    {
                      text: t(
                        "about.whyChooseUs.features.allAspects",
                        "Considering All Aspects Of Your Health",
                      ),
                    },
                    {
                      text: t(
                        "about.whyChooseUs.features.encouragement",
                        "Provide The Encouragement And Motivation",
                      ),
                    },
                    {
                      text: t(
                        "about.whyChooseUs.features.measurableOutcomes",
                        "Helping Achieve Measurable Outcomes",
                      ),
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div
                        className="w-1 h-12 transition-all duration-300 rounded-full group-hover:h-16"
                        style={{ backgroundColor: "#0A5950" }}
                      ></div>
                      <p
                        className={`text-lg leading-relaxed pt-2 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Meet Your Wellness Expert - New Template */}
      <section
        id="wellnessExpert"
        className={`py-20 transition-colors duration-500 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}
        dir="ltr"
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
            <div className="mb-16 text-center">
              <h2
                className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("about.wellnessExpert.title")}
              </h2>
              <p
                className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} max-w-3xl mx-auto`}
              >
                {t("about.wellnessExpert.subtitle")}
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Center - Expert Image Card */}
            <div className="lg:col-span-1">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl border ${
                    isDark
                      ? "bg-gray-900 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="relative">
                    <img
                      src="/images/78Aimg4.jpg"
                      alt="Wellness Expert"
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                      <h3 className="mb-1 text-2xl font-bold text-white">
                        {t("about.wellnessExpert.expertName")}
                      </h3>
                      <p
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: "#0A5950" }}
                      >
                        {t("about.wellnessExpert.expertTagline")}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="p-6">
                    <div className="flex justify-center gap-4">
                      <a
                        href="#"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                        style={{ "--hover-bg": "#0A5950" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#0A5950")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = isDark
                            ? "rgb(31, 41, 55)"
                            : "rgb(243, 244, 246)")
                        }
                      >
                        <svg
                          className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-700"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#0A5950")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = isDark
                            ? "rgb(31, 41, 55)"
                            : "rgb(243, 244, 246)")
                        }
                      >
                        <svg
                          className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-700"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#0A5950")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = isDark
                            ? "rgb(31, 41, 55)"
                            : "rgb(243, 244, 246)")
                        }
                      >
                        <svg
                          className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-700"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right - Content & Features */}
            <div className="space-y-6 lg:col-span-2">
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
                {/* Description */}
                <div
                  className={`rounded-2xl p-8 shadow-lg border ${
                    isDark
                      ? "bg-gray-900 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    <p className="leading-relaxed">
                      {t("about.wellnessExpert.expertDescription1")}
                    </p>
                    <p className="leading-relaxed">
                      {t("about.wellnessExpert.expertDescription2")}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Highlights Grid */}
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-4">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V9h7V3.01L19 7v2h-7v3.99z" />
                        </svg>
                      ),
                      text: t(
                        "about.wellnessExpert.highlights.personalizedPlans",
                        "Personalized plans tailored to your lifestyle",
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                      ),
                      text: t(
                        "about.wellnessExpert.highlights.dataDriven",
                        "Data‑driven progress tracking and insights",
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                      ),
                      text: t(
                        "about.wellnessExpert.highlights.coaching",
                        "Weekly coaching and accountability",
                      ),
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-xl border transition-all hover:scale-105 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                      style={{ "--hover-border": "#0A5950" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "#0A5950")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = isDark
                          ? "rgb(55, 65, 81)"
                          : "rgb(229, 231, 235)")
                      }
                    >
                      <div
                        className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg"
                        style={{
                          backgroundColor: "rgba(10, 89, 80, 0.2)",
                          color: "#0A5950",
                        }}
                      >
                        {item.icon}
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Our Team - Carousel Design */}
      <section
        id="ourTeam"
        className={`py-20 transition-colors duration-500 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
        dir="ltr"
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
            <div className="mb-16 text-center">
              {/* Icon and Badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  style={{ color: "#0A5950" }}
                >
                  <path
                    fill="currentColor"
                    d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1Z"
                  />
                </svg>
                <span
                  className="text-sm font-bold tracking-wider uppercase"
                  style={{ color: "#0A5950" }}
                >
                  {t("about.ourTeam.badge")}
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("about.ourTeam.headingLine1")}
                <br />
                {t("about.ourTeam.headingLine2")}
              </h2>
            </div>
          </ScrollAnimation>

          {/* Team Grid */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <div className="grid items-start gap-6 px-4 lg:grid-cols-4 md:grid-cols-2">
              {t("about.ourTeam.teamMembers", { returnObjects: true }).map(
                (member, index) => (
                  <div key={index} className="relative h-full group">
                    {/* Card with rounded image */}
                    <div className="relative overflow-hidden rounded-[40px] shadow-2xl h-[500px] w-full transform transition-all duration-300 hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Member Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                        <h3 className="mb-2 text-2xl font-bold">
                          {member.name}
                        </h3>
                        <p className="mb-4 text-base text-white/90">
                          {member.role}
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-3">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 transition-all duration-300 transform rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110"
                          >
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 transition-all duration-300 transform rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110"
                          >
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                          <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 transition-all duration-300 transform rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110"
                          >
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 8) Call-to-Action Section */}
      <section id="cta" className="relative py-24 overflow-hidden">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/images/78Acta.jpg)",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          {/* Main CTA Content */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                {t("about.cta.title")} {t("about.cta.titleAccent")}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
              <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-white/90">
                {t("about.cta.description")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-4">
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105"
                  style={{ backgroundColor: "#0A5950" }}
                >
                  {t("about.cta.primaryButton")}
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Features Grid */}
          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-8 transition-all duration-300 border rounded-2xl hover:scale-105 bg-white/10 backdrop-blur-md border-white/20">
                <div
                  className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(10, 89, 80, 0.1)" }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "#0A5950" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {t("about.cta.trustIndicators.certifiedProfessionals.title")}
                </h3>
                <p className="leading-relaxed text-white/80">
                  {t(
                    "about.cta.trustIndicators.certifiedProfessionals.description",
                  )}
                </p>
              </div>

              <div className="p-8 transition-all duration-300 border rounded-2xl hover:scale-105 bg-white/10 backdrop-blur-md border-white/20">
                <div
                  className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(10, 89, 80, 0.1)" }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "#0A5950" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {t("about.cta.trustIndicators.provenResults.title")}
                </h3>
                <p className="leading-relaxed text-white/80">
                  {t("about.cta.trustIndicators.provenResults.description")}
                </p>
              </div>

              <div className="p-8 transition-all duration-300 border rounded-2xl hover:scale-105 bg-white/10 backdrop-blur-md border-white/20">
                <div
                  className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(10, 89, 80, 0.1)" }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "#0A5950" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {t("about.cta.trustIndicators.personalizedCare.title")}
                </h3>
                <p className="leading-relaxed text-white/80">
                  {t("about.cta.trustIndicators.personalizedCare.description")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
