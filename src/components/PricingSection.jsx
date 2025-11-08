import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function PricingSection() {
  const { t } = useTranslation()
  const [isMonthly, setIsMonthly] = useState(true)

  const plans = [
    {
      id: 'standard',
      name: t('pricingSection.plans.standard.name', { defaultValue: 'Standard Plan' }),
      subtitle: t('pricingSection.plans.standard.subtitle', { defaultValue: 'Best For Beginners' }),
      price: 120,
      features: [
        { text: t('pricingSection.features.coaching', { defaultValue: 'Coaching and Training' }), included: true },
        { text: t('pricingSection.features.obstacle', { defaultValue: 'Obstacle Standing' }), included: true },
        { text: t('pricingSection.features.advice', { defaultValue: 'Specific Advice Situation' }), included: true },
        { text: t('pricingSection.features.workbooks', { defaultValue: 'Includes all Workbooks' }), included: false },
        { text: t('pricingSection.features.individual', { defaultValue: 'Individual Coaching With Professioner' }), included: false },
      ],
      featured: false,
    },
    {
      id: 'personal',
      name: t('pricingSection.plans.personal.name', { defaultValue: 'Personal Plan' }),
      subtitle: t('pricingSection.plans.personal.subtitle', { defaultValue: 'Best For Beginners' }),
      price: 120,
      features: [
        { text: t('pricingSection.features.coaching', { defaultValue: 'Coaching and Training' }), included: true },
        { text: t('pricingSection.features.obstacle', { defaultValue: 'Obstacle Standing' }), included: true },
        { text: t('pricingSection.features.advice', { defaultValue: 'Specific Advice Situation' }), included: true },
        { text: t('pricingSection.features.workbooks', { defaultValue: 'Includes all Workbooks' }), included: true },
        { text: t('pricingSection.features.individual', { defaultValue: 'Individual Coaching With Professioner' }), included: true },
      ],
      featured: true,
    },
    {
      id: 'premium',
      name: t('pricingSection.plans.premium.name', { defaultValue: 'Premium Plan' }),
      subtitle: t('pricingSection.plans.premium.subtitle', { defaultValue: 'Best For Beginners' }),
      price: 120,
      features: [
        { text: t('pricingSection.features.coaching', { defaultValue: 'Coaching and Training' }), included: true },
        { text: t('pricingSection.features.obstacle', { defaultValue: 'Obstacle Standing' }), included: true },
        { text: t('pricingSection.features.advice', { defaultValue: 'Specific Advice Situation' }), included: true },
        { text: t('pricingSection.features.workbooks', { defaultValue: 'Includes all Workbooks' }), included: true },
        { text: t('pricingSection.features.individual', { defaultValue: 'Individual Coaching With Professioner' }), included: true },
      ],
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#0A5950' }}>
              {t('pricingSection.label', { defaultValue: 'OUR PRICING' })}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('pricingSection.title', { defaultValue: 'Choose The Best Plan' })}<br />
              {t('pricingSection.titleLine2', { defaultValue: 'That You Want' })}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              {t('pricingSection.description', { 
                defaultValue: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.' 
              })}
            </p>
          </div>
        </ScrollAnimation>

        {/* Toggle */}
        <ScrollAnimation animation="fade-up" delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-700 p-1">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  isMonthly
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                style={isMonthly ? { backgroundColor: '#0A5950' } : {}}
              >
                {t('pricingSection.monthly', { defaultValue: 'Monthly' })}
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  !isMonthly
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                style={!isMonthly ? { backgroundColor: '#0A5950' } : {}}
              >
                {t('pricingSection.annually', { defaultValue: 'Annually' })}
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.id} animation="fade-up" delay={0.1 * (index + 2)}>
              <div
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.featured
                    ? 'text-white shadow-2xl'
                    : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
                }`}
                style={plan.featured ? { backgroundColor: '#0A5950' } : {}}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-white px-4 py-1 rounded-full text-sm font-bold" style={{ color: '#0A5950' }}>
                      {t('pricingSection.popular', { defaultValue: 'POPULAR' })}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span
                      className={`text-5xl font-bold ${
                        plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`ml-2 text-lg ${
                        plan.featured ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      / {isMonthly ? t('pricingSection.month', { defaultValue: 'Monthly' }) : t('pricingSection.year', { defaultValue: 'Yearly' })}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                {plan.featured && <div className="h-px bg-white/20 mb-8" />}

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          feature.included
                            ? 'bg-white'
                            : plan.featured
                            ? 'bg-white/20'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      >
                        {feature.included && (
                          <Check className="w-4 h-4" style={{ color: '#0A5950' }} />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? plan.featured
                              ? 'text-white'
                              : 'text-gray-700 dark:text-gray-300'
                            : plan.featured
                            ? 'text-white/50'
                            : 'text-gray-400 dark:text-gray-600'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.featured
                      ? 'bg-white hover:bg-gray-200'
                      : 'text-white hover:bg-black'
                  }`}
                  style={plan.featured ? { color: '#0A5950' } : { backgroundColor: '#0A5950' }}
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.backgroundColor = 'black'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.backgroundColor = '#0A5950'
                    }
                  }}
                >
                  {t('pricingSection.startNow', { defaultValue: 'Start Now' })}
                  <svg
                    className="w-5 h-5"
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
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

