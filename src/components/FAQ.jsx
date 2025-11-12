import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ opens by default
  const { t } = useTranslation();

  const faqQuestions = t("contact.faq.questions", { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 transition-colors duration-500 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
            {t("contact.faq.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t("contact.faq.subtitle")}
          </p>
        </div>

        {/* Numbered FAQ List */}
        <div className="space-y-4">
          {(Array.isArray(faqQuestions) ? faqQuestions : []).map(
            (faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-lg border-l-4 ${
                  openIndex === index
                    ? "shadow-lg"
                    : "border-gray-300 dark:border-gray-700 shadow-md"
                } transition-all duration-300 hover:shadow-xl`}
                style={openIndex === index ? { borderColor: "#0d6664" } : {}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start w-full gap-4 p-6 text-left transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {/* Number Badge */}
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                      openIndex === index
                        ? "text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                    style={
                      openIndex === index ? { backgroundColor: "#0d6664" } : {}
                    }
                  >
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className="pr-8 text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="w-6 h-6 transition-transform duration-200"
                        style={{ color: "#0d6664" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-400 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="pt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
