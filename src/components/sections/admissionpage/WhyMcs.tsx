import React from "react"
import { Users, Heart, Star, Lightbulb, BookOpen, Leaf, Sparkles, Trophy, Globe2, ArrowRight, MessageSquareText } from "lucide-react"

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-4 sm:py-8 lg:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 max-w-7xl">
        {/* HERO */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            MCS — <span className="relative inline-block"> More Than
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="absolute w-[90%] left-2 -bottom-4 sm:-bottom-6"
              />
            </span> a School!
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Because education here isn’t just about classrooms — it’s about shaping human potential, nurturing curiosity,
            and building character that shines beyond the report card.
          </p>
        </div>

        <div className="text-center mb-12">
         
          <div className="space-y-16 sm:space-y-20">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Holistic Learning"
                  className="rounded-2xl sm:rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-sky-600" /> Holistic Learning Beyond Books
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  From theatre and art to sports and robotics — our learners discover their unique strengths through
                  hands-on, multidisciplinary exploration. We believe learning should spark joy, not stress. We go beyond academics with sports, clubs, career counseling, heritage tours, and wellness programs for well-rounded growth.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Innovative Infrastructure"
                  className="rounded-2xl sm:rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" /> State-of-the-Art Facilities
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  From digital classrooms to a full-scale sports complex and smart labs, MCS equips students with world-class infrastructure. Smart classrooms, collaborative spaces, and digital labs blend tradition with technology — helping
                  students thrive in an evolving, connected world.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Mentorship"
                  className="rounded-2xl sm:rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" /> Personalised Mentorship
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  Every student is guided personally — not just academically, but emotionally. Through one-on-one guidance, consistent encouragement, and meaningful conversations, Our teachers serve as mentors,
                  helping learners grow into thoughtful, resilient individuals. 
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Innovative Infrastructure"
                  className="rounded-2xl sm:rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                  <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-fuchsia-400" /> Innovative & Value-Based Education
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  We prioritize creativity, problem-solving, and aptitude development over rote memorization through an adaptive and engaging curriculum. Our passionate educators integrate academic excellence with life skills and core values like empathy, tolerance, and respect.
                </p>
              </div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              <div className="md:w-1/2">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Mentorship"
                  className="rounded-2xl sm:rounded-3xl shadow-md w-full h-86 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 flex items-center gap-3 leading-normal">
                  <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" /> Global Vision with Local Values
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-inter">
                  Founded to deliver global education rooted in Indian tradition, MCS shapes students into culturally grounded and globally competent individuals. With students from across India and abroad, MCS nurtures a spirit of brotherhood and fosters cultural awareness, unity and understanding through diversity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChooseUs