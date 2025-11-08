import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getCurrentUser, isAuthenticated } from "../utils/auth";

export default function Home2() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
    // Theme detection
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [navigate]);

  const user = getCurrentUser();

  // Testimonials data array
  const testimonials = [
    {
      name: t("home2.testimonials.clients.sophia.name", "Darrell Steward"),
      role: t("home2.testimonials.clients.sophia.role", "Developer"),
      content: t(
        "home2.testimonials.clients.sophia.content",
        "I can't tell you how amazing this process has been for me. I've come so far since we first started working together—I barely recognize the woman I was—and I owe a great deal of that to you.",
      ),
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: t("home2.testimonials.clients.david.name", "David Miller"),
      role: t("home2.testimonials.clients.david.role", "Nutritionist"),
      content: t(
        "home2.testimonials.clients.david.content",
        "I have really enjoyed the course and the course content in doing my Advanced Certificate in Nutritional Counselling. The support that I received made it all the more easier to complete.",
      ),
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: t("home2.testimonials.clients.aisha.name", "Aisha Rahman"),
      role: t("home2.testimonials.clients.aisha.role", "Wellness Coach"),
      content: t(
        "home2.testimonials.clients.aisha.content",
        "The personalized approach and continuous support have been instrumental in my journey. I've achieved goals I never thought possible and feel healthier than ever before.",
      ),
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content:
        "The holistic approach to health and wellness has transformed not just my body, but my entire lifestyle. I've learned sustainable habits that I'll carry with me forever.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      content:
        "Balancing work and health was always a challenge. The customized wellness program helped me find that balance and I've never felt more energized and focused.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Emma Williams",
      role: "Yoga Instructor",
      content:
        "As a yoga instructor myself, I appreciate the depth of knowledge and genuine care. The program complemented my practice perfectly and took my wellness to the next level.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div
      className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <Navbar user={user} />

      {/* 1 Showcase */}
      <section
        id="showcase"
        className="relative flex items-center justify-center h-screen overflow-hidden text-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/78H2v.mp4" type="video/mp4" />
          {t("common.videoNotSupported")}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            className="text-4xl font-extrabold leading-tight text-white whitespace-nowrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("home2.showcase.title")}
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto mt-6 text-xl text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("home2.showcase.subtitle")}
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary Button */}
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
              style={{ backgroundColor: "#0A5950" }}
            >
              {t("home2.showcase.exploreButton")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choosing Health Coach Section */}
      <section
        id="why-choose-health-coach"
        className={`py-24 transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={`text-5xl font-extrabold mb-6 leading-tight ${
                isDark ? "text-white" : "text-black"
              }`}
              style={{ color: isDark ? "white" : "#0A5950" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("home2.whyChooseHealthCoach.title")}
            </motion.h2>

            <motion.p
              className={`max-w-4xl mx-auto text-lg leading-relaxed mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("home2.whyChooseHealthCoach.subtitle")}
            </motion.p>

            {/* Start Now Button */}
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "#0A5950" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home2.whyChooseHealthCoach.startButton")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Three Column Images */}
          <div className="grid max-w-5xl gap-8 mx-auto mt-16 md:grid-cols-3">
            {[
              {
                image: "/images/78H2img1.jpg",
                title: t(
                  "home2.whyChooseHealthCoach.services.nutritionStrategies.title",
                ),
              },
              {
                image: "/images/78H2img2.jpg",
                title: t(
                  "home2.whyChooseHealthCoach.services.workoutRoutines.title",
                ),
              },
              {
                image: "/images/78H2img3.jpg",
                title: t(
                  "home2.whyChooseHealthCoach.services.supportMotivation.title",
                ),
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-lg group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Healthy Body Coaching Section */}
      <section
        id="healthy-body-coaching"
        className="relative py-24"
        style={{
          backgroundColor: "#0A5950",
        }}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* About Us Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-semibold tracking-wider uppercase text-white/90">
                  {t("home2.healthyBodyCoaching.badge")}
                </span>
              </div>

              {/* Main Title */}
              <h2 className="mb-6 text-5xl font-extrabold leading-tight text-white">
                {t("home2.healthyBodyCoaching.title")}
              </h2>

              {/* Description */}
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                {t("home2.healthyBodyCoaching.description")}
              </p>

              {/* Progress Bars */}
              <div className="space-y-6">
                {/* Personal Growth */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.personalGrowth.label",
                      )}
                    </span>
                    <span className="font-bold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.personalGrowth.value",
                      )}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: "96%",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "96%" }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Life-Work Balance */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.lifeWorkBalance.label",
                      )}
                    </span>
                    <span className="font-bold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.lifeWorkBalance.value",
                      )}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: "82%",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Stress Management */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.stressManagement.label",
                      )}
                    </span>
                    <span className="font-bold text-white">
                      {t(
                        "home2.healthyBodyCoaching.progress.stressManagement.value",
                      )}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: "76%",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "76%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image Grid */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* First Image */}
              <motion.div
                className="overflow-hidden shadow-2xl rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/78H2img4.jpg"
                  alt="Wellness therapy"
                  className="object-cover w-full h-64"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="overflow-hidden shadow-2xl rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/78H2img5.jpg"
                  alt="Yoga and meditation"
                  className="object-cover w-full h-64"
                />
              </motion.div>

              {/* Third Image */}
              <motion.div
                className="overflow-hidden shadow-2xl rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/78H2img6.jpg"
                  alt="Sound healing"
                  className="object-cover w-full h-64"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holistic Health & Wellness Section */}
      <section
        id="holistic-wellness"
        className={`py-24 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              className="block mb-4 text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#0A5950" }}
            >
              {t("home2.holisticWellness.badge", "HOLISTIC APPROACH")}
            </span>
            <h2
              className={`text-5xl font-extrabold mb-6 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t(
                "home2.holisticWellness.title",
                "Transform Your Health & Wellness Journey",
              )}
            </h2>
            <p
              className={`max-w-3xl mx-auto text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t(
                "home2.holisticWellness.subtitle",
                "Experience comprehensive wellness solutions that nurture your body, mind, and spirit. Our integrated approach ensures lasting transformation.",
              )}
            </p>
          </motion.div>

          {/* Wellness Benefits Grid */}
          <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: t(
                  "home2.holisticWellness.benefits.physical.title",
                  "Physical Vitality",
                ),
                description: t(
                  "home2.holisticWellness.benefits.physical.description",
                  "Build strength, endurance, and optimal body function through personalized fitness programs.",
                ),
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: t(
                  "home2.holisticWellness.benefits.mental.title",
                  "Mental Clarity",
                ),
                description: t(
                  "home2.holisticWellness.benefits.mental.description",
                  "Develop mindfulness, reduce stress, and enhance cognitive performance with proven techniques.",
                ),
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: t(
                  "home2.holisticWellness.benefits.nutrition.title",
                  "Nutritional Balance",
                ),
                description: t(
                  "home2.holisticWellness.benefits.nutrition.description",
                  "Fuel your body with customized nutrition plans designed for your unique needs and goals.",
                ),
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: t(
                  "home2.holisticWellness.benefits.emotional.title",
                  "Emotional Wellness",
                ),
                description: t(
                  "home2.holisticWellness.benefits.emotional.description",
                  "Cultivate emotional resilience and inner peace through holistic wellness practices.",
                ),
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className={`p-8 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-gradient-to-br from-gray-50 to-white hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-4" style={{ color: "#0A5950" }}>
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            className="relative p-12 overflow-hidden rounded-3xl"
            style={{ backgroundColor: "#0A5950" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 grid gap-12 md:grid-cols-3">
              {[
                {
                  number: "1000+",
                  label: t(
                    "home2.holisticWellness.stats.clients",
                    "Happy Clients",
                  ),
                },
                {
                  number: "95%",
                  label: t(
                    "home2.holisticWellness.stats.success",
                    "Success Rate",
                  ),
                },
                {
                  number: "15+",
                  label: t(
                    "home2.holisticWellness.stats.experience",
                    "Years Experience",
                  ),
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-3 text-5xl font-extrabold text-white">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full bg-white/5"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 -translate-x-24 translate-y-24 rounded-full bg-white/5"></div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/services"
              className="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold text-white transition-all duration-300 rounded-full shadow-2xl"
              style={{ backgroundColor: "#0A5950" }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home2.holisticWellness.cta", "Start Your Wellness Journey")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - "What Our Fantastic Clients Say" */}
      <section
        id="testimonials"
        className="py-24"
        style={{ backgroundColor: "#0A5950" }}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left Side - Header & Rating */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-semibold tracking-wider uppercase text-white/90">
                  {t("home2.testimonials.badge", "OUR HAPPY CLIENTS")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mb-6 text-5xl font-extrabold leading-tight text-white">
                {t(
                  "home2.testimonials.heading",
                  "Hear What Our Global Clients Say",
                )}
              </h2>

              {/* Description */}
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                {t(
                  "home2.testimonials.description",
                  "A selection of testimonials from Heali clients. Read what my clients say about our health coach, workshop, retreats and healing services.",
                )}
              </p>

              {/* Rating Display */}
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-6xl font-bold text-white">4.9</span>
                  <span className="mb-2 text-2xl text-white/80">/5</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-white/70">
                  {t("home2.testimonials.reviewsCount", "Base on 1445 reviews")}
                </p>
              </div>

              {/* Profile Images Stack */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  ].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Client ${idx + 1}`}
                      className="object-cover w-12 h-12 border-2 border-white rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Testimonial Cards with Navigation */}
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute z-10 flex flex-col gap-4 -translate-y-1/2 -left-16 top-1/2">
                {/* Up Arrow */}
                <button
                  onClick={() =>
                    setCurrentTestimonialIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>

                {/* Down Arrow */}
                <button
                  onClick={() =>
                    setCurrentTestimonialIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Testimonial Cards Container */}
              <div className="space-y-6 overflow-hidden">
                {/* First Testimonial Card - Always visible */}
                <motion.div
                  key={`testimonial-1-${currentTestimonialIndex}`}
                  className="p-8 bg-white shadow-xl rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote Icon */}
                  <svg
                    className="w-12 h-12 mb-4"
                    style={{ color: "#0A5950" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Testimonial Text */}
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    {testimonials[currentTestimonialIndex].content}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      className="object-cover rounded-full w-14 h-14"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonials[currentTestimonialIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentTestimonialIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Second Testimonial Card - Shows next testimonial */}
                <motion.div
                  key={`testimonial-2-${currentTestimonialIndex}`}
                  className="p-8 bg-white shadow-xl rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Quote Icon */}
                  <svg
                    className="w-12 h-12 mb-4"
                    style={{ color: "#0A5950" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Testimonial Text */}
                  <p className="mb-6 text-lg leading-relaxed text-black">
                    {
                      testimonials[
                        (currentTestimonialIndex + 1) % testimonials.length
                      ].content
                    }
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        testimonials[
                          (currentTestimonialIndex + 1) % testimonials.length
                        ].image
                      }
                      alt={
                        testimonials[
                          (currentTestimonialIndex + 1) % testimonials.length
                        ].name
                      }
                      className="object-cover rounded-full w-14 h-14"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-black">
                        {
                          testimonials[
                            (currentTestimonialIndex + 1) % testimonials.length
                          ].name
                        }
                      </h4>
                      <p className="text-sm text-black">
                        {
                          testimonials[
                            (currentTestimonialIndex + 1) % testimonials.length
                          ].role
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact-cta"
        className="relative h-[70vh] w-full flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/78H2CTA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl px-6 text-center">
          <motion.h2
            className="mb-4 text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("home2.contactCta.title")}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="mb-8 text-xl text-white/80"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("home2.contactCta.subtitle")}
          </motion.p>

          {/* Button */}
          <motion.button
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-lg shadow-lg btn-animate-strong hover:shadow-xl"
            style={{ backgroundColor: "#0A5950" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("home2.contactCta.button")}
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
