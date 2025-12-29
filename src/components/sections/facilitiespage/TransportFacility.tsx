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
    <section id="transport-facility" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            {" "}
            <span className="relative inline-block">
              Transport Facilities
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Safe and reliable school commute with real-time tracking, route updates, and modern fleet monitoring systems.
          </p>
        </div>

        <div className="bg-slate-800 text-white rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-14">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold mb-4 tracking-wide leading-normal">Transport with Live GPS</h3>
              <p className="text-blue-100 font-inter mb-8">
                Our transport system ensures a safe and reliable commute for students through a fleet of GPS-enabled school buses.
              </p>

              <div className="space-y-3 sm:space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <LocateFixed className="w-6 h-6 text-primarydark" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-inter font-semibold mb-1">Live GPS Tracking</h4>
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
                    <h4 className="text-lg md:text-xl font-inter font-semibold mb-1">Safety & Security</h4>
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
                    <h4 className="text-lg md:text-xl font-inter font-semibold mb-1">Extensive Route Coverage</h4>
                    <p className="text-blue-100 font-inter">
                      Our transport service covers a wide network across the city with well-planned routes.
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
      </div>
    </section>
  )
}

export default TransportFacility