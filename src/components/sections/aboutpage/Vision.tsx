import type React from "react"
import { Eye, Flag, Goal, BookOpen, Lightbulb, Users, Sparkles, Compass, HeartHandshake, Star, Globe2 } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section id="vision-mission" className="pt-4 sm:pt-10 mt-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">

        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Our Purpose:{" "}
            <span className="relative inline-block">
              Vision & Mission
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            The guiding principles that inspire our educational journey — our vision for the future and the mission that shapes every step we take at MCS
          </p>
        </div>
        </div>

        {/* Blackboard Background */}

        {/* VISION SECTION */}
        <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              <div className="bg-linear-to-br from-sky-50 via-white to-amber-50 border border-sky-100 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm">
              <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-primarydark font-poppins mb-5">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-4 tracking-wide">
                “To inspire and nurture young minds to become confident, compassionate and
                impactful members of a global community.”
              </p>
              <p className="text-base text-gray-600 font-inter">
                Our vision is to be the pre-eminent centre of learning, enabling pupils to achieve psychological and
              physical potential within the learning environment that is constructive, courteous & comprehensively
              inviting. We imagine every MCS learner as a grounded individual — rooted in values, equipped with strong academics, and ready to step into a global future with courage, empathy, and clarity of purpose.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl mt-8 lg:mt-12">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              <div className="bg-linear-to-br from-sky-50 via-white to-amber-50 border border-sky-100 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm">
              <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-primarydark font-poppins mb-5">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-4 tracking-wide">
                “We exist to provide a joyful, rigorous and value-driven learning
                environment where every child feels safe, seen, challenged and
                inspired.”
              </p>
              <p className=":text-base text-gray-600 font-inter">
                Montessori Cambridge school inspires & prepares all individuals to achieve excellence to build brightest and harmonious career, empower them to confidently explore their interests and put their skills to meaningful use. Through thoughtfully designed experiences, we aim to balance academic excellence with character formation, creativity with discipline, and individual dreams with a sense of social responsibility.
              </p>
            </div>
          </div>
        </div>


      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 mt-10 md:mt-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">

        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium leading-normal">
            Our Core Educational Philosophy
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Our core values shape the way we teach, learn and grow together as a community.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-80 z-0"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-100 opacity-80 z-0"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-2">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/Images/Heros/samplehero.JPG"
                    alt="Swami Vivekananda"
                    className="rounded-full h-65 w-65 object-cover shadow-lg relative z-10"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-xl sm:text-2xl font-poppins font-semibold text-primary mb-4">
                  "Arise, awake, and stop not until the goal is reached"
                </blockquote>
                <p className="text-gray-700 font-inter text-base sm:text-lg">
                  At MCS, we bring our mission and vision to life by embodying the teachings of Swami Vivekananda. His
                  words inspire us to nurture each student's growth with purpose and resilience. By fostering
                  self-confidence and determination, we empower individuals to overcome challenges, solve problems, and
                  realize their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission pillars */}
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-12">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-sky-600" />,
                title: "Academic Excellence",
                desc: "Deliver a strong, concept-rich curriculum that promotes deep understanding, analytical thinking and love for learning.",
              },
              {
                icon: <Globe2 className="w-6 h-6 text-emerald-600" />,
                title: "Global Citizenship",
                desc: "Cultivate awareness of cultures, issues and perspectives so learners grow into respectful, responsible world citizens.",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
                title: "Innovation & Inquiry",
                desc: "Encourage questioning, experimentation and problem-solving through projects, research and hands-on learning.",
              },
              {
                icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
                title: "Values & Character",
                desc: "Embed empathy, integrity, respect and resilience through daily interactions, service programs and reflective practices.",
              },
              {
                icon: <Users className="w-6 h-6 text-indigo-500" />,
                title: "Holistic Growth",
                desc: "Balance academics with sports, arts, leadership and wellness to support physical, emotional and creative development.",
              },
              {
                icon: <Star className="w-6 h-6 text-yellow-500" />,
                title: "Personalised Guidance",
                desc: "Offer mentorship, feedback and differentiated support so every learner feels known, encouraged and guided.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 rounded-2xl border-primary/30 bg-linear-to-br from-white via-sky-50 to-amber-50 border shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-50">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 font-inter leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Vision