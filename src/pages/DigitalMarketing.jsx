import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import FAQ from '../components/FAQ'
import { useTranslation } from 'react-i18next'

export default function DigitalMarketing() {
  const [user, setUser] = useState(null)
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))
  const [openIndex, setOpenIndex] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Testimonials data
  const testimonials = [
    {
      text: "My wellness journey has been incredible. The personalized Ayurvedic treatments and mindful practices have transformed my health. Very good performance and results!",
      name: "Karan",
      time: "3 weeks ago",
      image: "/images/78S5t1.jpg"
    },
    {
      text: "I love the holistic approach and the customer service is excellent. They respond in a timely manner with personalized wellness plans and comprehensive support.",
      name: "Catherine",
      time: "10 days ago",
      image: "/images/78S5t2.jpg"
    },
    {
      text: "Visited for yoga therapy sessions and was particularly impressed with the peaceful environment and expert guidance. The entire team went over and beyond. Very satisfied!",
      name: "Priya",
      time: "2 weeks ago",
      image: "/images/78S5t3.jpg"
    },
    {
      text: "The Ayurvedic treatments here are authentic and effective. I've seen remarkable improvements in my overall well-being and energy levels. Highly recommend!",
      name: "Rajesh",
      time: "1 month ago",
      image: "/images/78S5t4.jpg"
    }
  ]

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? 1 : 0))
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? 1 : 0))
  }

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser()
        setUser(currentUser)
      } else {
        navigate('/login')
      }
    }
    checkAuth()
  }, [navigate])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  if (!user) {
    return null
  }

  return (
    <div className={isDark ? 'bg-gray-900 text-white transition-colors' : 'bg-white text-black transition-colors'}>
      <Navbar user={user} />


      {/* Showcase */}
<section
  id="showcase"
  className={
    'relative overflow-hidden h-screen flex items-center justify-center text-center ' +
    (isDark ? '' : '')
  }
>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/78S5v.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white whitespace-nowrap">
        Authentic Ayurvedic Healing
      </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
      <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
        Experience traditional Ayurvedic treatments for holistic wellness and natural healing
      </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
      <div className="mt-6 flex gap-4 justify-center">
              <a href="/contact" className="btn-animate-strong rounded-lg px-6 py-3 font-bold text-base transition-all duration-300 text-white shadow-lg hover:shadow-xl whitespace-nowrap" style={{ backgroundColor: '#0A5950' }}>
          Start Your Healing Journey
        </a>
      </div>
    </ScrollAnimation>
  </div>
</section>
      
     
      {/* Hero - Traditional Ayurvedic Treatment Therapies */}
<section
  id="hero"
  className={
          'relative overflow-hidden py-20 ' +
          (isDark ? 'bg-black text-white' : 'bg-white text-gray-900')
        }
      >
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Title Section */}
          <div className="text-center mb-4">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Traditional Ayurvedic Treatment Therapies
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-base max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience authentic Ayurvedic healing to restore balance and wellness.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Ayurvedic Treatment Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Abhyanga */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>ABHYANGA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/78S5img1.jpg" alt="Abhyanga Therapy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  A traditional full-body massage with warm herbal oils that deeply nourishes tissues, improves circulation, eliminates toxins, and promotes deep relaxation and rejuvenation.
                </p>
              </div>
            </ScrollAnimation>

            {/* Shirodhara */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>SHIRODHARA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/78S5img2.jpg" alt="Shirodhara Therapy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  A calming therapy where warm oil flows continuously over the forehead, inducing profound relaxation, reducing stress, anxiety, and mental fatigue while enhancing mental clarity.
                </p>
              </div>
            </ScrollAnimation>

            {/* Panchakarma */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>PANCHAKARMA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/78S5img3.jpg" alt="Panchakarma Therapy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  A comprehensive detoxification program using five cleansing procedures to eliminate deep-seated toxins, restore dosha balance, and rejuvenate the entire body system.
                </p>
              </div>
            </ScrollAnimation>

            {/* Nasya */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>NASYA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/78S5img4.jpg" alt="Nasya Therapy" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  A nasal therapy involving medicated oil administration to cleanse sinuses, improve respiratory health, enhance mental clarity, and treat headaches and neurological conditions.
                </p>
              </div>
            </ScrollAnimation>
          </div>
  </div>
</section>




      {/* FAQ */}
      <section className={isDark ? 'py-20 bg-black' : 'py-20 bg-white'}>
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Frequently Asked Questions
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Find answers to common questions about our Ayurvedic treatments and wellness programs
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What are the three Doshas in Ayurveda?",
                answer: "Ayurveda identifies three fundamental bio-energies called Doshas: Vata (air and space), Pitta (fire and water), and Kapha (earth and water). These doshas govern all physical and mental processes in our body. Understanding your unique dosha constitution helps us create personalized treatment plans for optimal health and balance."
              },
              {
                question: "What is Panchakarma therapy?",
                answer: "Panchakarma is a comprehensive Ayurvedic detoxification and rejuvenation program consisting of five therapeutic procedures. It includes Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enema), Nasya (nasal administration), and Raktamokshana (bloodletting). This deep cleansing removes toxins from the body's tissues and restores balance to the doshas."
              },
              {
                question: "How long does an Ayurvedic treatment take to show results?",
                answer: "Results vary based on the condition being treated and individual constitution. Acute conditions may show improvement within 2-4 weeks, while chronic ailments typically require 3-6 months of consistent treatment. Ayurveda focuses on addressing root causes rather than just symptoms, which ensures lasting healing and prevention of recurrence."
              },
              {
                question: "Are Ayurvedic medicines safe and natural?",
                answer: "Yes, Ayurvedic medicines are derived from natural herbs, minerals, and plant extracts that have been used safely for thousands of years. All our formulations are prepared according to classical Ayurvedic texts under expert guidance. We use high-quality, tested ingredients and follow strict quality standards to ensure safety and effectiveness."
              },
              {
                question: "What conditions can be treated with Ayurveda?",
                answer: "Ayurveda effectively treats a wide range of conditions including digestive disorders, stress and anxiety, arthritis, skin diseases, respiratory issues, hormonal imbalances, chronic pain, diabetes, hypertension, and lifestyle disorders. It's particularly effective for chronic conditions that require holistic healing and long-term wellness management."
              },
              {
                question: "What should I expect during my first Ayurvedic consultation?",
                answer: "During your first visit, our experienced Ayurvedic practitioner will conduct a detailed consultation including Prakriti (body constitution) analysis through pulse diagnosis (Nadi Pariksha), tongue examination, and lifestyle assessment. We'll discuss your health concerns, dietary habits, and daily routine to create a personalized treatment plan including herbal medicines, diet recommendations, and lifestyle modifications. The initial session typically lasts 60-90 minutes."
              }
            ].map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-in" stagger={`scroll-stagger-${index + 4}`}>
                <div 
                  className={`group relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    openIndex === index 
                      ? 'scale-[1.02]' 
                      : isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}
                  style={{ borderColor: openIndex === index ? '#0A5950' : undefined }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full text-left"
                  >
                    <h3 className={`text-lg font-bold mb-3 pr-8 ${isDark ? 'text-white' : 'text-gray-900'} transition-colors`} style={{ color: openIndex === index ? '#0A5950' : undefined }}>
                      {faq.question}
                    </h3>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className={`leading-relaxed mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {faq.answer}
                    </p>
                  </div>

                  {/* Plus/Minus Icon */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className={`absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center ${
                      openIndex === index 
                        ? 'text-white' 
                        : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                    } transition-all duration-300 hover:scale-110`}
                    style={{ backgroundColor: openIndex === index ? '#0A5950' : undefined }}
                  >
                    {openIndex === index ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="relative py-20 text-gray-900 transition-colors duration-500 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/78S5img5.jpg')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[300px,1fr] gap-12 items-start">
            {/* Left Side - Title and Navigation */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                {/* Quote Icon */}
                <div className="text-gray-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold text-white leading-tight">
                  What our<br/>customers are<br/>saying
                </h2>

                {/* Navigation Arrows */}
                <div className="flex gap-4 pt-4">
                  <button onClick={handlePrevTestimonial} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: '#0A5950' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={handleNextTestimonial} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: '#0A5950' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Side - Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-[1200ms] ease-in-out"
                style={{ 
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`
                }}
              >
                {/* First Pair */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full">
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {testimonial.text}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" style={{ color: '#0A5950' }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500">{testimonial.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Pair */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full">
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <div key={index + 2} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {testimonial.text}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" style={{ color: '#0A5950' }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500">{testimonial.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Benefits */}
      <section className={isDark ? 'py-20 bg-black' : 'py-20 bg-white'}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform -rotate-6"></div>
                <img 
                  src="/images/78S5img6.jpg" 
                  alt="Healing Benefits" 
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-2">
              <div className="relative rounded-3xl p-12" style={{ backgroundColor: '#0A5950' }}>
                <h2 className="text-4xl font-serif mb-8 text-white">Ayurvedic Healing Benefits</h2>
                
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Holistic Balance:</strong> Ayurvedic treatments work to balance your body's three doshas (Vata, Pitta, and Kapha), promoting harmony between mind, body, and spirit for complete wellness and vitality.
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Natural Detoxification:</strong> Experience Panchakarma therapies that cleanse toxins from deep within your tissues, rejuvenating your entire system and boosting natural immunity through time-tested herbal remedies.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Stress Relief & Mental Clarity:</strong> Ancient Ayurvedic practices including meditation, breathing exercises, and therapeutic massages help reduce stress, enhance mental clarity, and restore emotional balance.
                    </p>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Personalized Healing:</strong> Every Ayurvedic treatment is customized to your unique constitution and health needs, ensuring targeted healing that addresses the root cause rather than just symptoms.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={isDark ? 'relative py-24 bg-gray-900' : 'relative py-24 bg-white'}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url('/images/78S5CTA.jpg')` }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Begin Your Ayurvedic Healing Journey Today
            </h2>
    </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10">
              Transform your health with personalized Ayurvedic care.
            </p>
    </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
      <div className="flex justify-center">
              <button onClick={() => navigate('/contact')} className="btn-animate-strong rounded-lg px-10 py-4 font-bold text-lg transition-all duration-300 text-white shadow-lg hover:shadow-2xl transform hover:scale-105" style={{ backgroundColor: '#0A5950' }}>
                Book Your Consultation
        </button>
      </div>
    </ScrollAnimation>
  </div>
</section>

      <Footer />
    </div>
  )
}
