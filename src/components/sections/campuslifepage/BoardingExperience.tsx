import { Clock, Home, Utensils, Book, Users, Moon, Sun, Heart, Award, Music } from "lucide-react"

const BoardingExperience = () => {
  return (
    <section id="boarding-experience" className="py-4 sm:pb-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            Boarding School <span className="relative inline-block">Experience
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[90%] left-6 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Our boarding program offers students a home away from home, fostering independence, responsibility, and
            lifelong friendships in a safe and nurturing environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 mb-8 md:mb-12 items-center">
          {/* Left Column - Description and Features */}
          <div>
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-primarydark mb-3 tracking-wide">A Home Away From Home</h3>
              <p className="text-gray-700 mb-6 font-inter">
                Our boarding facilities provide a comfortable, secure, and supportive environment where students develop
                independence while being guided by experienced house parents and mentors who are available 24/7.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <Home size={22} />, text: "Modern dormitories" },
                  { icon: <Utensils size={22} />, text: "Nutritious meals" },
                  { icon: <Users size={22} />, text: "24/7 supervision" },
                  { icon: <Heart size={22} />, text: "Healthcare services" },
                  { icon: <Book size={22} />, text: "Study facilities" },
                  { icon: <Award size={22} />, text: "Character development" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full text-primarydark">{item.icon}</div>
                    <span className="text-gray-900 font-inter font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekend Activities */}
            <div className="bg-linear-to-r from-primary to-primarydark rounded-xl p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-3 tracking-wide">Weekend Activities</h3>
              <p className="text-blue-50 mb-6 font-inter">
                Weekends at MCS are filled with enriching activities that balance recreation, learning, and personal
                development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Movie nights",
                  "Sports tournaments",
                  "Cultural outings",
                  "Community service",
                  "Hobby clubs",
                  "Special workshops",
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-2 font-inter text-white font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Daily Schedule */}
          <div className="bg-gray-50 rounded-xl sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "/Images/Heros/samplehero.JPG",
                "/Images/Heros/samplehero.JPG",
                "/Images/Heros/samplehero.JPG",
                "/Images/Heros/samplehero.JPG",
                "/Images/Heros/samplehero.JPG",
                "/Images/Heros/samplehero.JPG",
              ].map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-md group">
                  <img
                    src={src}
                    alt={`Boarding photo ${idx + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-blue-50 rounded-xl p-6 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-playpen font-semibold text-primarydark mb-6 sm:mb-8 sm:text-center">What Our Boarding Students Say:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Boarding at MCS has taught me independence and helped me build lifelong friendships. The house parents are like family to us.",
                student: "Aryan S., Grade 11",
              },
              {
                quote:
                  "I've grown so much as a person since joining the boarding program. The evening study sessions have really improved my academics.",
                student: "Priya M., Grade 10",
              },
              {
                quote:
                  "As an international student, the boarding community made me feel at home right away. The weekend activities are always something to look forward to.",
                student: "David L., Grade 12",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-lg text-sm sm:text-base">
                <p className="text-gray-700 mb-4 italic font-inter">"{testimonial.quote}"</p>
                <p className="text-primarydark font-inter font-semibold">— {testimonial.student}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardingExperience
