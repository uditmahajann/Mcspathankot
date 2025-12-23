import { Trophy, Timer, Users, Dumbbell, Target } from "lucide-react"

const SportsGym = () => {
  const facilities = [
    {
      name: "Olympic-Size Swimming Pool",
      description: "Temperature-controlled pool with professional lanes and diving boards.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Indoor Sports Complex",
      description: "Multi-purpose courts for basketball, volleyball, badminton, and more.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Football Ground",
      description: "FIFA-standard football field with natural grass and proper drainage system.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Cricket Stadium",
      description: "Professional cricket ground with practice nets and pavilion.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Tennis Courts",
      description: "Multiple tennis courts with different surfaces for training and matches.",
      image: "/Images/Heros/samplehero.JPG",
    },
    {
      name: "Modern Gymnasium",
      description: "Fully equipped gym with cardio and strength training equipment.",
      image: "/Images/Heros/samplehero.JPG",
    },
  ]

  return (
    <section id="sports-gym" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Sports & {" "}
            <span className="relative inline-block">
              Gymnasium Facilities
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in the holistic development of our students. Our world-class sports facilities and modern gymnasium provide
            students with opportunities to excel in various sports and maintain physical fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-64">
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white text-lg md:text-xl font-poppins font-semibold tracking-wider mb-1">{facility.name}</h3>
                <p className="text-blue-100 text-sm font-inter">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 text-white rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-6 sm:p-8 md:p-14">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold mb-4 tracking-wide">Sports Excellence Program</h3>
              <p className="text-blue-100 font-inter mb-6 sm:mb-8">
                Our Sports Excellence Program is designed to identify and nurture sporting talent through specialized
                coaching, regular training, and participation in competitive events at various levels.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-primarydark" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-inter font-semibold mb-1">Professional Coaching</h4>
                    <p className="text-blue-100 font-inter">
                      Training under experienced coaches who have worked with national and international athletes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-400 p-3 rounded-full">
                    <Timer className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-inter font-semibold mb-1">Structured Training</h4>
                    <p className="text-blue-100 font-inter">
                      Systematic training programs with focus on technique, fitness, and mental preparation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Users className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-inter font-semibold mb-1">Team Building</h4>
                    <p className="text-blue-100 font-inter">
                      Activities designed to develop leadership, teamwork, and sportsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <img
                src="/Images/Heros/samplehero.JPG"
                alt="Students in sports training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-800 to-transparent lg:block hidden"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">Modern Gymnasium</h3>
              <p className="text-gray-700 mb-6 font-inter">
                Our state-of-the-art gymnasium is equipped with the latest fitness equipment and is supervised by
                qualified fitness trainers who guide students on proper exercise techniques and fitness regimens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-emerald-500 shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Strength Training</h4>
                  <p className="text-gray-700 font-inter mt-2">Free weights, machines, and functional training equipment.</p>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg">
                  <Timer className="w-6 h-6 text-rose-500 shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Cardio Zone</h4>
                  <p className="text-gray-700 font-inter mt-2">Treadmills, ellipticals, bikes, and rowing machines.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-yellow-500 shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Fitness Classes</h4>
                  <p className="text-gray-700 font-inter mt-2">Yoga, aerobics, and specialized fitness programs.</p>
                </div>

                <div className="bg-purple-100/60 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-purple-500 shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personal Training</h4>
                  <p className="text-gray-700 font-inter mt-2">One-on-one guidance from certified fitness trainers.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Modern gymnasium with equipment"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SportsGym
