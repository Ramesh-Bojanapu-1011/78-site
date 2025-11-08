import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import FAQ from "../components/FAQ";
import { useTranslation } from "react-i18next";

export default function OngoingSupport() {
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
      text: "Theta Healing has completely transformed my life! After just a few sessions, I released years of limiting beliefs and emotional trauma. I feel lighter, more confident, and aligned with my true purpose. The practitioner's guidance was exceptional!",
      name: "Sarah",
      time: "2 weeks ago",
      image: "/images/78S6t1.jpg",
    },
    {
      text: "I was skeptical at first, but Theta Healing exceeded all expectations. The deep meditative state allowed me to access insights I never knew existed. My anxiety has decreased significantly, and I've manifested amazing opportunities in my life!",
      name: "Michael",
      time: "1 week ago",
      image: "/images/78S6t2.jpg",
    },
    {
      text: "Theta Healing has been a game-changer for my physical and emotional health. I experienced profound healing from chronic pain and released deep-rooted fears. The energy work is truly magical and transformative!",
      name: "Jennifer",
      time: "3 weeks ago",
      image: "/images/78S6t3.jpg",
    },
    {
      text: "The Theta Healing workshops opened my eyes to the power of the subconscious mind. I've cleared limiting beliefs around abundance and relationships. My life has shifted in miraculous ways. I'm forever grateful for this healing modality!",
      name: "David",
      time: "1 month ago",
      image: "/images/78S6t4.jpg",
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
          <source src="/78S6v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white whitespace-nowrap">
              Theta Healing Wellness Events
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
              Transform your life through powerful Theta Healing meditation and
              energy work
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="/contact"
                className="btn-animate-strong rounded-lg px-6 py-3 font-bold text-base transition-all duration-300 text-white shadow-lg hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: "#0A5950" }}
              >
                Experience Theta Healing
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Hero - Wellness Event Types */}
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
                Our Theta Healing Programs
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p
                className={`text-base max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Transform your mind, body, and spirit through powerful energy
                healing.
              </p>
            </ScrollAnimation>
          </div>

          {/* Four Wellness Event Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Belief Work */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  BELIEF WORK
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S6img1.jpg"
                      alt="Belief Work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Identify and transform limiting beliefs, negative programs,
                  and subconscious blocks that hold you back from achieving your
                  full potential and living your best life.
                </p>
              </div>
            </ScrollAnimation>

            {/* Theta Meditation */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  THETA MEDITATION
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S6img2.jpg"
                      alt="Theta Meditation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Learn to access the theta brainwave state through guided
                  meditation, connecting with divine energy to facilitate deep
                  healing, intuition, and spiritual awakening.
                </p>
              </div>
            </ScrollAnimation>

            {/* Energy Healing */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  ENERGY HEALING
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S6img3.jpg"
                      alt="Energy Healing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Experience powerful energy healing sessions that work on
                  physical, emotional, and spiritual levels to release trauma,
                  restore balance, and promote holistic wellness.
                </p>
              </div>
            </ScrollAnimation>

            {/* Manifestation Training */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0A5950" }}
                >
                  MANIFESTATION
                </h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/78S6img4.jpg"
                      alt="Manifestation Training"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Master manifestation techniques using Theta Healing to
                  co-create your reality, attract abundance, achieve goals, and
                  align with your highest purpose and divine path.
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
                Find answers to common questions about Theta Healing and our
                programs
              </p>
            </ScrollAnimation>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What is Theta Healing and how does it work?",
                answer:
                  "Theta Healing is a powerful meditation technique that allows you to access the theta brainwave state to facilitate physical, emotional, and spiritual healing. By connecting with the Creator's energy, practitioners can identify and transform limiting beliefs, release negative patterns, and promote deep healing at the quantum level through focused intention and divine energy.",
              },
              {
                question:
                  "Do I need prior experience with meditation or energy healing?",
                answer:
                  "No prior experience is necessary! Theta Healing is accessible to everyone, whether you're a complete beginner or experienced in energy work. Our certified practitioners guide you through each session step-by-step, ensuring you feel comfortable and supported throughout your healing journey. All you need is an open mind and willingness to heal.",
              },
              {
                question: "How do I register for Theta Healing sessions?",
                answer:
                  "Registration is simple and convenient. You can book sessions through our website, contact us directly via phone or email, or schedule through our mobile app. We offer both individual sessions and group workshops. You'll receive confirmation, preparation instructions, and session details immediately upon booking.",
              },
              {
                question:
                  "What should I expect during a Theta Healing session?",
                answer:
                  "During a session, you'll be guided into a relaxed, meditative state while remaining fully conscious. The practitioner will work with you to identify limiting beliefs or blockages, then facilitate healing and transformation through divine energy. Sessions typically last 60-90 minutes. You may experience deep relaxation, emotional releases, insights, or energetic shifts during and after the session.",
              },
              {
                question: "Can Theta Healing help with physical health issues?",
                answer:
                  "Yes! Theta Healing addresses physical, emotional, mental, and spiritual wellness holistically. Many clients experience improvements in various health conditions, pain relief, and accelerated healing. However, Theta Healing complements but does not replace medical treatment. We always recommend consulting with healthcare providers for any medical concerns while using Theta Healing as a supportive modality.",
              },
              {
                question:
                  "Are Theta Healing sessions available for groups or online?",
                answer:
                  "Absolutely! We offer private individual sessions, group workshops, corporate wellness programs, and online sessions via video conferencing. Theta Healing works effectively both in-person and remotely, as energy transcends physical distance. We can customize programs for teams, families, or special groups. Contact us to discuss your specific needs and create a tailored healing experience.",
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
          style={{ backgroundImage: "url('/images/78S6img5.jpg')" }}
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
                  Theta Healing
                  <br />
                  clients say
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

      {/* Wellness Benefits */}
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
                  src="/images/78S6img6.jpg"
                  alt="Theta Healing Benefits"
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
                  Theta Healing Benefits
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
                      <strong>Deep Belief Transformation:</strong> Access and
                      reprogram limiting beliefs stored in your subconscious
                      mind at the theta level, releasing patterns that have held
                      you back and replacing them with empowering beliefs that
                      support your highest potential.
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
                      <strong>Quantum-Level Healing:</strong> Experience
                      profound healing that works on physical, emotional,
                      mental, and spiritual levels simultaneously. Theta Healing
                      addresses root causes of issues, not just symptoms,
                      creating lasting transformation and wellness.
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
                      <strong>Enhanced Manifestation:</strong> Learn to harness
                      the power of theta brainwaves to manifest your desires and
                      co-create your reality. Clear blocks to abundance, attract
                      opportunities, and align with your soul's purpose and
                      divine timing.
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
                      <strong>Spiritual Connection & Intuition:</strong> Deepen
                      your connection to the Creator's energy and your higher
                      self. Develop heightened intuition, spiritual awareness,
                      and inner wisdom that guides you toward your most
                      authentic and fulfilling life path.
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
          style={{ backgroundImage: `url('/images/78S6CTA.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Begin Your Theta Healing Journey Today
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10">
              Unlock your infinite potential through transformative healing.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="btn-animate-strong rounded-lg px-10 py-4 font-bold text-lg transition-all duration-300 text-white shadow-lg hover:shadow-2xl transform hover:scale-105"
                style={{ backgroundColor: "#0A5950" }}
              >
                Book Your Session
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
