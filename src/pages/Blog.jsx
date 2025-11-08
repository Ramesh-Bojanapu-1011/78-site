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
  const [activeCategory, setActiveCategory] = useState("all");
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
      image: "/images/78Bimg1.jpg",
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
      image: "/images/78Bimg2.jpg",
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
      image: "/images/78Bimg3.jpg",
      category: t("blogPage.blogPosts.boostMetabolism.category"),
      author: t("blogPage.blogPosts.boostMetabolism.author"),
      authorImage: "/images/63BT3.jpg",
      date: t("blogPage.blogPosts.boostMetabolism.date"),
      readTime: t("blogPage.blogPosts.boostMetabolism.readTime"),
      featured: true,
    },
  ];

  const categories = [
    { name: "all", label: t("blogPage.categories.all"), count: 3 },
    { name: "wellness", label: t("blogPage.categories.wellness"), count: 1 },
    {
      name: "motivation",
      label: t("blogPage.categories.motivation"),
      count: 1,
    },
    { name: "nutrition", label: t("blogPage.categories.nutrition"), count: 1 },
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
        className="relative overflow-hidden h-screen flex items-center justify-center text-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/78BlogV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <p className="text-sm tracking-widest text-green-300 font-medium">
              {t("blogPage.showcase.tagline")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
            <h1 className="mt-4 text-4xl font-extrabold mb-4 leading-tight text-white">
              {t("blogPage.showcase.title")}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              {t("blogPage.showcase.subtitle")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" stagger="scroll-stagger-4">
            <div className="mt-8 flex gap-4 justify-center">
              {/* Primary Button */}
              <a
                href="/services"
                className="btn-animate-strong inline-flex items-center rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#0A5950" }}
              >
                {t("blogPage.showcase.subscribeButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brands Section */}
      <section
        dir="ltr"
        className={`py-20 transition-colors duration-500 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
              <h2
                className={`text-4xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {t("blogPage.brands.title")}
              </h2>
            </ScrollAnimation>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {(() => {
              const brandNames =
                t("blogPage.brands.names", { returnObjects: true }) || [];
              const logos = [
                {
                  id: 1,
                  image: "/images/78l1.jpg",
                  alt: "Brand Logo 1",
                  name: brandNames[0] || "Mindful Wellness",
                },
                {
                  id: 2,
                  image: "/images/78l2.jpg",
                  alt: "Brand Logo 2",
                  name: brandNames[1] || "Natural Health",
                },
                {
                  id: 3,
                  image: "/images/78l3.jpg",
                  alt: "Brand Logo 3",
                  name: brandNames[2] || "Balance Life",
                },
                {
                  id: 4,
                  image: "/images/78l4.jpg",
                  alt: "Brand Logo 4",
                  name: brandNames[3] || "Growth Path",
                },
              ];
              return logos;
            })().map((logo, index) => {
              const staggerClasses = [
                "scroll-stagger-2",
                "scroll-stagger-3",
                "scroll-stagger-4",
                "scroll-stagger-5",
              ];
              const staggerClass = staggerClasses[index] || "scroll-stagger-2";

              return (
                <ScrollAnimation
                  key={logo.id}
                  animation="fade-in"
                  stagger={staggerClass}
                >
                  <div className="flex flex-col items-center justify-center">
                    {/* Brand Logo Image */}
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className={`w-auto h-24 object-contain mb-3 ${isDark ? "filter brightness-90" : ""}`}
                    />
                    {/* Brand Name Text */}
                    <p
                      className={`text-sm font-semibold text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {logo.name}
                    </p>
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
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
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
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
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
                        className={`text-2xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"} transition-colors duration-300`}
                        style={{ "--hover-color": "#0A5950" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#0A5950")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
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
                        className="inline-flex items-center gap-2 font-semibold text-base hover:gap-3 transition-all duration-300 group/btn"
                        style={{ color: "#0A5950" }}
                      >
                        <span>Read Now</span>
                        <span
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                          style={{ backgroundColor: "#0A5950" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#084540")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#0A5950")
                          }
                        >
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
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
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
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  title: t("blogPage.takeCharge.connect.title"),
                  description: t("blogPage.takeCharge.connect.description"),
                  image: "/images/78Bimg4.jpg",
                  icon: "🤝",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  id: 2,
                  title: t("blogPage.takeCharge.goNatural.title"),
                  description: t("blogPage.takeCharge.goNatural.description"),
                  image: "/images/78Bimg5.jpg",
                  icon: "🌿",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  id: 3,
                  title: t("blogPage.takeCharge.scheduleExercise.title"),
                  description: t(
                    "blogPage.takeCharge.scheduleExercise.description",
                  ),
                  image: "/images/78Bing6.jpg",
                  icon: "💪",
                  gradient: "from-teal-500 to-cyan-500",
                },
                {
                  id: 4,
                  title: t("blogPage.takeCharge.celebrateSuccess.title"),
                  description: t(
                    "blogPage.takeCharge.celebrateSuccess.description",
                  ),
                  image: "/images/78Bimg7.jpg",
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
                      {/* Image Background */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3
                          className={`text-xl font-bold mb-3 leading-tight transition-colors duration-300 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#0A5950")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "")
                          }
                        >
                          {item.title}
                        </h3>

                        {/* Decorative Line */}
                        <div
                          className="w-12 h-1 rounded-full mb-4 group-hover:w-20 transition-all duration-500"
                          style={{
                            background:
                              "linear-gradient(to right, #0A5950, transparent)",
                          }}
                        ></div>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {item.description}
                        </p>

                        {/* Read More Link */}
                        <div
                          className="mt-4 flex items-center gap-2 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#0A5950" }}
                        >
                          <span>Learn More</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute inset-0 rounded-3xl blur-xl bg-gradient-to-br ${item.gradient} opacity-20`}
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
        <div className="mx-auto max-w-6xl px-4">
          {/* Heading */}
          <div className="text-center mb-16">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t("blogPage.authors.sarah.name"),
                role: t("blogPage.authors.sarah.role"),
                bio: t("blogPage.authors.sarah.bio"),
                image: "/images/78Bt1.jpg",
                expertise: t("blogPage.authors.sarah.expertise", {
                  returnObjects: true,
                }),
                icon: "🥗",
              },
              {
                name: t("blogPage.authors.mike.name"),
                role: t("blogPage.authors.mike.role"),
                bio: t("blogPage.authors.mike.bio"),
                image: "/images/78Bt2.jpg",
                expertise: t("blogPage.authors.mike.expertise", {
                  returnObjects: true,
                }),
                icon: "🏋️‍♂️",
              },
              {
                name: t("blogPage.authors.emma.name"),
                role: t("blogPage.authors.emma.role"),
                bio: t("blogPage.authors.emma.bio"),
                image: "/images/78Bt3.jpg",
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
                  animation="fade-in"
                  stagger={staggerClass}
                >
                  <div
                    className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                      isDark ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    {/* Author Image */}
                    <div className="h-64 overflow-hidden">
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full object-cover"
                        style={
                          index === 1 ? { objectPosition: "center top" } : {}
                        }
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      {/* Name */}
                      <h3
                        className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {author.name}
                      </h3>

                      {/* Role */}
                      <p className="font-semibold" style={{ color: "#0A5950" }}>
                        {author.role}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url(/images/78BCTA.jpg)" }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4">
          <div className="text-center">
            {/* Content */}
            <div className="space-y-6">
              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-1">
                <h2 className="text-4xl font-extrabold leading-tight text-white">
                  {t("blogPage.cta.title")}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-2">
                <p className="text-lg leading-relaxed text-gray-200">
                  {t("blogPage.cta.description")}
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" stagger="scroll-stagger-3">
                <div className="flex justify-center">
                  <a
                    href="/contact"
                    className="btn-animate-strong inline-flex items-center rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    {t("blogPage.cta.startButton")}
                  </a>
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
