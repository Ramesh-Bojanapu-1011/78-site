/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";
import { LanguageSelector } from "../components/language-selector";
import { ThemeDebug } from "../components/theme-debug";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const user = getCurrentUser();

  const [isDark, setIsDark] = useState(false);
  const [servicesSectionVisible, setServicesSectionVisible] = useState(false);
  const servicesSectionRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  // Testimonials data with translation keys
  const testimonials = [
    {
      id: 0,
      nameKey: "testimonial1.name",
      roleKey: "testimonial1.role",
      image: "/images/78Himg4.jpg",
      contentKey: "testimonial1.content",
    },
    {
      id: 1,
      nameKey: "testimonial2.name",
      roleKey: "testimonial2.role",
      image: "/images/78Himg5.jpg",
      contentKey: "testimonial2.content",
    },
    {
      id: 2,
      nameKey: "testimonial3.name",
      roleKey: "testimonial3.role",
      image: "/images/78Himg6.jpg",
      contentKey: "testimonial3.content",
    },
  ];

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for Services section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setServicesSectionVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before section is fully visible
      },
    );

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    return () => {
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="text-black transition-colors bg-white dark:bg-gray-900 dark:text-white">
      <Navbar user={user} />
      <ThemeDebug />

      {/* 1 Showcase */}
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
          <source src="/78H1v.mp4" type="video/mp4" />
          {t("common.videoNotSupported")}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-4xl font-extrabold leading-tight text-white whitespace-nowrap">
              {t("home.showcase.title")}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="max-w-3xl mx-auto mt-6 text-xl text-white/80 whitespace-nowrap">
              {t("home.showcase.subtitle")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center gap-4 mt-8">
              {/* Primary Button */}
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
                style={{ backgroundColor: "#0A5950" }}
              >
                {t("home.showcase.exploreButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className={`${
          isDark
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-black border-black/10"
        } border-t transition-colors duration-300`}
      >
        <div className="px-4 py-24 mx-auto max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Images */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="flex">
                {/* Main Exercise Image */}
                <div className="w-56 h-56 overflow-hidden shadow-2xl rounded-l-3xl">
                  <img
                    src="/images/78Himg1.jpg"
                    alt="Woman exercising"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Food Bowl Image */}
                <div className="w-56 h-56 overflow-hidden shadow-2xl rounded-r-3xl">
                  <img
                    src="/images/78Himg2.jpg"
                    alt="Healthy food bowl"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Content */}
            <ScrollAnimation
              animation="slide-in-right"
              stagger="scroll-stagger-2"
            >
              <div className="space-y-6">
                {/* Label */}
                <div>
                  <span
                    className="text-sm font-semibold tracking-wider uppercase"
                    style={{ color: "#0A5950" }}
                  >
                    {t("home.aboutUs.label")}
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  className={`text-4xl lg:text-5xl font-extrabold leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  style={{ color: "#0A5950" }}
                >
                  {t("home.aboutUs.title")}
                </h2>

                {/* Description Paragraphs */}
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("home.aboutUs.description1")}
                </p>

                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("home.aboutUs.description2")}
                </p>

                {/* Coach Profile */}
                <div className="flex items-center pt-4 space-x-4">
                  <img
                    src="/images/78Himg3.jpg"
                    alt={t("home.aboutUs.coachName")}
                    className="object-cover w-16 h-16 border-2 border-gray-200 rounded-full"
                  />
                  <div>
                    <h4
                      className={`text-lg font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t("home.aboutUs.coachName")}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {t("home.aboutUs.coachRole")}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width="120"
                      height="40"
                      viewBox="0 0 120 40"
                      className="text-gray-400"
                    >
                      <text
                        x="0"
                        y="30"
                        fontFamily="Brush Script MT, cursive"
                        fontSize="24"
                        fill="currentColor"
                      >
                        Taylor Smith
                      </text>
                    </svg>
                  </div>
                </div>

                {/* More Info Button */}
                <div className="pt-4">
                  <a
                    href="/about"
                    className="inline-flex items-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl group"
                    style={{ backgroundColor: "#0A5950", color: "white" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#0A5950";
                    }}
                  >
                    {t("home.aboutUs.moreInfoButton")}
                    <svg
                      className="w-5 h-5 ml-2 transition-transform transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Welcome Section - Health Coaching Benefits */}
      <section
        id="welcome"
        className="relative overflow-hidden transition-colors duration-300 border-t"
        style={{ backgroundColor: "#0A5950" }}
      >
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Content */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="space-y-8">
                {/* Label */}
                <div>
                  <span className="text-sm font-semibold tracking-wider text-white uppercase">
                    {t("home.welcome.label")}
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  className={`text-4xl lg:text-5xl font-extrabold leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("home.welcome.title")}
                </h2>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white">
                  {t("home.welcome.description")}
                </p>

                {/* CTA Button */}
                <div>
                  <a
                    href="/services"
                    className="inline-flex items-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white border-2 border-transparent rounded-lg shadow-lg hover:shadow-xl hover:text-white hover:border-white group"
                    style={{ backgroundColor: "white" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0A5950")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    {t("home.welcome.startButton")}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Benefit 1 - Increase Motivation */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <div className="p-6 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white hover:shadow-xl group">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <path
                            fill="#0A5950"
                            d="M6 6c4.665-2.332 8.5.5 10 2.5c1.5-2 5.335-4.832 10-2.5c6 3 4.5 10.5 0 15c-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21C1.5 16.5 0 9 6 6"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-center text-white transition-colors group-hover:text-gray-900">
                    {t("home.welcome.benefits.increaseMotivation.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white transition-colors group-hover:text-gray-600">
                    {t("home.welcome.benefits.increaseMotivation.description")}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Benefit 2 - Better Time Management */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
                <div className="p-6 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white hover:shadow-xl group">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#0A5950"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 6v6l4 2"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-center text-white transition-colors group-hover:text-gray-900">
                    {t("home.welcome.benefits.betterTimeManagement.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white transition-colors group-hover:text-gray-600">
                    {t(
                      "home.welcome.benefits.betterTimeManagement.description",
                    )}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Benefit 3 - Improve Self-Awareness */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                <div className="p-6 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white hover:shadow-xl group">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#0A5950"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-13h2v6h-2zm0 8h2v2h-2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-center text-white transition-colors group-hover:text-gray-900">
                    {t("home.welcome.benefits.improveSelfAwareness.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white transition-colors group-hover:text-gray-600">
                    {t(
                      "home.welcome.benefits.improveSelfAwareness.description",
                    )}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Benefit 4 - Communication Skills */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
                <div className="p-6 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white hover:shadow-xl group">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            fill="#0A5950"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m0 14.2c-2.5 0-4.71-1.28-6-3.22c.03-1.99 4-3.08 6-3.08c1.99 0 5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-center text-white transition-colors group-hover:text-gray-900">
                    {t("home.welcome.benefits.communicationSkills.title")}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white transition-colors group-hover:text-gray-600">
                    {t("home.welcome.benefits.communicationSkills.description")}
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Driven Solutions Section */}
      <section
        id="customer-solutions"
        className={`relative overflow-hidden border-t transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="px-4 py-24 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Image with Stats Overlay */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="relative">
                <div className="overflow-hidden shadow-2xl rounded-3xl">
                  <img
                    src="/images/63H6.jpg"
                    alt={t("home.customerSolutions.imageAlt")}
                    className="object-cover w-full h-auto"
                  />

                  {/* Performance Stats Overlay */}
                  <div className="absolute max-w-xs p-6 shadow-xl top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl">
                    <h4 className="mb-4 text-lg font-bold text-gray-900">
                      {t("home.customerSolutions.statsTitle")}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">
                            {t("home.customerSolutions.stats.newGoals")}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            95.2%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "95.2%",
                              backgroundColor: "#0A5950",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">
                            {t("home.customerSolutions.stats.qualified")}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            94.7%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "94.7%",
                              backgroundColor: "#0A5950",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">
                            {t("home.customerSolutions.stats.proposal")}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            44.6%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "44.6%",
                              backgroundColor: "#0A5950",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">
                            {t("home.customerSolutions.stats.closed")}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            39.7%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "39.7%",
                              backgroundColor: "#0A5950",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Content */}
            <ScrollAnimation
              animation="slide-in-right"
              stagger="scroll-stagger-2"
            >
              <div className="space-y-8">
                {/* Main Heading */}
                <div>
                  <h2
                    className={`text-4xl lg:text-5xl font-extrabold leading-tight mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("home.customerSolutions.title")}
                  </h2>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("home.customerSolutions.description")}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-3"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full"
                        style={{ backgroundColor: "#0A5950" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {t(
                          "home.customerSolutions.features.personalizedEngagement",
                        )}
                      </span>
                    </div>
                  </ScrollAnimation>

                  {/* Feature 2 */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full"
                        style={{ backgroundColor: "#0A5950" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {t(
                          "home.customerSolutions.features.seamlessIntegration",
                        )}
                      </span>
                    </div>
                  </ScrollAnimation>

                  {/* Feature 3 */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-5"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full"
                        style={{ backgroundColor: "#0A5950" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {t(
                          "home.customerSolutions.features.smartDataAnalytics",
                        )}
                      </span>
                    </div>
                  </ScrollAnimation>

                  {/* Feature 4 */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-6"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full"
                        style={{ backgroundColor: "#0A5950" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {t("home.customerSolutions.features.support247")}
                      </span>
                    </div>
                  </ScrollAnimation>
                </div>

                {/* Statistics */}
                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    {/* Stat 1 */}
                    <div className="text-center">
                      <h3
                        className={`text-4xl font-extrabold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        200+
                      </h3>
                      <p
                        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {t(
                          "home.customerSolutions.statistics.businessPartners",
                        )}
                      </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center">
                      <h3
                        className={`text-4xl font-extrabold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        30K+
                      </h3>
                      <p
                        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {t(
                          "home.customerSolutions.statistics.satisfiedCustomers",
                        )}
                      </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center">
                      <h3
                        className={`text-4xl font-extrabold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        10+
                      </h3>
                      <p
                        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {t(
                          "home.customerSolutions.statistics.yearsOfExcellence",
                        )}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className={`relative overflow-hidden border-t transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-gray-700"
            : "bg-gray-50 text-black border-black/10"
        }`}
      >
        <div className="relative z-10 max-w-6xl px-4 py-24 mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <div className="mb-4">
                <span
                  className="text-sm font-semibold tracking-wider uppercase"
                  style={{ color: "#0A5950" }}
                >
                  {t("home.testimonials.label")}
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <h2
                className={`text-4xl lg:text-5xl font-serif font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Georgia, serif", color: "#0A5950" }}
              >
                {t("home.testimonials.title")}
              </h2>
            </ScrollAnimation>
          </div>

          {/* Featured Testimonial Quote */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="max-w-4xl mx-auto mb-16">
              <p
                className={`text-xl lg:text-2xl text-center leading-relaxed transition-all duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "
                {t(
                  `home.testimonials.${testimonials[activeTestimonial].contentKey}`,
                )}
                "
              </p>
            </div>
          </ScrollAnimation>

          {/* Customer Profiles */}
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation
                key={testimonial.id}
                animation="fade-in"
                stagger={`scroll-stagger-${index + 4}`}
              >
                <div
                  className="flex flex-col items-center transition-all duration-300 transform cursor-pointer hover:scale-105"
                  onClick={() => setActiveTestimonial(index)}
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  <div
                    className={`w-20 h-20 rounded-full overflow-hidden mb-4 border-4 shadow-lg transition-all duration-300 ${
                      activeTestimonial === index
                        ? "scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{
                      borderColor:
                        activeTestimonial === index ? "#0A5950" : "white",
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={t(`home.testimonials.${testimonial.nameKey}`)}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    } ${activeTestimonial === index ? "text-opacity-100" : "text-opacity-70"}`}
                  >
                    {t(`home.testimonials.${testimonial.nameKey}`)}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t(`home.testimonials.${testimonial.roleKey}`)}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Navigation Dots */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-gray-600 ${
                    activeTestimonial === index ? "scale-125" : "scale-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeTestimonial === index ? "#0A5950" : "#9CA3AF",
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* A Peek of Our Wellness Creations - Expert Team Section */}
      <section
        id="wellness-creations"
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/78Himg7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl px-4 py-24 mx-auto">
          <div className="text-center">
            {/* Content */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <div className="space-y-8">
                {/* Main Heading */}
                <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                  {t("home.expertTeam.title")}
                </h2>

                {/* Statistics Grid */}
                <div className="grid max-w-2xl grid-cols-3 gap-8 py-8 mx-auto">
                  {/* Stat 1 - Years of Experience */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-2"
                  >
                    <div className="text-center">
                      <h3 className="mb-2 text-4xl font-extrabold text-white lg:text-5xl">
                        12+
                      </h3>
                      <p className="text-sm lg:text-base text-white/90">
                        {t("home.expertTeam.stats.yearsOfExperience")}
                      </p>
                    </div>
                  </ScrollAnimation>

                  {/* Stat 2 - Hours of Coaching */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-3"
                  >
                    <div className="px-4 text-center border-l border-r border-white/30">
                      <h3 className="mb-2 text-4xl font-extrabold text-white lg:text-5xl">
                        924+
                      </h3>
                      <p className="text-sm lg:text-base text-white/90">
                        {t("home.expertTeam.stats.hoursOfCoaching")}
                      </p>
                    </div>
                  </ScrollAnimation>

                  {/* Stat 3 - Completed Courses */}
                  <ScrollAnimation
                    animation="fade-in"
                    stagger="scroll-stagger-4"
                  >
                    <div className="text-center">
                      <h3 className="mb-2 text-4xl font-extrabold text-white lg:text-5xl">
                        248+
                      </h3>
                      <p className="text-sm lg:text-base text-white/90">
                        {t("home.expertTeam.stats.completedCourses")}
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>

                {/* CTA Button with Language Selector */}
                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
                  <div>
                    <div className="flex justify-end mb-4">
                      <LanguageSelector />
                    </div>
                    <a
                      href="/about"
                      className="inline-flex items-center px-10 py-4 text-lg font-bold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl group"
                      style={{ backgroundColor: "white", color: "#0A5950" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "black";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "#0A5950";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {t("home.expertTeam.exploreNow")}
                      <svg
                        className="w-5 h-5 ml-2 transition-transform transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
