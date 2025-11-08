import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function BlogPost2() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false); // <-- define state

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

  return (
    <div
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {" "}
      <Navbar user={user} />
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/63B2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl px-4 py-16 mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-white/20">
                {t("blogPost2.hero.category")}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">
                {t("blogPost2.hero.readTime")}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t("blogPost2.hero.date")}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {t("blogPost2.hero.title")}
            </h1>
            <div className="flex items-center gap-4">
              <img
                src="/images/63BT2.jpg"
                alt={t("blogPost2.hero.author")}
                className="object-cover w-12 h-12 border-2 rounded-full border-white/30"
              />
              <div>
                <p className="font-semibold">{t("blogPost2.hero.author")}</p>
                <p className="text-sm text-white/80">
                  {t("blogPost2.hero.authorRole")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <img
                  src="/images/63B2.jpg"
                  alt="Ways to Get Motivated"
                  className="object-cover w-full h-64 mb-8 rounded-xl"
                />

                <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                  {t("blogPost2.content.intro")}
                </p>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.section1.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost2.content.section1.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost2.content.section2.title")}
                </h3>
                <ul className="mb-6 space-y-2">
                  {t("blogPost2.content.section2.benefits", {
                    returnObjects: true,
                  }).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-green-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.section3.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost2.content.section3.description")}
                </p>

                <div className="p-6 mb-8 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="mb-3 font-semibold text-green-800 dark:text-green-200">
                    {t("blogPost2.content.section3.checklistTitle")}
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    {t("blogPost2.content.section3.checklistItems", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.section4.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost2.content.section4.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost2.content.section4.subtitle")}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t("blogPost2.content.section4.tips", {
                    returnObjects: true,
                  }).map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-green-500">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.section5.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost2.content.section5.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost2.content.section5.subtitle")}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t("blogPost2.content.section5.strategies", {
                    returnObjects: true,
                  }).map((strategy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-green-500">•</span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.section6.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost2.content.section6.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost2.content.section6.subtitle")}
                </h3>
                <ul className="mb-8 space-y-2">
                  {t("blogPost2.content.section6.strategies", {
                    returnObjects: true,
                  }).map((strategy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-green-500">•</span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost2.content.conclusion.title")}
                </h2>
                <p className="mb-8">
                  {t("blogPost2.content.conclusion.mainText")}
                </p>
              </article>

              {/* Author Bio */}
              <div className="p-6 mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/63BT2.jpg"
                    alt={t("blogPost2.author.name")}
                    className="object-cover w-16 h-16 border-2 border-green-200 rounded-full dark:border-green-700"
                  />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      {t("blogPost2.author.name")}
                    </h3>
                    <p className="mb-3 text-gray-600 dark:text-gray-400">
                      {t("blogPost2.author.bio")}
                    </p>
                    <div className="flex gap-2">
                      {t("blogPost2.author.expertise", {
                        returnObjects: true,
                      }).map((expertise, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="p-6 bg-white border border-gray-200 dark:bg-gray-800 rounded-xl dark:border-gray-700">
                <h3 className="mb-4 text-lg font-bold">
                  {t("blogPost2.sidebar.relatedPosts")}
                </h3>
                <div className="space-y-4">
                  <div
                    className="cursor-pointer group"
                    onClick={() => navigate("/blog/1")}
                  >
                    <h4 className="font-semibold transition-colors group-hover:text-green-600">
                      {t("blogPost2.sidebar.post1.title")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("blogPost2.sidebar.post1.description")}
                    </p>
                  </div>
                  <div
                    className="cursor-pointer group"
                    onClick={() => navigate("/blog/3")}
                  >
                    <h4 className="font-semibold transition-colors group-hover:text-green-600">
                      {t("blogPost2.sidebar.post2.title")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("blogPost2.sidebar.post2.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
