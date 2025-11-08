import { useTranslation } from "react-i18next";

const DEFAULT_ITEMS = [
  { labelKey: "wellnessProgress.items.bodyBalance", value: 62 },
  { labelKey: "wellnessProgress.items.dailyExercise", value: 88 },
  { labelKey: "wellnessProgress.items.physicalActivity", value: 75 },
  { labelKey: "wellnessProgress.items.nutritionPlan", value: 81 },
];

function ProgressBar({ label, value }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-white/90">
          {label}
        </span>
        <span className="font-semibold text-gray-600 dark:text-white/70">
          {value} %
        </span>
      </div>
      <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full dark:bg-white/10">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function WellnessProgress({
  title,
  description,
  items = DEFAULT_ITEMS,
}) {
  const { t } = useTranslation();
  const translatedTitle = title ?? t("wellnessProgress.title");
  const translatedDescription =
    description ?? t("wellnessProgress.description");
  return (
    <section
      id="wellness-progress"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid items-start max-w-6xl gap-12 px-4 mx-auto md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl dark:text-white">
            {translatedTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-white/70">
            {translatedDescription}
          </p>
        </div>
        <div className="space-y-6">
          {items.map((it) => (
            <ProgressBar
              key={it.labelKey}
              label={t(it.labelKey)}
              value={it.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
