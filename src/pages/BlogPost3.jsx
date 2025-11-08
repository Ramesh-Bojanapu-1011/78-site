import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function BlogPost3() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const user = getCurrentUser();

  return (
    <div className="text-black transition-colors bg-white dark:bg-gray-900 dark:text-white">
      <Navbar user={user} />

      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/63B3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl px-4 py-16 mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-white/20">
                {t("blogPost3.hero.category")}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">
                {t("blogPost3.hero.readTime")}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t("blogPost3.hero.date")}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {t("blogPost3.hero.title")}
            </h1>
            <div className="flex items-center gap-4">
              <img
                src="/images/63BT3.jpg"
                alt={t("blogPost3.hero.author")}
                className="object-cover w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{t("blogPost3.hero.author")}</p>
                <p className="text-sm text-white/80">
                  {t("blogPost3.hero.authorRole")}
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
                  src="/images/63B3.jpg"
                  alt="Boost Your Metabolism"
                  className="object-cover w-full h-64 mb-8 rounded-xl"
                />

                <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                  {t("blogPost3.content.intro")}
                </p>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section1.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section1.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section1.subtitle")}
                </h3>
                <ul className="mb-6 space-y-2">
                  {(Array.isArray(
                    t("blogPost3.content.section1.pitfalls", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section1.pitfalls", {
                        returnObjects: true,
                      })
                    : []
                  ).map((pitfall, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-indigo-500">✗</span>
                      <span>{pitfall}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section2.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section2.description")}
                </p>

                <div className="p-6 mb-8 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="mb-3 font-semibold text-green-800 dark:text-green-200">
                    {t("blogPost3.content.section2.matrixTitle")}
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(Array.isArray(
                      t("blogPost3.content.section2.matrixItems", {
                        returnObjects: true,
                      }),
                    )
                      ? t("blogPost3.content.section2.matrixItems", {
                          returnObjects: true,
                        })
                      : []
                    ).map((item, index) => (
                      <div key={index}>
                        <h5 className="font-semibold text-green-600">
                          {item.title}
                        </h5>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section2.factorsTitle")}
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  {(Array.isArray(
                    t("blogPost3.content.section2.factors", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section2.factors", {
                        returnObjects: true,
                      })
                    : []
                  ).map((factor, index) => (
                    <li key={index}>
                      <strong>{factor.title}:</strong> {factor.description}
                    </li>
                  ))}
                </ol>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section3.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section3.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section3.subtitle")}
                </h3>
                <ul className="mb-8 space-y-3">
                  {(Array.isArray(
                    t("blogPost3.content.section3.blocks", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section3.blocks", {
                        returnObjects: true,
                      })
                    : []
                  ).map((block, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-indigo-500">•</span>
                      <span>
                        <strong>{block.title}:</strong> {block.description}
                      </span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section4.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section4.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section4.subtitle")}
                </h3>
                <div className="grid gap-4 mb-8 md:grid-cols-2">
                  {(Array.isArray(
                    t("blogPost3.content.section4.tools", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section4.tools", {
                        returnObjects: true,
                      })
                    : []
                  ).map((tool, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg dark:border-gray-700"
                    >
                      <h4 className="mb-2 font-semibold">{tool.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section5.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section5.description")}
                </p>

                <div className="p-6 mb-8 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="mb-3 font-semibold text-green-800 dark:text-green-200">
                    {t("blogPost3.content.section5.boundariesTitle")}
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    {(Array.isArray(
                      t("blogPost3.content.section5.boundaries", {
                        returnObjects: true,
                      }),
                    )
                      ? t("blogPost3.content.section5.boundaries", {
                          returnObjects: true,
                        })
                      : []
                    ).map((boundary, index) => (
                      <li key={index}>• {boundary}</li>
                    ))}
                  </ul>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section5.expectationsTitle")}
                </h3>
                <p className="mb-6">
                  {t("blogPost3.content.section5.expectationsDescription")}
                </p>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section6.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section6.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section6.subtitle")}
                </h3>
                <ul className="mb-8 space-y-3">
                  {(Array.isArray(
                    t("blogPost3.content.section6.examples", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section6.examples", {
                        returnObjects: true,
                      })
                    : []
                  ).map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-indigo-500">•</span>
                      <span>
                        <strong>{example.title}:</strong> {example.description}
                      </span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section7.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section7.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section7.subtitle")}
                </h3>
                <ul className="mb-8 space-y-3">
                  {(Array.isArray(
                    t("blogPost3.content.section7.reasons", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section7.reasons", {
                        returnObjects: true,
                      })
                    : []
                  ).map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-indigo-500">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section8.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section8.description")}
                </p>

                <div className="p-6 mb-8 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="mb-3 font-semibold text-green-800 dark:text-green-200">
                    {t("blogPost3.content.section8.checklistTitle")}
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    {(Array.isArray(
                      t("blogPost3.content.section8.checklistItems", {
                        returnObjects: true,
                      }),
                    )
                      ? t("blogPost3.content.section8.checklistItems", {
                          returnObjects: true,
                        })
                      : []
                    ).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.section9.title")}
                </h2>
                <p className="mb-6">
                  {t("blogPost3.content.section9.description")}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("blogPost3.content.section9.subtitle")}
                </h3>
                <ul className="mb-8 space-y-3">
                  {(Array.isArray(
                    t("blogPost3.content.section9.strategies", {
                      returnObjects: true,
                    }),
                  )
                    ? t("blogPost3.content.section9.strategies", {
                        returnObjects: true,
                      })
                    : []
                  ).map((strategy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg text-indigo-500">•</span>
                      <span>
                        <strong>{strategy.title}:</strong>{" "}
                        {strategy.description}
                      </span>
                    </li>
                  ))}
                </ul>

                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("blogPost3.content.conclusion.title")}
                </h2>
                <p className="mb-8">
                  {t("blogPost3.content.conclusion.mainText")}
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {t("blogPost3.content.conclusion.finalText")}
                </p>
              </article>

              {/* Author Bio */}
              <div className="p-6 mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/63BT3.jpg"
                    alt={t("blogPost3.author.name")}
                    className="object-cover w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      {t("blogPost3.author.name")}
                    </h3>
                    <p className="mb-3 text-gray-600 dark:text-gray-400">
                      {t("blogPost3.author.bio")}
                    </p>
                    <div className="flex gap-2">
                      {(Array.isArray(
                        t("blogPost3.author.expertise", {
                          returnObjects: true,
                        }),
                      )
                        ? t("blogPost3.author.expertise", {
                            returnObjects: true,
                          })
                        : []
                      ).map((expertise, index) => (
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
                  {t("blogPost3.sidebar.relatedPosts")}
                </h3>
                <div className="space-y-4">
                  <div
                    className="cursor-pointer group"
                    onClick={() => navigate("/blog/1")}
                  >
                    <h4 className="font-semibold transition-colors group-hover:text-green-600">
                      {t("blogPost3.sidebar.post1.title")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("blogPost3.sidebar.post1.description")}
                    </p>
                  </div>
                  <div
                    className="cursor-pointer group"
                    onClick={() => navigate("/blog/2")}
                  >
                    <h4 className="font-semibold transition-colors group-hover:text-green-600">
                      {t("blogPost3.sidebar.post2.title")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("blogPost3.sidebar.post2.description")}
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
