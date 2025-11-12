import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export default function NutritionCounseling() {
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const [openIndex, setOpenIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const navigate = useNavigate();

  // Testimonials data
  const testimonials = [
    {
      text: "This nutrition platform has been a game-changer for my weight loss journey. The personalized meal plans are easy to follow, and my nutritionist's guidance keeps me motivated. I've lost 25 pounds in 3 months!",
      name: "Emma Rodriguez",
      time: "2 weeks ago",
      image: "/images/78S3t1.jpg",
    },
    {
      text: "As a diabetic, I struggled with meal planning. This platform and the expert consultations helped me manage my blood sugar levels effectively. The tracking features make it so easy to stay on top of my nutrition goals.",
      name: "James Chen",
      time: "3 weeks ago",
      image: "/images/78S3t2.jpg",
    },
    {
      text: "The nutritionists are incredibly knowledgeable and supportive. They customized my plan for PCOS management, and I've seen significant improvements in just 2 months. The mobile app makes tracking super convenient!",
      name: "Priya Sharma",
      time: "1 month ago",
      image: "/images/78S3t3.jpg",
    },
    {
      text: "I love how the platform combines technology with human expertise. The meal plans fit my busy lifestyle, and the video consultations are so helpful. I've gained muscle and lost fat exactly as planned!",
      name: "Michael Thompson",
      time: "3 weeks ago",
      image: "/images/78S3t4.jpg",
    },
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div
      className={
        isDark
          ? "bg-gray-900 text-white transition-colors"
          : "bg-white text-black transition-colors"
      }
    >
      <Navbar user={user} />

      {/* Showcase */}
      <section
        id="showcase"
        className={
          "relative overflow-hidden h-screen flex items-center justify-center text-center " +
          (isDark ? "" : "")
        }
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/78S4v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl whitespace-nowrap">
              Transform Your Health with Smart Nutrition
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="max-w-2xl mx-auto mt-6 text-base leading-relaxed text-gray-200 md:text-lg whitespace-nowrap">
              AI-powered meal planning meets expert nutritionist guidance for
              optimal wellness results
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="/contact"
                className="px-6 py-3 text-base font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: "#0A5950" }}
              >
                Start Your Nutrition Journey
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero - Nutrition Counseling Platform */}
      <section
        id="hero"
        className={
          "relative overflow-hidden py-20 " +
          (isDark ? "bg-black text-white" : "bg-white text-gray-900")
        }
      >
        <div className="relative px-4 mx-auto max-w-7xl">
          {/* Title Section */}
          <div className="mb-4 text-center">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h1
                className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Comprehensive Nutrition Counseling Platform
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p
                className={`text-base max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Transform your health with personalized nutrition plans and
                expert guidance.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Nutrition Platform Features Grid */}
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Personalized Meal Plans */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  PERSONALIZED MEAL PLANS
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S3img1.jpg"
                      alt="Personalized Meal Plans"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Get customized nutrition plans tailored to your specific
                  health goals, dietary preferences, and lifestyle. Our
                  AI-powered system creates meal plans that fit your unique
                  needs and taste preferences.
                </p>
              </div>
            </ScrollAnimation>

            {/* Nutrition Tracking */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  NUTRITION TRACKING
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S3img2.jpg"
                      alt="Nutrition Tracking"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Monitor your daily intake of calories, macros, vitamins, and
                  minerals with our intuitive tracking system. Visualize your
                  progress with detailed analytics and insights.
                </p>
              </div>
            </ScrollAnimation>

            {/* Expert Consultations */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  EXPERT CONSULTATIONS
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S3img3.jpg"
                      alt="Expert Consultations"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Connect with certified nutritionists and dietitians through
                  video consultations. Receive professional guidance, answer
                  your questions, and adjust your plans based on expert
                  recommendations.
                </p>
              </div>
            </ScrollAnimation>

            {/* Progress Monitoring */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  PROGRESS MONITORING
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S3img4.jpg"
                      alt="Progress Monitoring"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Track your wellness journey with comprehensive progress
                  reports, body measurements, weight trends, and health markers.
                  Celebrate milestones and stay motivated with visual progress
                  charts.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={isDark ? "py-20 bg-black" : "py-20 bg-white"}>
        <div className="max-w-6xl px-4 mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Frequently Asked Questions
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p
                className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Find answers to common questions about our nutrition counseling
                platform and services
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How does the nutrition counseling platform work?",
                answer:
                  "Our platform combines AI-powered meal planning with expert nutritionist guidance. After completing your health assessment, we create a personalized nutrition plan tailored to your goals, dietary preferences, and lifestyle. You'll have access to meal tracking tools, progress monitoring, video consultations with certified nutritionists, and a comprehensive food database to help you stay on track and achieve your wellness goals.",
              },
              {
                question:
                  "Can I customize my meal plans based on dietary restrictions?",
                answer:
                  "Absolutely! Our platform accommodates various dietary needs including vegetarian, vegan, keto, paleo, gluten-free, dairy-free, and more. During your initial assessment, you'll specify your dietary preferences, allergies, and restrictions. Our AI system and nutritionists will create meal plans that respect these requirements while ensuring you receive balanced, nutritious meals that support your health goals.",
              },
              {
                question: "How often can I consult with a nutritionist?",
                answer:
                  "Consultation frequency depends on your subscription plan. Our basic plan includes bi-weekly consultations, while premium plans offer weekly sessions. You can also schedule additional consultations as needed. Each session lasts 30-45 minutes and can be conducted via video call at your convenience. Our nutritionists are available to answer questions, adjust your meal plans, and provide ongoing support throughout your wellness journey.",
              },
              {
                question:
                  "What kind of progress tracking features are available?",
                answer:
                  "Our platform offers comprehensive tracking including daily calorie and macro intake, weight trends, body measurements, energy levels, and health markers. You'll see visual charts and graphs showing your progress over time. The system also tracks meal adherence, water intake, and provides insights on nutrient deficiencies. Weekly and monthly reports help you understand your patterns and celebrate your achievements.",
              },
              {
                question:
                  "Is the platform suitable for specific health conditions?",
                answer:
                  "Yes! Our nutritionists specialize in various health conditions including diabetes, PCOS, heart disease, digestive disorders, and more. During your consultation, inform us about any health conditions, and we'll create a medically-appropriate nutrition plan. However, our service complements but doesn't replace medical treatment. Always consult your healthcare provider for medical advice and inform them about your nutrition plans.",
              },
              {
                question: "Can I access the platform on mobile devices?",
                answer:
                  "Yes, our platform is fully responsive and accessible on smartphones, tablets, and desktop computers. We also offer dedicated mobile apps for iOS and Android with features like barcode scanning for easy food logging, meal reminders, water tracking, and quick access to your nutritionist. Sync your data across all devices and manage your nutrition plan wherever you are.",
              },
            ].map((faq, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                stagger={`scroll-stagger-${index + 4}`}
              >
                <div
                  className={`group relative ${isDark ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    openIndex === index
                      ? "scale-[1.02]"
                      : isDark
                        ? "border-gray-700"
                        : "border-gray-200"
                  }`}
                  style={{
                    borderColor: openIndex === index ? "#0A5950" : undefined,
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="w-full text-left"
                  >
                    <h3
                      className={`text-lg font-bold mb-3 pr-8 ${isDark ? "text-white" : "text-gray-900"} transition-colors`}
                      style={{
                        color: openIndex === index ? "#0A5950" : undefined,
                      }}
                    >
                      {faq.question}
                    </h3>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className={`leading-relaxed mt-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {faq.answer}
                    </p>
                  </div>

                  {/* Plus/Minus Icon */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className={`absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center ${
                      openIndex === index
                        ? "text-white"
                        : isDark
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gray-100 text-gray-500"
                    } transition-all duration-300 hover:scale-110`}
                    style={{
                      backgroundColor:
                        openIndex === index ? "#0A5950" : undefined,
                    }}
                  >
                    {openIndex === index ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
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
      <section className="relative py-20 overflow-hidden text-gray-900 transition-colors duration-500">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/78s3img5.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[300px,1fr] gap-12 items-start">
            {/* Left Side - Title and Navigation */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                {/* Quote Icon */}
                <div className="text-gray-300">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold leading-tight text-white">
                  What our
                  <br />
                  customers are
                  <br />
                  saying
                </h2>

                {/* Navigation Arrows */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handlePrevTestimonial}
                    className="flex items-center justify-center w-10 h-10 transition-all rounded-full hover:scale-110"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="flex items-center justify-center w-10 h-10 transition-all rounded-full hover:scale-110"
                    style={{ backgroundColor: "#0A5950" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Side - Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-1200"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                }}
              >
                {/* First Pair */}
                <div className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2">
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
                    >
                      <p className="mb-6 text-sm leading-relaxed text-gray-700">
                        {testimonial.text}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            style={{ color: "#0A5950" }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Pair */}
                <div className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2">
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <div
                      key={index + 2}
                      className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
                    >
                      <p className="mb-6 text-sm leading-relaxed text-gray-700">
                        {testimonial.text}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            style={{ color: "#0A5950" }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.time}
                          </p>
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

      {/* Platform Benefits */}
      <section className={isDark ? "py-20 bg-black" : "py-20 bg-white"}>
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-2">
            {/* Left side - Image */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="relative h-full max-h-[600px]">
                <div className="absolute inset-0 transform bg-linear-to-br from-gray-200 to-gray-300 rounded-3xl -rotate-6"></div>
                <img
                  src="/images/78S3img6.jpg"
                  alt="Nutrition Platform Benefits"
                  className="relative object-cover w-full h-full shadow-2xl rounded-3xl"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation
              animation="slide-in-right"
              stagger="scroll-stagger-2"
            >
              <div
                className="relative p-12 rounded-3xl"
                style={{ backgroundColor: "#0A5950" }}
              >
                <h2 className="mb-8 font-serif text-4xl text-white">
                  Nutrition Platform Benefits
                </h2>

                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 mt-1 text-white shrink-0"
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
                    <p className="leading-relaxed text-white">
                      <strong>AI-Powered Personalization:</strong> Experience
                      cutting-edge nutrition planning powered by artificial
                      intelligence. Our platform analyzes your unique health
                      profile, goals, and preferences to create optimal meal
                      plans that adapt as you progress, ensuring maximum
                      results.
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 mt-1 text-white shrink-0"
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
                    <p className="leading-relaxed text-white">
                      <strong>Expert Support Network:</strong> Access a team of
                      certified nutritionists, registered dietitians, and
                      wellness coaches available via video consultations. Get
                      personalized guidance, meal plan adjustments, and
                      professional answers to all your nutrition questions in
                      real-time.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 mt-1 text-white shrink-0"
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
                    <p className="leading-relaxed text-white">
                      <strong>Comprehensive Tracking System:</strong> Monitor
                      every aspect of your nutrition journey with intuitive
                      dashboards. Track calories, macros, micronutrients, water
                      intake, weight trends, body measurements, and receive
                      actionable insights to optimize your progress and stay
                      motivated.
                    </p>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 mt-1 text-white shrink-0"
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
                    <p className="leading-relaxed text-white">
                      <strong>Seamless Mobile Experience:</strong> Take your
                      nutrition journey anywhere with our feature-rich mobile
                      apps. Scan barcodes for instant food logging, set meal
                      reminders, access recipes, connect with your nutritionist,
                      and sync data across all devices for ultimate convenience.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={
          isDark ? "relative py-24 bg-gray-900" : "relative py-24 bg-white"
        }
      >
        <div
          className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/images/78S3CTA.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Start Your Nutrition Transformation Today
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="max-w-2xl mx-auto mb-10 text-base text-white md:text-lg">
              Get personalized meal plans and expert nutritionist guidance to
              achieve your health goals.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 transform rounded-lg shadow-lg btn-animate-strong hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: "#0A5950" }}
              >
                Get Your Free Consultation
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
