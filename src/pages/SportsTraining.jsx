import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function SportsTraining() {
  const [user, setUser] = useState(null)
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))
  const [openIndex, setOpenIndex] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Testimonials data
  const testimonials = [
    {
      text: "Yoga has completely transformed my life. The practice has brought me inner peace, improved my flexibility, and helped me manage stress better. The instructors are incredibly knowledgeable and supportive!",
      name: "Michael Thompson",
      time: "2 weeks ago",
      image: "/images/78S1t1.jpg"
    },
    {
      text: "I love the holistic approach to yoga here. It's not just about the poses, but about breathing, meditation, and mindfulness. I feel more balanced and centered than ever before!",
      name: "Sarah Chen",
      time: "1 month ago",
      image: "/images/78S1t2.jpg"
    },
    {
      text: "The yoga programs are exceptional! I've gained strength, flexibility, and mental clarity. The blend of traditional wisdom with modern techniques makes every session transformative!",
      name: "David Rodriguez",
      time: "3 weeks ago",
      image: "/images/78S1t3.jpg"
    },
    {
      text: "Practicing yoga here has improved my overall wellbeing significantly. From reduced anxiety to better sleep and increased energy, the benefits are truly life-changing. Highly recommend!",
      name: "Emma Wilson",
      time: "2 months ago",
      image: "/images/78S1t4.jpg"
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
          <source src="/78S1v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white whitespace-nowrap">
              Discover Inner Peace & Strength Through Yoga
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
              Experience transformative yoga practices that harmonize mind, body, and spirit for complete wellness
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-6 flex gap-4 justify-center">
              <a href="/contact" className="btn-animate-strong rounded-lg px-6 py-3 font-bold text-base transition-all duration-300 text-white shadow-lg hover:shadow-xl whitespace-nowrap" style={{ backgroundColor: '#0A5950' }}>
                Begin Your Yoga Journey
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero - Sports Training Programs */}
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
                Comprehensive Yoga & Wellness Programs
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-base max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience ancient yogic practices designed to enhance your flexibility, mental clarity, and overall wellness through mindful movement and breathwork.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Yoga Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Hatha Yoga */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>HATHA YOGA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/63S31.jpg" alt="Hatha Yoga" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Build foundational strength and balance through traditional yoga postures, breathing techniques, and meditation for holistic mind-body wellness.
                </p>
              </div>
            </ScrollAnimation>

            {/* Vinyasa Flow */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>VINYASA FLOW</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/63S32.jpg" alt="Vinyasa Flow" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Experience dynamic flowing sequences that synchronize breath with movement, building cardiovascular endurance and mental focus.
                </p>
              </div>
            </ScrollAnimation>

            {/* Yin Yoga */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>YIN YOGA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/63S51.jpg" alt="Yin Yoga" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Deep stretching and restorative poses held longer to release tension, enhance flexibility, and promote deep relaxation and inner peace.
                </p>
              </div>
            </ScrollAnimation>

            {/* Meditation & Pranayama */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0A5950' }}>MEDITATION & PRANAYAMA</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/63S52.jpg" alt="Meditation & Pranayama" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Master breath control and meditation techniques to reduce stress, enhance mental clarity, and cultivate mindfulness for daily life.
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
                Find answers to common questions about our yoga programs and holistic wellness approach
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What types of yoga programs do you offer?",
                answer: "We offer diverse yoga styles including Hatha Yoga for foundational practice, Vinyasa Flow for dynamic movement, Yin Yoga for deep stretching and relaxation, and Meditation & Pranayama for breath control and mindfulness. Each program is tailored to your experience level and wellness goals, ensuring a personalized journey toward inner peace and physical vitality."
              },
              {
                question: "How does yoga integrate with holistic wellness?",
                answer: "Our yoga approach encompasses mind, body, and spirit integration. We combine asana practice with pranayama (breathwork), meditation, mindfulness techniques, and lifestyle guidance including nutrition and stress management. We believe true wellness comes from harmonizing all aspects of your being, not just physical flexibility."
              },
              {
                question: "Do I need prior yoga experience to join?",
                answer: "Absolutely not! Our yoga programs welcome everyone from complete beginners to advanced practitioners. We start with a personalized assessment to understand your current flexibility, strength, and wellness goals. Our experienced instructors provide modifications and progressions so you can practice safely and confidently at your own pace."
              },
              {
                question: "How long does it take to see results from yoga?",
                answer: "Many practitioners notice increased flexibility, reduced stress, and improved energy within 2-3 weeks of regular practice. Deeper transformations in strength, mental clarity, and overall wellbeing typically emerge within 2-3 months. Results vary based on practice frequency, dedication, and individual starting points, but every session brings benefits."
              },
              {
                question: "What makes your yoga programs different?",
                answer: "Unlike typical yoga studios, we emphasize the complete yogic lifestyle beyond just physical postures. Our certified instructors combine traditional yoga wisdom with modern wellness science, offering personalized guidance, therapeutic modifications, holistic nutrition advice, and comprehensive support for your entire wellness journey, creating lasting transformation."
              },
              {
                question: "How are yoga sessions structured?",
                answer: "Each session begins with centering and breath awareness, flows through carefully sequenced asanas (postures), incorporates pranayama (breathing exercises), and concludes with meditation and relaxation. Sessions last 60-90 minutes and are customized to your needs. We also offer guidance on developing a home practice and integrating yogic principles into daily life."
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
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/63H7.jpg')" }}>
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

      {/* Training Benefits */}
      <section className={isDark ? 'py-20 bg-black' : 'py-20 bg-white'}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="slide-in-left" stagger="scroll-stagger-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform -rotate-6"></div>
                <img 
                  src="/images/78S1.jpg" 
                  alt="Training Benefits" 
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-2">
              <div className="relative rounded-3xl p-12" style={{ backgroundColor: '#0A5950' }}>
                <h2 className="text-4xl font-serif mb-8 text-white">Yoga Practice Benefits</h2>
                
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Enhanced Flexibility & Strength:</strong> Develop greater range of motion, build lean muscle, and improve posture through mindful asana practice that balances strength and flexibility for optimal physical health.
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Stress Reduction & Mental Clarity:</strong> Calm your mind, reduce anxiety, and enhance focus through meditation, pranayama, and mindfulness practices that cultivate inner peace and emotional balance.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Improved Breathing & Energy:</strong> Master pranayama techniques that enhance lung capacity, increase vitality, and promote better oxygenation throughout your body for sustained energy and wellbeing.
                    </p>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <p className="text-white leading-relaxed">
                      <strong>Mind-Body-Spirit Connection:</strong> Experience holistic transformation that integrates physical practice with spiritual awareness, creating harmony between your inner self and outer life for complete wellness.
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url('/images/78S1CTA.jpg')` }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Begin Your Yoga Journey Today
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10">
              Transform your life with personalized yoga practices designed to harmonize your mind, body, and spirit.
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
