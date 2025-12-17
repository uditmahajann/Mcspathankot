import { Route, Timer, Users, LocateFixed, ShieldCheck } from "lucide-react"

const TransportFacility = () => {
  const facilities = [
    {
      name: "Olympic-Size Swimming Pool",
      description: "Temperature-controlled pool with professional lanes and diving boards.",
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      name: "Indoor Sports Complex",
      description: "Multi-purpose courts for basketball, volleyball, badminton, and more.",
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      name: "Football Ground",
      description: "FIFA-standard football field with natural grass and proper drainage system.",
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      name: "Cricket Stadium",
      description: "Professional cricket ground with practice nets and pavilion.",
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      name: "Tennis Courts",
      description: "Multiple tennis courts with different surfaces for training and matches.",
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      name: "Modern Gymnasium",
      description: "Fully equipped gym with cardio and strength training equipment.",
      image: "/Images/Campus/NewHostel.JPG",
    },
  ]

  return (
    <section id="transport-facility" className="py-10 my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            {" "}
            <span className="relative inline-block">
              Transport Facilities
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 lg:w-16 -top-8 -right-16"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-5xl mx-auto">
            Safe and reliable school commute with real-time tracking, route updates, and modern fleet monitoring systems.
          </p>
        </div>

        <div className="bg-slate-800 text-white rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-14">
              <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4 tracking-wide">Transport with Live GPS</h3>
              <p className="text-blue-100 font-inter mb-8">
                Our transport system ensures a safe and reliable commute for students through a fleet of GPS-enabled school buses.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <LocateFixed className="w-6 h-6 text-primarydark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-inter font-semibold mb-1">Live GPS Tracking</h4>
                    <p className="text-blue-100 font-inter">
                      Our GPS-enabled transport system provides real-time bus location ensuring timely and safe travel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-400 p-3 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h4 className="text-xl font-inter font-semibold mb-1">Safety & Security</h4>
                    <p className="text-blue-100 font-inter">
                      All drivers and attendants undergo regular training and background checks to ensure the highest safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Route className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h4 className="text-xl font-inter font-semibold mb-1">Extensive Route Coverage</h4>
                    <p className="text-blue-100 font-inter">
                      Our transport service covers a wide network across the city with well-planned routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <img
                src="/Images/Campus/NewHostel.JPG"
                alt="Students in sports training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent md:block hidden"></div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">Modern Gymnasium</h3>
              <p className="text-gray-700 mb-6 font-inter">
                Our state-of-the-art gymnasium is equipped with the latest fitness equipment and is supervised by
                qualified fitness trainers who guide students on proper exercise techniques and fitness regimens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-emerald-500 flex-shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Strength Training</h4>
                  <p className="text-gray-700 font-inter mt-2">Free weights, machines, and functional training equipment.</p>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg">
                  <Timer className="w-6 h-6 text-rose-500 flex-shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Cardio Zone</h4>
                  <p className="text-gray-700 font-inter mt-2">Treadmills, ellipticals, bikes, and rowing machines.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-yellow-500 flex-shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Fitness Classes</h4>
                  <p className="text-gray-700 font-inter mt-2">Yoga, aerobics, and specialized fitness programs.</p>
                </div>

                <div className="bg-purple-100/60 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-purple-500 flex-shrink-0 mb-2" />
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Personal Training</h4>
                  <p className="text-gray-700 font-inter mt-2">One-on-one guidance from certified fitness trainers.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Modern gymnasium with equipment"
                  className="w-full"
                />
            
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default TransportFacility