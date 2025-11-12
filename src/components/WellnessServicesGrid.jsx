import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#0A5950" }}
          >
            {t(eyebrow)}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-white">
            {t(title)}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t(subtitle)}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.titleKey}
              to={c.href}
              className="block overflow-hidden transition-all duration-300 bg-white shadow-lg group dark:bg-gray-800 rounded-3xl hover:shadow-2xl hover:-translate-y-2"
            >
              <article>
                <div className="relative overflow-hidden aspect-4/3">
                  <img
                    src={c.img}
                    alt={t(c.titleKey)}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hashtag Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className="inline-block px-4 py-2 text-sm font-bold text-white rounded-lg shadow-md"
                      style={{ backgroundColor: "#0A5950" }}
                    >
                      {c.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {t(c.titleKey)}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
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
