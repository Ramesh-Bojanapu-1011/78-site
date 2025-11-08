import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import FAQ from "../components/FAQ";
import { useTranslation } from "react-i18next";

export default function WeightLossProgram() {
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const [openIndex, setOpenIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Testimonials data
  const testimonials = [
    {
      text: "I've lost 45 pounds in 6 months with this program! The personalized meal plans were easy to follow, and my trainer kept me motivated every step of the way. I finally feel confident and healthy. This program changed my life!",
      name: "Sarah Mitchell",
      time: "2 weeks ago",
      image: "/images/78S2t1.jpg",
    },
    {
      text: "After trying countless diets that didn't work, this program was a game-changer. The metabolic assessment helped identify why I struggled before. Down 32 pounds and maintaining it easily with the habits I learned!",
      name: "James Lee",
      time: "1 month ago",
      image: "/images/78S2t2.jpg",
    },
    {
      text: "The lifestyle coaching was incredible. I learned to manage emotional eating and develop a healthy relationship with food. Lost 28 pounds and gained so much confidence. The support team truly cares about your success!",
      name: "Maria Rodriguez",
      time: "3 weeks ago",
      image: "/images/78S2t3.jpg",
    },
    {
      text: "My wife and I joined together and we've both transformed our lives! Combined we've lost over 60 pounds. The fitness training was challenging but fun, and we love our new active lifestyle. Best decision we ever made!",
      name: "Alex Wong",
      time: "10 days ago",
      image: "/images/78S2t4.jpg",
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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/78S2v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white whitespace-nowrap">
              {t("spaTherapies.showcase.title")}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
              {t("spaTherapies.showcase.subtitle")}
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="/contact"
                className="btn-animate-strong rounded-lg px-6 py-3 font-bold text-base transition-all duration-300 text-white shadow-lg hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: "#0A5950" }}
              >
                {t("spaTherapies.showcase.connectButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero - Premium Spa Therapies */}
      <section
        id="hero"
        className={
          "relative overflow-hidden py-20 " +
          (isDark ? "bg-black text-white" : "bg-white text-gray-900")
        }
      >
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Title Section */}
          <div className="text-center mb-4">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h1
                className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Comprehensive Weight Loss Program
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p
                className={`text-base max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Achieve sustainable weight loss with personalized nutrition,
                fitness training, and lifestyle coaching designed for your
                success.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Weight Loss Program Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Personalized Nutrition Plans */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  PERSONALIZED NUTRITION
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S2Im1.jpg"
                      alt="Personalized Nutrition Plans"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Custom meal plans tailored to your body type, lifestyle, and
                  weight loss goals. Our nutritionists create balanced,
                  delicious diets that promote sustainable fat loss while
                  ensuring optimal energy and nutrition.
                </p>
              </div>
            </ScrollAnimation>

            {/* Fitness Training */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  FITNESS TRAINING
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/63S2.jpg"
                      alt="Fitness Training"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Expert-guided exercise programs combining cardio, strength
                  training, and flexibility workouts. Our certified trainers
                  design personalized routines that maximize calorie burn and
                  build lean muscle for lasting results.
                </p>
              </div>
            </ScrollAnimation>

            {/* Lifestyle Coaching */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  LIFESTYLE COACHING
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S2im3.jpg"
                      alt="Lifestyle Coaching"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Behavioral modification and motivation strategies to transform
                  your habits. Our coaches help you overcome emotional eating,
                  manage stress, improve sleep, and develop a positive mindset
                  for long-term success.
                </p>
              </div>
            </ScrollAnimation>

            {/* Metabolic Assessment */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  METABOLIC ASSESSMENT
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S2im4.jpg"
                      alt="Metabolic Assessment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Comprehensive body composition analysis and metabolic rate
                  testing. Advanced diagnostics help us understand your unique
                  metabolism, identify barriers to weight loss, and optimize
                  your program for maximum effectiveness.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={isDark ? "py-20 bg-black" : "py-20 bg-white"}>
        <div className="mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
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
                Find answers to common questions about our weight loss program
                and how it can help you achieve your goals
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question:
                  "How much weight can I expect to lose with your program?",
                answer:
                  "Weight loss results vary based on individual factors like starting weight, metabolism, and commitment level. On average, participants lose 1-2 pounds per week, which is considered healthy and sustainable. Many clients lose 15-30 pounds in the first 3 months. Our program focuses on sustainable fat loss, not quick fixes, ensuring long-term success and improved overall health.",
              },
              {
                question:
                  "What makes your weight loss program different from others?",
                answer:
                  "Our program takes a comprehensive, science-based approach combining personalized nutrition, supervised fitness training, behavioral coaching, and metabolic assessment. Unlike one-size-fits-all diets, we customize every aspect to your unique body, lifestyle, and goals. We provide ongoing support, accountability, and adjustments to ensure sustainable results without extreme restrictions or unrealistic expectations.",
              },
              {
                question:
                  "Do I need to follow a strict diet or give up my favorite foods?",
                answer:
                  "No extreme restrictions! We believe in sustainable, balanced eating. Your personalized meal plan includes foods you enjoy while creating a caloric deficit for weight loss. We teach portion control, smart food choices, and how to enjoy treats in moderation. The goal is to develop healthy eating habits you can maintain for life, not temporary deprivation.",
              },
              {
                question:
                  "How much time do I need to commit to exercise each week?",
                answer:
                  "We recommend 3-5 workout sessions per week, typically 30-60 minutes each. Your fitness plan is tailored to your current fitness level and schedule. Beginners start with manageable routines that gradually increase in intensity. Our trainers offer flexible options including gym workouts, home exercises, and outdoor activities to fit your lifestyle and preferences.",
              },
              {
                question:
                  "Will I gain the weight back after completing the program?",
                answer:
                  "Our program is designed for lasting results, not temporary fixes. We focus on building sustainable habits, teaching you proper nutrition, exercise techniques, and behavioral strategies to maintain your weight loss long-term. Many clients continue with maintenance programs, and our ongoing support ensures you have the tools and knowledge to keep the weight off permanently.",
              },
              {
                question:
                  "Is the program suitable for people with medical conditions?",
                answer:
                  "Yes, we work with individuals with various medical conditions including diabetes, hypertension, PCOS, and thyroid disorders. Our team includes nutritionists and trainers experienced in managing health conditions through weight loss. We coordinate with your healthcare provider when necessary and modify the program to ensure it's safe and effective for your specific health needs.",
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
      <section className="relative py-20 text-gray-900 transition-colors duration-500 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/78S2bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
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

                <h2 className="text-3xl font-bold text-white leading-tight">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
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
                className="flex transition-transform duration-[1200ms] ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                }}
              >
                {/* First Pair */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full">
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
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
                          className="w-12 h-12 rounded-full object-cover"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full">
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <div
                      key={index + 2}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
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
                          className="w-12 h-12 rounded-full object-cover"
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

      {/* Spa Benefits */}
      <section className={isDark ? "py-20 bg-black" : "py-20 bg-white"}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform -rotate-6"></div>
                <img
                  src="/images/78S2.jpg"
                  alt="Weight Loss Program Benefits"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation
              animation="slide-in-right"
              stagger="scroll-stagger-2"
            >
              <div
                className="relative rounded-3xl p-12"
                style={{ backgroundColor: "#0A5950" }}
              >
                <h2 className="text-4xl font-serif mb-8 text-white">
                  Weight Loss Program Benefits
                </h2>

                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white flex-shrink-0 mt-1"
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
                    <p className="text-white leading-relaxed">
                      <strong>Improved Health Markers:</strong> Our
                      comprehensive program helps reduce blood pressure, lower
                      cholesterol levels, and improve blood sugar control.
                      Experience significant improvements in cardiovascular
                      health, reduced risk of chronic diseases, and enhanced
                      overall physical wellness.
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white flex-shrink-0 mt-1"
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
                    <p className="text-white leading-relaxed">
                      <strong>Increased Energy & Vitality:</strong> Shed excess
                      weight and feel more energized throughout your day. Proper
                      nutrition and regular exercise boost your metabolism,
                      improve sleep quality, and enhance stamina, allowing you
                      to enjoy life with renewed vigor and enthusiasm.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white flex-shrink-0 mt-1"
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
                    <p className="text-white leading-relaxed">
                      <strong>Enhanced Mental Well-being:</strong> Weight loss
                      success boosts self-confidence and reduces anxiety and
                      depression. Regular exercise releases endorphins,
                      improving mood and mental clarity, while achieving your
                      goals provides a sense of accomplishment and empowerment.
                    </p>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start space-x-4">
                    <svg
                      className="w-6 h-6 text-white flex-shrink-0 mt-1"
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
                    <p className="text-white leading-relaxed">
                      <strong>Sustainable Lifestyle Changes:</strong> Learn
                      healthy habits that last a lifetime. Our program equips
                      you with knowledge about nutrition, exercise, and
                      behavioral strategies, ensuring you maintain your weight
                      loss and continue thriving long after completing the
                      program.
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url('/images/78S2CTA.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Start Your Weight Loss Journey Today
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10">
              Get personalized support and expert guidance to achieve your
              weight loss goals today.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="btn-animate-strong rounded-lg px-10 py-4 font-bold text-lg transition-all duration-300 text-white shadow-lg hover:shadow-2xl transform hover:scale-105"
                style={{ backgroundColor: "#0A5950" }}
              >
                Join Our Program
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
