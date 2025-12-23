import { Home, Utensils, Shield, BookOpen, Clock, Sun, Activity, Users } from "lucide-react"

const DayBoardingFacility = () => {
  return (
    <section id="day-boarding-facility" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse sm:gap-8 xl:gap-20 items-center">
          <div className="lg:w-1/2">
          <div className="mb-4 lg:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
                Day-Boarding <span className="relative inline-block">Facilities
                  <img
                    src="/Images/Doodles/LineBlue.png"
                    alt="Underline"
                    className="absolute -bottom-4 sm:-bottom-6"
                  />
                </span>
              </h2>
            </div>
            <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-900 max-w-4xl mx-auto mb-8 sm:mb-12">
              Our Day-Boarding program offers the perfect balance between school and home life. Students benefit from
              extended hours at school with supervised study time, nutritious meals, and participation in various
              activities, while returning home to their families each evening.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-50 p-4 rounded-full">
                  <Home className="w-5 h-5 text-emerald-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Comfortable Hostels</h4>
                  <p className="text-gray-700 font-inter mt-2">Well-ventilated rooms with modern amenities</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-rose-50 p-4 rounded-full">
                  <Utensils className="w-5 h-5 text-rose-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Nutritious Dining</h4>
                  <p className="text-gray-700 font-inter mt-2">Balanced meals prepared by professional chefs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-50 p-4 rounded-full">
                  <Shield className="w-5 h-5 text-yellow-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">24/7 Security</h4>
                  <p className="text-gray-700 font-inter mt-2">Comprehensive security measures for safety</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100/60 p-4 rounded-full">
                  <BookOpen className="w-5 h-5 text-purple-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-gray-900 tracking-wide">Supervised Study Hours</h4>
                  <p className="text-gray-700 font-inter mt-2">Dedicated time for academics with revision</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Comfortable dormitory room"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Modern dining hall"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Study room with students"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Heros/samplehero.JPG"
                  alt="Recreation area"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DayBoardingFacility
