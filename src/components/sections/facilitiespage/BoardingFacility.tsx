import { Home, Utensils, Shield, BookOpen, Clock, Sun, Activity, Users } from "lucide-react"

const BoardingFacility = () => {
  return (
    <section id="boarding-facility" className="py-25 my-10 bg-gradient-to-br from-violet-950 via-blue-900 to-indigo-950">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
          <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-playpen font-medium">
                Boarding Facilities
              </h2>
            </div>
            <p className="text-gray-200 mb-12 font-inter text-base sm:text-lg">
              Our residential boarding facility provides a safe, nurturing, and structured environment where students
              can focus on their academic and personal growth. With comfortable accommodations, nutritious meals, and
              round-the-clock supervision, we ensure that students feel at home while they pursue excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-50 p-4 rounded-full">
                  <Home className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Comfortable Hostels</h4>
                  <p className="text-gray-300 font-inter mt-2">Well-ventilated rooms with modern amenities</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-rose-50 p-4 rounded-full">
                  <Utensils className="w-5 h-5 text-rose-500 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Nutritious Dining</h4>
                  <p className="text-gray-300 font-inter mt-2">Balanced meals prepared by professional chefs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-50 p-4 rounded-full">
                  <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">24/7 Security</h4>
                  <p className="text-gray-300 font-inter mt-2">Comprehensive security measures for safety</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-4 rounded-full">
                  <BookOpen className="w-5 h-5 text-purple-500 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-base text-white tracking-wider">Supervised Study</h4>
                  <p className="text-gray-300 font-inter mt-2">Dedicated time for academics with revision</p>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-900 text-lg mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600" />
                Holistic Care
              </h4>
              <p className="text-gray-700">
                Our boarding program focuses on the overall well-being of students, including their physical health,
                emotional development, and social skills. House parents and mentors provide guidance and support,
                creating a family-like atmosphere.
              </p>
            </div> */}
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Comfortable dormitory room"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Modern dining hall"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Study room with students"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Images/Campus/NewHostel.JPG"
                  alt="Recreation area"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-blue-900 text-white rounded-xl overflow-hidden mt-16">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Day-Boarding Schedule</h3>
            <p className="text-blue-100 mb-8">
              Our structured day-boarding schedule is designed to balance academics, activities, and relaxation time,
              ensuring students remain engaged and productive throughout the day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 backdrop-blur-sm p-5 rounded-lg">
                <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-300" />
                  Morning Schedule
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-blue-200">7:30 AM - 8:00 AM</span>
                    <span className="text-white">Arrival & Breakfast</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">8:00 AM - 8:30 AM</span>
                    <span className="text-white">Morning Assembly</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">8:30 AM - 12:30 PM</span>
                    <span className="text-white">Academic Classes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">12:30 PM - 1:30 PM</span>
                    <span className="text-white">Lunch & Recreation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-800/50 backdrop-blur-sm p-5 rounded-lg">
                <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-300" />
                  Afternoon Schedule
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-blue-200">1:30 PM - 3:30 PM</span>
                    <span className="text-white">Academic Classes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">3:30 PM - 4:00 PM</span>
                    <span className="text-white">Snack Break</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">4:00 PM - 5:00 PM</span>
                    <span className="text-white">Supervised Study</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-blue-200">5:00 PM - 6:00 PM</span>
                    <span className="text-white">Activities & Departure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-800/30 rounded-lg">
              <p className="text-blue-100 flex items-center gap-2">
                <Sun className="w-5 h-5 text-blue-300" />
                <span>
                  <span className="font-semibold text-white">Note:</span> Schedule may vary slightly based on grade
                  level and specific day of the week.
                </span>
              </p>
            </div>
          </div>
        </div> */}


        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Students in study hall"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900 text-xl">Collaborative Learning</h3>
              </div>
              <p className="text-gray-700">
                Our day-boarding program encourages peer learning and collaboration, with students working together on
                projects and helping each other understand difficult concepts under teacher supervision.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Students in activity room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900 text-xl">Enrichment Activities</h3>
              </div>
              <p className="text-gray-700">
                Beyond academics, our day-boarding students participate in various enrichment activities including arts,
                music, dance, robotics, coding, and more to develop their talents and interests.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Students having meal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900 text-xl">Nutritional Program</h3>
              </div>
              <p className="text-gray-700">
                Our in-house nutritionists design balanced meals that provide the energy and nutrients students need for
                optimal learning and development throughout their extended day at school.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Daily Schedule in Boarding</h3>
            <p className="text-gray-700 mb-8">
              Our structured daily routine helps students develop discipline, time management skills, and healthy habits
              while ensuring they have time for academics, recreation, and personal development.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-3 text-left text-blue-900">Time</th>
                    <th className="border border-blue-200 p-3 text-left text-blue-900">Activity</th>
                    <th className="border border-blue-200 p-3 text-left text-blue-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-3 text-gray-700">5:30 AM - 6:00 AM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Wake Up & Morning Routine</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Personal hygiene and room tidying</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-3 text-gray-700">6:00 AM - 7:00 AM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Physical Activity</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Sports, yoga, or fitness training</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3 text-gray-700">7:00 AM - 8:00 AM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Breakfast</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Nutritious breakfast in dining hall</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-3 text-gray-700">8:30 AM - 3:30 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">School Hours</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Regular academic classes</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3 text-gray-700">3:30 PM - 4:30 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Snacks & Recreation</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Refreshments and free time</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-3 text-gray-700">4:30 PM - 6:30 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Sports & Activities</td>
                    <td className="border border-blue-200 p-3 text-gray-700">
                      Organized sports and co-curricular activities
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3 text-gray-700">6:30 PM - 7:30 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Dinner</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Evening meal in dining hall</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-3 text-gray-700">7:30 PM - 9:30 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Study Hours</td>
                    <td className="border border-blue-200 p-3 text-gray-700">
                      Supervised study time with faculty support
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3 text-gray-700">9:30 PM - 10:00 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Personal Time</td>
                    <td className="border border-blue-200 p-3 text-gray-700">
                      Reading, journaling, or quiet activities
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-blue-200 p-3 text-gray-700">10:00 PM</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Lights Out</td>
                    <td className="border border-blue-200 p-3 text-gray-700">Rest time for the next day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold text-blue-900">Weekend Schedule:</span> Weekends follow a more relaxed
                schedule with additional recreational activities, outings, and special programs.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default BoardingFacility
