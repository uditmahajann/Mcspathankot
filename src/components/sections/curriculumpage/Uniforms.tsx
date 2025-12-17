import { Venus, Mars, CircleCheck, Dot, CircleSmall, Heart } from "lucide-react"

const Uniforms = () => {
  // Uniform details
  const uniformDetails = [
    {
      category: "Regular Uniform (Summers)",
      boys: [
        "White shirt with school monogram",
        "Navy blue shorts (Classes Pre-Nursery to 5)",
        "Navy blue trousers (Classes 6 to 12)",
        "School tie with house color",
        "White socks with blue stripes",
        "Black shoes",
        "School belt",
      ],
      girls: [
        "White shirt with school monogram",
        "Navy blue shorts (Classes Pre-Nursery to 5)",
        "Navy blue trousers (Classes 6 to 12)",
        "School tie with house color",
        "White socks with blue stripes",
        "Black shoes",
        "School belt",
      ],
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      category: "Regular Uniform (Winters)",
      boys: [
        "White shirt with school monogram",
        "Navy blue shorts (Classes Pre-Nursery to 5)",
        "Navy blue trousers (Classes 6 to 12)",
        "School tie with house color",
        "White socks with blue stripes",
        "Black shoes",
        "School belt",
      ],
      girls: [
        "White shirt with school monogram",
        "Navy blue shorts (Classes Pre-Nursery to 5)",
        "Navy blue trousers (Classes 6 to 12)",
        "School tie with house color",
        "White socks with blue stripes",
        "Black shoes",
        "School belt",
      ],
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      category: "Sports Uniform",
      boys: ["House color T-shirt with school monogram", "White track pants", "White sports shoes", "White socks"],
      girls: ["House color T-shirt with school monogram", "White track pants", "White sports shoes", "White socks"],
      image: "/Images/Campus/NewHostel.JPG",
    },
  ]

  // House colors
  const houseColors = [
    { name: "Gandhi House", color: "Yellow" },
    { name: "Nehru House", color: "Blue" },
    { name: "Tagore House", color: "Green" },
    { name: "Patel House", color: "Red" },
  ]

  return (
    <section id="uniforms" className="py-10 my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
              Pride in <span className="relative inline-block">Every Stich
                <img
                  src="/Images/Doodles/LineGreen.png"
                  alt="Underline"
                  className="absolute w-[80%] left-16 -bottom-4 sm:-bottom-6"
                />
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
              Our uniform policy promotes equality, discipline, and school identity
            </p>
          </div>

          <div className="space-y-12">
            {uniformDetails.map((uniform, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-primary text-white p-5">
                  <h3 className="text-2xl font-poppins font-semibold text-center tracking-wide uppercase">{uniform.category}</h3>
                </div>
                <div className="p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <img
                        src={uniform.image || "/placeholder.svg"}
                        alt={uniform.category}
                        className="w-full h-auto aspect-[5/4] rounded-lg mb-4"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center" >
                      <div>
                        <h4 className="text-xl font-poppins font-semibold text-sky-600 mb-4 flex items-center uppercase tracking-wide">
                          <Mars className="w-6 h-6 flex-shrink-0 text-sky-600 mr-2" />
                          Boys
                        </h4>
                        <ul className="space-y-2">
                          {uniform.boys.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CircleSmall className="w-5 h-5 flex-shrink-0 text-sky-600 mr-1 mt-1" />
                              <span className="text-gray-700 font-inter font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-poppins font-semibold text-pink-500 mb-4 flex items-center uppercase tracking-wide">
                          <Venus className="w-6 h-6 flex-shrink-0 text-pink-500 mr-2" />
                          Girls
                        </h4>
                        <ul className="space-y-2">
                          {uniform.girls.map((item, i) => (
                            <li key={i} className="flex items-start">
                             <CircleSmall className="w-5 h-5 flex-shrink-0 text-pink-500 mr-1 mt-1" />
                              <span className="text-gray-700 font-inter font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">House Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                {houseColors.map((house, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                    <div
                      className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
                      style={{
                        backgroundColor: house.color.toLowerCase(),
                        border: "1px solid #e5e7eb",
                      }}
                    ></div>
                    <div>
                      <h4 className="font-inter font-medium text-gray-900">{house.name}</h4>
                      <p className="font-inter text-sm text-gray-700">{house.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">Uniform Guidelines</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 flex-shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Uniforms must be clean, well-maintained, and properly worn at all times.
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 flex-shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Students must wear the appropriate uniform as per the season and schedule.
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 flex-shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">House T-shirts must be worn on designated sports days.</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 flex-shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">Jewelry, except for small studs for girls, is not permitted.</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 flex-shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Hair should be neatly groomed; boys' hair should not touch the collar.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Uniform Purchase</h3>
                <p className="text-gray-600">
                  School uniforms can be purchased from the school store during working hours. The store stocks all
                  uniform items throughout the year.
                </p>
                <div className="mt-4 space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Location:</span> School Campus, Main Building
                  </p>
                  <p>
                    <span className="font-medium">Timings:</span> Monday to Friday, 9:00 AM to 2:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Contact:</span> +91 123 456 7890
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Size Chart
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default Uniforms