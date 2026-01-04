import type React from "react"
import { BookOpen, Lightbulb, Users, Sparkles, Compass, HeartHandshake, Star, Globe2 } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section id="vision-mission" className="pt-4 sm:pt-10 mt-10 bg-white">
      <div className="mx-auto px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our Purpose{" "}
            <br className="hidden"></br>
            <span className="relative inline-block">
              & Principles
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkYellow.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            The guiding principles that inspire our educational journey — our vision for the future and the mission that shapes every step we take at MCS
          </p>
        </div>
      </div>

      {/* Blackboard Background */}
      <div className="grid lg:grid-cols-2 space-y-12 mx-auto px-6 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0 max-w-7xl">

        {/* VISION SECTION */}
        <div className="items-start">
          <div className="lg:p-6 xl:p-12">
            <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 font-poppins mb-5 tracking-wide">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-primarydark font-inter mb-4">
              “To inspire and nurture young minds to become confident, compassionate and
              impactful members of a global community.”
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-inter">
              Our vision is to be the pre-eminent centre of learning, enabling pupils to achieve psychological and
              physical potential within the learning environment that is constructive, courteous & comprehensively
              inviting. We imagine every MCS learner as a grounded individual — rooted in values, equipped with strong academics, and ready to step into a global future with courage, empathy, and clarity of purpose.
            </p>
          </div>
        </div>


        {/* MISSION SECTION */}
        <div className="items-start">
          <div className="lg:p-6 xl:p-12">
            <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-900 font-poppins mb-5 tracking-wide">
              <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-primarydark font-inter mb-4">
              “To provide a joyful & value-driven learning
              environment where every child feels safe, seen, challenged and
              inspired.”
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-inter">
              MCS inspires & prepares all individuals to achieve excellence to build brightest and harmonious career, empower them to confidently explore their interests and put their skills to meaningful use. Through thoughtfully designed experiences, we aim to balance academic excellence with character formation, creativity with discipline, and individual dreams with a sense of social responsibility.
            </p>
          </div>
        </div>
      </div>


      <div className="my-10 py-12 bg-linear-to-r from-blue-950 via-blue-900 to-blue-950">
        <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20 xl:px-0">
          {/* Core Philosophy */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/Images/About/vivekananda.png"
                    alt="Swami Vivekananda"
                    className="relative w-60 lg:w-75"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-poppins font-medium text-yellow-400 leading-normal tracking-wide">
                    Our Core Philosophy
                  </h2>
                </div>
                <blockquote className="text-xl sm:text-2xl font-playpen font-medium text-white mb-4">
                  "Arise, awake, and stop not until the goal is reached"
                </blockquote>
                <p className="text-gray-300 font-inter text-base sm:text-lg">
                  At MCS, we bring our mission and vision to life by embodying the teachings of Swami Vivekananda. His
                  words inspire us to nurture each student's growth with purpose and resilience. By fostering
                  self-confidence and determination, we empower individuals to overcome challenges, solve problems, and
                  realize their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission pillars */}
      <div className="my-12 sm:my-20 mx-auto max-w-7xl px-8 min-[540px]:px-12 sm:px-16">
       <div className="grid gap-8 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <BookOpen className="w-8 h-8 text-purple-400" />,
            title: "Academic Excellence",
            desc: "Deliver a strong, concept-rich curriculum that promotes deep understanding, analytical thinking and love for learning.",
          },
          {
            icon: <Globe2 className="w-8 h-8 text-lime-400" />,
            title: "Global Citizenship",
            desc: "Cultivate awareness of cultures, issues and perspectives so learners grow into respectful, responsible world citizens.",
          },
          {
            icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
            title: "Innovation & Inquiry",
            desc: "Encourage questioning, experimentation and problem-solving through projects, research and hands-on learning.",
          },
          {
            icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
            title: "Values & Character",
            desc: "Embed empathy, integrity, respect and resilience through daily interactions, service programs and reflective practices.",
          },
          {
            icon: <Users className="w-8 h-8 text-teal-400" />,
            title: "Holistic Growth",
            desc: "Balance academics with sports, arts, leadership and wellness to support physical, emotional and creative development.",
          },
          {
            icon: <Star className="w-8 h-8 text-fuchsia-400" />,
            title: "Personalised Guidance",
            desc: "Offer mentorship, feedback and differentiated support so every learner feels known, encouraged and guided.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins tracking-wide">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-inter leading-relaxed">
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