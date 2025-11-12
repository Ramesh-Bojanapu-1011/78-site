import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export default function NutritionPlans() {
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
      text: "The mental health-focused meal plan changed my life! My anxiety has reduced significantly, I sleep better, and my mood is more stable. I never realized how much food affected my mental well-being until now.",
      name: "Sarah Parker",
      time: "2 weeks ago",
      image: "/images/78S4t1.jpg",
    },
    {
      text: "I struggled with depression for years. The brain-boosting foods and mood-stabilizing meal plan have been incredible. I feel more focused, energetic, and emotionally balanced than I have in years!",
      name: "Robert Kumar",
      time: "1 month ago",
      image: "/images/78S4t2.jpg",
    },
    {
      text: "The stress-reducing diet has been a game-changer for managing my work anxiety. I'm calmer, sleep through the night, and handle stressful situations so much better. Highly recommend!",
      name: "Maria Anderson",
      time: "3 weeks ago",
      image: "/images/78S4t3.jpg",
    },
    {
      text: "This program helped me understand the gut-brain connection. My cognitive function improved, brain fog disappeared, and I feel mentally sharper. The support throughout the journey was amazing!",
      name: "David Lee",
      time: "10 days ago",
      image: "/images/78S4t4.jpg",
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
          <source src="/78S3v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl whitespace-nowrap">
              Nourish Your Mind Through Nutrition
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="max-w-2xl mx-auto mt-6 text-base leading-relaxed text-gray-200 md:text-lg whitespace-nowrap">
              Discover how proper nutrition supports mental wellness, reduces
              stress, and enhances cognitive function
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="/contact"
                className="px-6 py-3 text-base font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: "#0A5950" }}
              >
                Start Your Mental Wellness Journey
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero - Nutrition Programs */}
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
                Mental Health Through Nutrition Programs
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p
                className={`text-base max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Support brain health, emotional balance, and stress reduction
                through specialized nutrition strategies.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Nutrition Program Types Grid */}
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brain-Boosting Foods */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  BRAIN-BOOSTING FOODS
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S4img1.jpg"
                      alt="Brain-Boosting Foods"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Nutrient-rich foods that enhance cognitive function, memory,
                  and focus. Our plans include omega-3 fatty acids,
                  antioxidants, and vitamins essential for optimal brain health
                  and mental clarity.
                </p>
              </div>
            </ScrollAnimation>

            {/* Mood-Stabilizing Nutrition */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  MOOD-STABILIZING NUTRITION
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S4img2.jpg"
                      alt="Mood-Stabilizing Nutrition"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Balanced meal plans that regulate blood sugar, boost
                  serotonin, and support emotional well-being. Combat anxiety,
                  depression, and mood swings through strategic nutritional
                  choices.
                </p>
              </div>
            </ScrollAnimation>

            {/* Stress-Reducing Diets */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  STRESS-REDUCING DIETS
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S4img3.jpg"
                      alt="Stress-Reducing Diets"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Anti-inflammatory foods and adaptogens that lower cortisol
                  levels and calm the nervous system. Reduce chronic stress and
                  anxiety through targeted nutrition therapy and mindful eating.
                </p>
              </div>
            </ScrollAnimation>

            {/* Sleep & Mental Recovery */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: "#0A5950" }}
                >
                  SLEEP & MENTAL RECOVERY
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src="/images/78S4img4.jpg"
                      alt="Sleep & Mental Recovery"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Nutrition plans optimized for quality sleep and mental
                  restoration. Foods rich in magnesium, tryptophan, and
                  melatonin precursors help regulate sleep cycles and enhance
                  mental recovery.
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
                Mental Health FAQs
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p
                className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Discover how food impacts mental health and find answers to your
                questions about the mind-body connection
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "How does nutrition affect mental health?",
                answer:
                  "Nutrition plays a crucial role in mental health by influencing brain chemistry, neurotransmitter production, and inflammation levels. Essential nutrients like omega-3 fatty acids, B vitamins, magnesium, and amino acids support serotonin and dopamine production, which regulate mood, anxiety, and stress responses. A balanced diet can significantly improve mental clarity, emotional stability, and overall psychological well-being.",
              },
              {
                question: "Can diet help with anxiety and depression?",
                answer:
                  "Yes! Studies show that specific dietary patterns can reduce symptoms of anxiety and depression. Anti-inflammatory foods, omega-3 rich fish, fermented foods for gut health, and complex carbohydrates that stabilize blood sugar all contribute to better mental health. Our plans include mood-boosting nutrients like tryptophan, magnesium, and B vitamins that support neurotransmitter balance and emotional regulation.",
              },
              {
                question:
                  "What foods are best for brain health and cognitive function?",
                answer:
                  "Brain-boosting foods include fatty fish rich in omega-3s, berries with antioxidants, leafy greens with folate, nuts and seeds for vitamin E, whole grains for steady glucose, and dark chocolate with flavonoids. These foods enhance memory, concentration, and mental processing speed while protecting against cognitive decline. We create personalized plans featuring these cognitive enhancers based on your preferences.",
              },
              {
                question:
                  "How long before I notice mental health improvements?",
                answer:
                  "Many clients report improved mood and energy within 1-2 weeks of dietary changes. Enhanced sleep quality often appears within the first week. More significant improvements in anxiety, depression symptoms, and cognitive function typically become noticeable after 4-6 weeks as neurotransmitter levels stabilize. Long-term mental health benefits continue to develop over 2-3 months with consistent nutrition.",
              },
              {
                question: "Can nutrition help with stress management?",
                answer:
                  "Absolutely! Strategic nutrition can significantly reduce stress by lowering cortisol levels and supporting adrenal function. We incorporate adaptogenic foods, magnesium-rich options, vitamin C sources, and anti-inflammatory ingredients that calm the nervous system. Regular meal timing prevents blood sugar crashes that exacerbate stress, while specific nutrients help your body's stress response system function optimally.",
              },
              {
                question:
                  "Do you work with people taking mental health medications?",
                answer:
                  "Yes! We work collaboratively with your mental health providers to ensure nutritional plans complement your treatment. Certain foods can interact with medications or affect their absorption, so we carefully consider your prescriptions. Our goal is to support your mental health treatment through optimal nutrition while respecting medical protocols. We never recommend stopping medications and always coordinate care with your healthcare team.",
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
          style={{ backgroundImage: "url('/images/78S4img5.jpg')" }}
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

      {/* Mental Health Benefits */}
      <section className={isDark ? "py-20 bg-black" : "py-20 bg-white"}>
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left side - Image */}
            <ScrollAnimation
              animation="slide-in-left"
              stagger="scroll-stagger-1"
            >
              <div className="relative">
                <div className="absolute inset-0 transform bg-linear-to-br from-gray-200 to-gray-300 rounded-3xl -rotate-6"></div>
                <img
                  src="/images/78S4img6.jpg"
                  alt="Mental Health Benefits"
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
                className="relative p-12 rounded-3xl"
                style={{ backgroundColor: "#0A5950" }}
              >
                <h2 className="mb-8 font-serif text-4xl text-white">
                  Mental Health Benefits
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
                      <strong>Reduced Anxiety & Stress:</strong> Experience
                      calmer nerves and lower stress levels through foods that
                      regulate cortisol production and support your nervous
                      system. Strategic nutrient timing helps maintain emotional
                      balance throughout challenging days.
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
                      <strong>Enhanced Mood & Emotional Stability:</strong>{" "}
                      Boost serotonin and dopamine levels naturally through
                      targeted nutrition. Say goodbye to mood swings and hello
                      to consistent emotional well-being with foods that support
                      neurotransmitter production.
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
                      <strong>Improved Cognitive Function:</strong> Sharpen your
                      memory, focus, and mental clarity with brain-nourishing
                      foods rich in omega-3s and antioxidants. Combat brain fog
                      and enhance mental processing speed for peak cognitive
                      performance.
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
                      <strong>Better Sleep & Mental Recovery:</strong> Achieve
                      restorative sleep through foods that support melatonin
                      production and circadian rhythm regulation. Wake up
                      refreshed with improved mental resilience and emotional
                      regulation for lasting wellness.
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
          style={{ backgroundImage: `url('/images/78S4CTA.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Transform Your Mental Health Through Food
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="max-w-2xl mx-auto mb-10 text-base text-white md:text-lg">
              Boost your well-being with personalized nutrition strategies.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 transform rounded-lg shadow-lg btn-animate-strong hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: "#0A5950" }}
              >
                Begin Your Mental Wellness Journey
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
