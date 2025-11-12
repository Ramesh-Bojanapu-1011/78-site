import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const user = getCurrentUser();

  const blogPosts = [
    {
      id: 1,
      title: t("blogPage.blogPosts.takeCharge.title"),
      excerpt: t("blogPage.blogPosts.takeCharge.excerpt"),
      image: "/images/63B1.jpg",
      category: t("blogPage.blogPosts.takeCharge.category"),
      author: t("blogPage.blogPosts.takeCharge.author"),
      authorImage: "/images/63BT1.jpg",
      date: t("blogPage.blogPosts.takeCharge.date"),
      readTime: t("blogPage.blogPosts.takeCharge.readTime"),
      featured: true,
    },
    {
      id: 2,
      title: t("blogPage.blogPosts.getMotivated.title"),
      excerpt: t("blogPage.blogPosts.getMotivated.excerpt"),
      image: "/images/63B2.jpg",
      category: t("blogPage.blogPosts.getMotivated.category"),
      author: t("blogPage.blogPosts.getMotivated.author"),
      authorImage: "/images/63BT2.jpg",
      date: t("blogPage.blogPosts.getMotivated.date"),
      readTime: t("blogPage.blogPosts.getMotivated.readTime"),
      featured: true,
    },
    {
      id: 3,
      title: t("blogPage.blogPosts.boostMetabolism.title"),
      excerpt: t("blogPage.blogPosts.boostMetabolism.excerpt"),
      image: "/images/63B3.jpg",
      category: t("blogPage.blogPosts.boostMetabolism.category"),
      author: t("blogPage.blogPosts.boostMetabolism.author"),
      authorImage: "/images/63BT3.jpg",
      date: t("blogPage.blogPosts.boostMetabolism.date"),
      readTime: t("blogPage.blogPosts.boostMetabolism.readTime"),
      featured: true,
    },
  ];

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div
      className={`${isDark ? "bg-gray-900" : "bg-white"} text-black dark:text-white transition-colors`}
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
          <source src="/63Blog.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <p className="text-sm font-medium tracking-widest text-green-300">
              {t("blogPage.showcase.tagline")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
            <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-tight text-white">
              {t("blogPage.showcase.title")}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
            <p className="max-w-3xl mx-auto mt-6 text-xl text-white/80">
              {t("blogPage.showcase.subtitle")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-4">
            <div className="flex justify-center gap-4 mt-8">
              {/* Primary Button */}
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("blogPage.showcase.subscribeButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brands Section */}
      <section
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2
                className={`text-4xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                1,200+ Healthy Brand Growing With Us
              </h2>
            </ScrollAnimation>
          </div>

          {/* Brands Grid */}
          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((index) => {
              const staggerClasses = [
                "scroll-stagger-2",
                "scroll-stagger-3",
                "scroll-stagger-4",
                "scroll-stagger-5",
                "scroll-stagger-6",
              ];
              const staggerClass =
                staggerClasses[index - 1] || "scroll-stagger-2";

              return (
                <ScrollAnimation
                  key={index}
                  animation="fade-in"
                  stagger={staggerClass}
                >
                  <div className="flex items-center justify-center transition-opacity duration-300 opacity-60 hover:opacity-100">
                    {/* Brand Logo Placeholder */}
                    <div className="flex items-center gap-2">
                      {index === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="40"
                          viewBox="0 0 140 40"
                          className={isDark ? "text-gray-400" : "text-gray-600"}
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="15"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M20 10 L25 15 L20 20 L15 15 Z"
                            fill="currentColor"
                          />
                          <text
                            x="40"
                            y="25"
                            fontFamily="Arial, sans-serif"
                            fontSize="16"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            Logoipsum
                          </text>
                        </svg>
                      ) : index === 2 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="40"
                          viewBox="0 0 140 40"
                          className={isDark ? "text-gray-400" : "text-gray-600"}
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="12"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M20 12 L23 20 L20 28 L17 20 Z"
                            fill="currentColor"
                          />
                          <text
                            x="40"
                            y="25"
                            fontFamily="Arial, sans-serif"
                            fontSize="16"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            Logoipsum
                          </text>
                        </svg>
                      ) : index === 3 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="40"
                          viewBox="0 0 140 40"
                          className={isDark ? "text-gray-400" : "text-gray-600"}
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="15"
                            fill="currentColor"
                            opacity="0.2"
                          />
                          <path
                            d="M15 15 h10 v10 h-10 z"
                            fill="currentColor"
                            opacity="0.5"
                          />
                          <text
                            x="40"
                            y="25"
                            fontFamily="Arial, sans-serif"
                            fontSize="16"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            logo ipsum
                          </text>
                        </svg>
                      ) : index === 4 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="40"
                          viewBox="0 0 140 40"
                          className={isDark ? "text-gray-400" : "text-gray-600"}
                        >
                          <circle cx="20" cy="20" r="12" fill="currentColor" />
                          <path d="M14 14 L26 14 L20 26 Z" fill="white" />
                          <text
                            x="40"
                            y="25"
                            fontFamily="Arial, sans-serif"
                            fontSize="16"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            Logoipsum
                          </text>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="40"
                          viewBox="0 0 140 40"
                          className={isDark ? "text-gray-400" : "text-gray-600"}
                        >
                          <rect
                            x="10"
                            y="10"
                            width="20"
                            height="20"
                            rx="4"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x="14"
                            y="14"
                            width="12"
                            height="12"
                            rx="2"
                            fill="currentColor"
                          />
                          <text
                            x="40"
                            y="25"
                            fontFamily="Arial, sans-serif"
                            fontSize="16"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            Logoipsum
                          </text>
                        </svg>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 1: Latest News */}
      <section
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2
                className={`text-4xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("blogPage.latestNews.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg max-w-2xl mx-auto`}
              >
                {t("blogPage.latestNews.subtitle")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 mx-auto md:grid-cols-3 max-w-7xl">
            {blogPosts.map((post, index) => {
              const staggerClasses = [
                "scroll-stagger-3",
                "scroll-stagger-4",
                "scroll-stagger-5",
              ];
              const staggerClass = staggerClasses[index] || "scroll-stagger-3";

              return (
                <ScrollAnimation
                  key={post.id}
                  animation="slide-up"
                  stagger={staggerClass}
                >
                  <article
                    className={`cursor-pointer group rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                      isDark ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full transition-transform duration-500 h-72 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Date and Author Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span
                            className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                          >
                            {post.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span
                            className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
                          >
                            BY ADMIN
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"} group-hover:text-green-600 transition-colors duration-300`}
                      >
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`mb-6 text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {post.excerpt}
                      </p>

                      {/* Read Now Button */}
                      <button
                        onClick={() => handleBlogClick(post.id)}
                        className="inline-flex items-center gap-2 text-base font-semibold text-teal-600 transition-all duration-300 dark:text-teal-500 hover:gap-3 group/btn"
                      >
                        <span>Read Now</span>
                        <span className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-teal-600 rounded-full dark:bg-teal-500 group-hover/btn:bg-teal-700 dark:group-hover/btn:bg-teal-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Take Charge Of Your Life */}
      <section
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2
                className={`text-5xl font-extrabold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("blogPage.takeCharge.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-600"} text-xl max-w-3xl mx-auto leading-relaxed`}
              >
                {t("blogPage.takeCharge.subtitle")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Content Blocks - Updated Modern Design */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <div className="bg-green-500 rounded-full w-96 h-96 blur-3xl"></div>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 1,
                  title: t("blogPage.takeCharge.connect.title"),
                  description: t("blogPage.takeCharge.connect.description"),
                  image: "/images/63B5.jpg",
                  icon: "🤝",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  id: 2,
                  title: t("blogPage.takeCharge.goNatural.title"),
                  description: t("blogPage.takeCharge.goNatural.description"),
                  image: "/images/63B4.jpg",
                  icon: "🌿",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  id: 3,
                  title: t("blogPage.takeCharge.scheduleExercise.title"),
                  description: t(
                    "blogPage.takeCharge.scheduleExercise.description",
                  ),
                  image: "/images/63B6.jpg",
                  icon: "💪",
                  gradient: "from-teal-500 to-cyan-500",
                },
                {
                  id: 4,
                  title: t("blogPage.takeCharge.celebrateSuccess.title"),
                  description: t(
                    "blogPage.takeCharge.celebrateSuccess.description",
                  ),
                  image: "/images/63B7.jpg",
                  icon: "🎉",
                  gradient: "from-cyan-500 to-green-500",
                },
              ].map((item, index) => {
                const staggerClasses = [
                  "scroll-stagger-4",
                  "scroll-stagger-5",
                  "scroll-stagger-6",
                  "scroll-stagger-1",
                ];
                const staggerClass =
                  staggerClasses[index] || "scroll-stagger-4";

                return (
                  <ScrollAnimation
                    key={item.id}
                    animation="slide-up"
                    stagger={staggerClass}
                  >
                    <div
                      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                        isDark ? "bg-gray-900" : "bg-white"
                      } shadow-lg hover:shadow-2xl`}
                    >
                      {/* Image Background with Overlay */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-500`}
                        ></div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center justify-center transition-transform duration-500 transform rounded-full shadow-lg w-14 h-14 bg-white/90 backdrop-blur-sm group-hover:rotate-12">
                            <span className="text-3xl">{item.icon}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3
                          className={`text-xl font-bold mb-3 leading-tight group-hover:text-green-600 transition-colors duration-300 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Decorative Line */}
                        <div className="w-12 h-1 mb-4 transition-all duration-500 rounded-full bg-linear-to-r from-green-500 to-transparent group-hover:w-20"></div>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {item.description}
                        </p>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-green-600 transition-opacity duration-300 opacity-0 dark:text-green-400 group-hover:opacity-100">
                          <span>Learn More</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-3xl group-hover:opacity-100">
                        <div
                          className={`absolute inset-0 rounded-3xl blur-xl bg-linear-to-br ${item.gradient} opacity-20`}
                        ></div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meet Our Authors */}
      <section
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        {" "}
        <div className="max-w-6xl px-4 mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2
                className={`text-4xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("blogPage.authors.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg max-w-2xl mx-auto`}
              >
                {t("blogPage.authors.subtitle")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Authors Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: t("blogPage.authors.sarah.name"),
                role: t("blogPage.authors.sarah.role"),
                bio: t("blogPage.authors.sarah.bio"),
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                expertise: t("blogPage.authors.sarah.expertise", {
                  returnObjects: true,
                }),
                icon: "🥗",
              },
              {
                name: t("blogPage.authors.mike.name"),
                role: t("blogPage.authors.mike.role"),
                bio: t("blogPage.authors.mike.bio"),
                image: "https://randomuser.me/api/portraits/men/46.jpg",
                expertise: t("blogPage.authors.mike.expertise", {
                  returnObjects: true,
                }),
                icon: "🏋️‍♂️",
              },
              {
                name: t("blogPage.authors.emma.name"),
                role: t("blogPage.authors.emma.role"),
                bio: t("blogPage.authors.emma.bio"),
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                expertise: t("blogPage.authors.emma.expertise", {
                  returnObjects: true,
                }),
                icon: "🧠",
              },
            ].map((author, index) => {
              // Assign different animations based on card position
              const getAnimationType = (index) => {
                switch (index) {
                  case 0:
                    return "slide-in-left";
                  case 1:
                    return "fade-in";
                  case 2:
                    return "slide-in-right";
                  default:
                    return "fade-in";
                }
              };

              // Create staggered delays for each author card
              const staggerClasses = [
                "scroll-stagger-3",
                "scroll-stagger-4",
                "scroll-stagger-5",
              ];
              const staggerClass = staggerClasses[index] || "scroll-stagger-3";

              return (
                <ScrollAnimation
                  key={index}
                  animation={getAnimationType(index)}
                  stagger={staggerClass}
                >
                  <div className="relative cursor-pointer group">
                    {/* Author Card with Background Image */}
                    <div className="relative overflow-hidden h-80 rounded-xl">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 transition-transform duration-500 bg-center bg-no-repeat bg-cover group-hover:scale-110"
                        style={{ backgroundImage: `url(${author.image})` }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 transition-all duration-500 bg-linear-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/40" />

                      {/* Main Content - Always Centered */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                        {/* Author Profile Image */}
                        <div className="w-20 h-20 mb-4 overflow-hidden transition-all duration-300 border-4 rounded-full shadow-lg border-white/30 group-hover:border-white/50">
                          <img
                            src={author.image}
                            alt={author.name}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* Name */}
                        <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                          {author.name}
                        </h3>

                        {/* Role */}
                        <p className="font-medium text-green-300 transition-colors duration-300 group-hover:text-green-200">
                          {author.role}
                        </p>
                      </div>

                      {/* Hover Details Overlay */}
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-sm">
                        <p className="mb-4 overflow-hidden text-sm leading-relaxed text-white/90 max-h-20">
                          {author.bio}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {author.expertise
                            .slice(0, 3)
                            .map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-xs text-white rounded-full bg-green-600/80 backdrop-blur-sm"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section
        className={`relative py-20 overflow-hidden transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/healthcare.jpg"
            alt="Health and Wellness Background"
            className="object-cover w-full h-full opacity-20"
          />
          <div
            className={`absolute inset-0 ${isDark ? "bg-black/70" : "bg-white/80"}`}
          ></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
                <h2
                  className={`text-4xl font-extrabold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {t("blogPage.cta.title")}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t("blogPage.cta.description")}
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    {t("blogPage.cta.startButton")}
                  </a>
                  <a
                    href="/about"
                    className={`inline-flex items-center rounded-lg px-8 py-4 font-semibold text-lg border-2 transition-all duration-300
                         hover:scale-105 hover:shadow-xl shadow-lg
                         ${
                           isDark
                             ? "bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                             : "bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                         }`}
                  >
                    {t("blogPage.cta.learnMoreButton")}
                  </a>
                </div>
              </ScrollAnimation>

              {/* Trust Indicators */}
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-4">
                <div className="flex items-center pt-8 space-x-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="User"
                      className="w-8 h-8 border-2 border-green-500 rounded-full"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User"
                      className="w-8 h-8 -ml-2 border-2 border-green-500 rounded-full"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="User"
                      className="w-8 h-8 -ml-2 border-2 border-green-500 rounded-full"
                    />
                  </div>
                  <div
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <span className="font-semibold text-green-500">50K+</span>{" "}
                    {t("blogPage.cta.trustIndicator")}
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Side - Image Gallery */}
            <div className="relative">
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-5">
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Image */}
                  <div className="relative col-span-2 group">
                    <img
                      src="/images/63B10.jpg"
                      alt="Health and Wellness"
                      className="object-cover w-full h-64 transition-transform duration-500 shadow-2xl rounded-2xl group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-500 bg-green-500/20 rounded-2xl group-hover:bg-green-500/10"></div>
                    <div className="absolute text-white bottom-4 left-4">
                      <div className="text-sm font-medium">
                        {t("blogPage.cta.imageLabels.mainImage.title")}
                      </div>
                      <div className="text-xs opacity-80">
                        {t("blogPage.cta.imageLabels.mainImage.subtitle")}
                      </div>
                    </div>
                  </div>

                  {/* Secondary Images */}
                  <div className="relative group">
                    <img
                      src="/images/63B8.jpg"
                      alt="Nutrition"
                      className="object-cover w-full h-32 transition-transform duration-500 shadow-lg rounded-xl group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-500 bg-black/30 rounded-xl group-hover:bg-black/20"></div>
                    <div className="absolute text-xs font-medium text-white bottom-2 left-2">
                      {t("blogPage.cta.imageLabels.nutrition")}
                    </div>
                  </div>

                  <div className="relative group">
                    <img
                      src="/images/63B9.jpg"
                      alt="Fitness"
                      className="object-cover w-full h-32 transition-transform duration-500 shadow-lg rounded-xl group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-colors duration-500 bg-black/30 rounded-xl group-hover:bg-black/20"></div>
                    <div className="absolute text-xs font-medium text-white bottom-2 left-2">
                      {t("blogPage.cta.imageLabels.fitness")}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
