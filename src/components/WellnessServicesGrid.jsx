import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CARDS = [
  {
    titleKey: "wellnessServices.yoga.title",
    descriptionKey: "wellnessServices.yoga.description",
    tag: "#Yoga",
    img: "/images/78Simg1.jpg",
    href: "/services/yoga",
  },
  {
    titleKey: "wellnessServices.weightLoss.title",
    descriptionKey: "wellnessServices.weightLoss.description",
    tag: "#WeightLoss",
    img: "/images/78Simg2.jpg",
    href: "/services/weight-loss-program",
  },
  {
    titleKey: "wellnessServices.nutritionCounseling.title",
    descriptionKey: "wellnessServices.nutritionCounseling.description",
    tag: "#Diet",
    img: "/images/78Simg3.jpg",
    href: "/services/nutrition-counseling",
  },
  {
    titleKey: "wellnessServices.mentalHealth.title",
    descriptionKey: "wellnessServices.mentalHealth.description",
    tag: "#MentalHealth",
    img: "/images/78Simg4.jpg",
    href: "/services/mental-health",
  },
  {
    titleKey: "wellnessServices.ayurvedicTreatments.title",
    descriptionKey: "wellnessServices.ayurvedicTreatments.description",
    tag: "#Treatments",
    img: "/images/78Simg5.jpg",
    href: "/services/weight-loss-program",
  },
  {
    titleKey: "wellnessServices.thetaHealing.title",
    descriptionKey: "wellnessServices.thetaHealing.description",
    tag: "#Healing",
    img: "/images/78Simg6.jpg",
    href: "/services/theta-healing",
  },
];

export default function WellnessServicesGrid({
  eyebrow = "wellnessServices.eyebrow",
  title = "wellnessServices.title",
  subtitle = "wellnessServices.subtitle",
  cards = CARDS,
}) {
  const { t } = useTranslation();

  return (
    <section id="wellness-grid" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-widest font-semibold"
            style={{ color: "#0A5950" }}
          >
            {t(eyebrow)}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {t(title)}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(subtitle)}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.titleKey}
              to={c.href}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={t(c.titleKey)}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hashtag Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className="inline-block px-4 py-2 text-white text-sm font-bold rounded-lg shadow-md"
                      style={{ backgroundColor: "#0A5950" }}
                    >
                      {c.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(c.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(c.descriptionKey)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
