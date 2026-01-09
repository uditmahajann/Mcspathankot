import { Venus, Mars, CircleCheck, CircleSmall } from "lucide-react"

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
      image: "/Images/Heros/abouthero.JPG",
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
      image: "/Images/Heros/abouthero.JPG",
    },
    {
      category: "Sports Uniform",
      boys: ["House color T-shirt with school monogram", "White track pants", "White sports shoes", "White socks"],
      girls: ["House color T-shirt with school monogram", "White track pants", "White sports shoes", "White socks"],
      image: "/Images/Heros/abouthero.JPG",
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
    <section id="uniforms" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 xl:px-20">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
              Pride <span className="relative inline-block">in Every
                <img
                  src="/Images/Doodles/LineGreen.png"
                  alt="Underline"
                  className="absolute -bottom-4"
                />
              </span>{" "} Stich
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Our uniform policy promotes equality, discipline, and school identity
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-20">
            {uniformDetails.map((uniform, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="bg-primarydark text-white p-5">
                  <h3 className="text-lg font-inter font-semibold text-center uppercase">{uniform.category}</h3>
                </div>
                <div className="">
                  <div className="grid lg:grid-cols-2 gap-2">
                    <div>
                      <img
                        src={uniform.image}
                        alt={uniform.category}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6" >
                      <div>
                        <h4 className="text-lg font-poppins font-semibold text-sky-600 mb-4 flex items-center uppercase tracking-wide">
                          <Mars className="w-6 h-6 shrink-0 text-sky-600 mr-2" />
                          Boys
                        </h4>
                        <ul className="space-y-2">
                          {uniform.boys.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-sky-300 rounded-full mt-2 shrink-0"></div>
                              <span className="text-gray-700 font-inter font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-poppins font-semibold text-pink-500 mb-4 flex items-center uppercase tracking-wide">
                          <Venus className="w-6 h-6 shrink-0 text-pink-500 mr-2" />
                          Girls
                        </h4>
                        <ul className="space-y-2">
                          {uniform.girls.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                             <div className="w-2 h-2 bg-pink-300 rounded-full mt-2 shrink-0"></div>
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

          {/* <div className="mt-12 grid md:grid-cols-2 gap-6 smm:gap-8">
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4 tracking-wide">House Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                {houseColors.map((house, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                    <div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-3 shrink-0"
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
                  <CircleCheck className="w-5 h-5 shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Uniforms must be clean, well-maintained, and properly worn at all times.
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Students must wear the appropriate uniform as per the season and schedule.
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">House T-shirts must be worn on designated sports days.</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">Jewelry, except for small studs for girls, is not permitted.</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 shrink-0 text-blue-600 mr-1.5 mt-1" />
                  <span className="text-gray-700 font-inter">
                    Hair should be neatly groomed; boys' hair should not touch the collar.
                  </span>
                </li>
              </ul>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default Uniforms