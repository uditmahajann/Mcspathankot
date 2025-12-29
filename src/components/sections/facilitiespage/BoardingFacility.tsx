import { Home, Utensils, Shield, BookOpen, Clock, Sun, Activity, Users } from "lucide-react"

const BoardingFacility = () => {
  return (
    <section id="boarding-facility" className="my-10 md:my-20 py-15 md:py-20 bg-linear-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 xl:gap-20 items-center">
          <div className="lg:w-1/2">
          <div className="mb-4 lg:mb-8">
              <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium leading-normal">
                Boarding Facilities
              </h2>
            </div>
            <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12">
              Our residential boarding facility provides a safe, nurturing, and structured environment where students
              can focus on their academic and personal growth. With comfortable accommodations, nutritious meals, and
              round-the-clock supervision, we ensure that students feel at home while they pursue excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-50 p-4 rounded-full">
                  <Home className="w-5 h-5 text-emerald-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Comfortable Hostels</h4>
                  <p className="text-gray-300 font-inter mt-2">Well-ventilated rooms with modern amenities</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-rose-50 p-4 rounded-full">
                  <Utensils className="w-5 h-5 text-rose-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Nutritious Dining</h4>
                  <p className="text-gray-300 font-inter mt-2">Balanced meals prepared by professional chefs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-50 p-4 rounded-full">
                  <Shield className="w-5 h-5 text-yellow-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">24/7 Security</h4>
                  <p className="text-gray-300 font-inter mt-2">Comprehensive security measures for safety</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-4 rounded-full">
                  <BookOpen className="w-5 h-5 text-purple-500 shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Supervised Study</h4>
                  <p className="text-gray-300 font-inter mt-2">Dedicated time for academics with revision</p>
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

export default BoardingFacility
