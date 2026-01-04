import { Award, TrendingUp, Users, BarChart, CheckCircle, CheckCircle2 } from "lucide-react"

const CompetitiveCoaching = () => {
  return (
    <section id="competitive-coaching" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20">

          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                Competitive <span className="relative inline-block">Coaching
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-5"
                  />
                </span>
              </h2>
            </div>
            <p className="text-gray-900 mb-8 font-inter text-base sm:text-lg">
              Our Competitive Coaching program is designed to prepare students for various national and international
              competitions, entrance exams, and Olympiads. We provide specialized training that goes beyond the regular
              curriculum to develop advanced problem-solving skills and competitive edge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Advanced Curriculum</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Specialized study material and advanced concepts for competitive exams.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Expert Mentors</h4>
                <p className="text-gray-700 font-inter mt-2">
                  Guidance from experienced faculty having record in competitive exams.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <BarChart className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Regular Assessments</h4>
                <p className="text-gray-700 font-inter mt-2">Regular mock tests and performance analysis to track progress.</p>
              </div>

              <div className="bg-purple-100/60 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personalized Feedback</h4>
                <p className="text-gray-700 font-inter mt-2">Individual attention and customized improvement plans.</p>
              </div>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-primary">
              <h4 className="font-outfit font-semibold text-primary flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                Competitions We Prepare For:</h4>
              <ul className="grid grid-cols-2 gap-x-1 md:gap-x-4 gap-y-2">
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Mathematics Olympiad
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Science Olympiad
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  NTSE
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  JEE/NEET
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Coding Competitions
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Robotics Challenges
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Language Competitions
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-outfit">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Arts & Cultural Events
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 sticky top-40 max-h-fit">
            <div className="relative">
              <img
                src="/Images/Facility/competitive.JPG"
                alt="Competitive coaching class with students"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveCoaching
