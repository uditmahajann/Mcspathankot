import { Trophy, Timer, Users, Dumbbell, Target } from "lucide-react"

const SportsGym = () => {
  const facilities = [
    {
      name: "Olympic-Size Swimming Pool",
      description: "Temperature-controlled pool with professional lanes and diving boards.",
      image: "/Images/Facility/swimmingpool.JPG",
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
      image: "/Images/Facility/gym.JPG",
    },
  ]

  return (
    <section id="sports-gym" className="py-4 sm:py-10 lg:py-16 my-10 bg-white">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-0">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Sports & {" "}
            <span className="relative inline-block">
              Gymnasium Facilities
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-8 sm:w-12 -top-6 -right-8 sm:-right-12"
              />
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in the holistic development of our students. Our world-class sports facilities and modern gymnasium provide
            students with opportunities to excel in various sports and maintain physical fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg md:text-xl font-poppins font-semibold tracking-wider mb-1">{facility.name}</h3>
                <p className="text-blue-100 text-sm font-inter">{facility.description}</p>
              </div>
            </div>
          ))}
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

        <div className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-900 my-10 overflow-hidden rounded-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-20">
            <h3
              className="text-2xl min-[540px]:text-3xl font-playpen font-medium text-yellow-400 leading-normal"
            >
              Sports Excellence Program
            </h3>
            <p className="mt-6 text-gray-100 font-inter">
              Our Sports Excellence Program is designed to identify and nurture
              sporting talent through specialized coaching, regular training,
              and participation in competitive events at various levels.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg sm:text-xl text-white tracking-wider">
                    Professional Coaching
                  </h4>
                  <p className="text-base text-blue-300 font-inter mt-2 max-w-lg leading-normal">
                    Training under experienced coaches who have worked with
                    national and international athletes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg sm:text-xl text-white tracking-wider">
                    Structured Training
                  </h4>
                  <p className="text-base text-blue-300 font-inter mt-2 max-w-lg leading-normal">
                    Systematic training programs with focus on technique,
                    fitness, and mental preparation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg sm:text-xl text-white tracking-wider">
                    Team Building
                  </h4>
                  <p className="text-base text-blue-300 font-inter mt-2 max-w-lg leading-normal">
                    Activities designed to develop leadership, teamwork, and
                    sportsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 sm:p-4 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg sm:text-xl text-white tracking-wider">
                    Team Building
                  </h4>
                  <p className="text-base text-blue-300 font-inter mt-2 max-w-lg leading-normal">
                    Activities designed to develop leadership, teamwork, and
                    sportsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src="/Images/Facility/sportsprogram.jpeg"
              alt="Students in sports training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-transparent to-transparent md:block hidden"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default SportsGym
