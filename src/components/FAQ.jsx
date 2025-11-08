import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0) // First FAQ opens by default
  const { t } = useTranslation()

  const faqQuestions = t('contact.faq.questions', { returnObjects: true })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            {t('contact.faq.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.faq.subtitle')}
          </p>
        </div>

        {/* Numbered FAQ List */}
        <div className="space-y-4">
          {(Array.isArray(faqQuestions) ? faqQuestions : []).map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg border-l-4 ${
                openIndex === index 
                  ? 'shadow-lg' 
                  : 'border-gray-300 dark:border-gray-700 shadow-md'
              } transition-all duration-300 hover:shadow-xl`}
              style={openIndex === index ? { borderColor: '#0d6664' } : {}}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                {/* Number Badge */}
                <div 
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  style={openIndex === index ? { backgroundColor: '#0d6664' } : {}}
                >
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 transition-transform duration-200" style={{ color: '#0d6664' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pl-20">
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
