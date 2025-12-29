import { BookOpen, Target, Brain, Lightbulb, CheckCircle, TrendingUp, Users, BarChart, Search } from "lucide-react"

const FoundationCoaching = () => {
  return (
    <section id="foundation-coaching" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex flex-col md:flex-row md:gap-20">
          
          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-playpen font-medium leading-normal">
                Foundation <span className="relative inline-block">Coaching
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-4 sm:-bottom-6 "
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our Foundation Coaching program is designed to build strong academic fundamentals in students from an
              early age. We focus on developing critical thinking, problem-solving abilities, and a deep understanding
              of core concepts that serve as building blocks for advanced learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <Target className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personalized Learning</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Customized learning approaches based on individual student needs.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Brain className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Cognitive Development</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Activities to enhance memory, cognitive processing & attention.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Conceptual Clarity</h4>
                <p className="text-gray-700 font-inter mt-2">Focus on understanding concepts rather than rote memorization.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <Search className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Analytical Thinking Skills</h4>
                <p className="text-gray-700 font-inter mt-2">Encourages logical reasoning and problem-solving mindset.</p>
              </div>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-primary">
              <h4 className="font-outfit font-semibold text-primary flex items-center gap-2">
                {/* <CheckCircle className="w-6 h-6 text-primarydark" /> */}
                Our Approach
              </h4>
              <p className="text-gray-700 mt-2 font-outfit">
                We employ a blend of traditional and modern teaching methodologies, incorporating hands-on activities,
                visual learning, and technology-aided instruction to make learning engaging and effective.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Heros/samplehero.JPG"
                alt="Foundation coaching session with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-25">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Heros/samplehero.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 to-transparent flex p-5 sm:p-6">
            
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Laying the Academic Bedrock</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Heros/samplehero.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Learning Beyond Books</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/Heros/samplehero.JPG"
              alt="Virtual reality learning session"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/90 to-transparent flex p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold tracking-wider mt-1">Modern Infrastructure</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundationCoaching