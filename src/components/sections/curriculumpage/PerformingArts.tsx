const PerformingArts = () => {
  const programs = [
    {
      title: "Music",
      description: "Comprehensive music education including vocal and instrumental training",
      offerings: [
        "Western and Indian Classical Vocal Training",
        "Piano, Guitar, Violin, Tabla, and Flute Classes",
        "School Orchestra and Choir",
        "Music Theory and Appreciation",
      ],
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      title: "Dance",
      description: "Various dance forms taught by professional choreographers",
      offerings: [
        "Classical Indian Dance (Bharatanatyam, Kathak)",
        "Western Dance Forms (Ballet, Contemporary)",
        "Folk and Cultural Dances",
        "Annual Dance Productions",
      ],
      image: "/Images/Campus/NewHostel.JPG",
    },
    {
      title: "Theatre",
      description: "Comprehensive theatre program developing performance and production skills",
      offerings: [
        "Acting and Voice Modulation",
        "Script Writing and Direction",
        "Set Design and Production",
        "Annual Theatre Festival",
      ],
      image: "/Images/Campus/NewHostel.JPG",
    },
  ]

  const facilities = [
    {
      name: "Auditorium",
      description: "500-seat state-of-the-art auditorium with professional sound and lighting systems",
    },
    {
      name: "Music Studios",
      description: "Soundproof studios equipped with instruments and recording facilities",
    },
    {
      name: "Dance Studios",
      description: "Spacious studios with sprung floors, mirrors, and audio systems",
    },
    {
      name: "Black Box Theatre",
      description: "Flexible performance space for intimate productions and rehearsals",
    },
  ]

  return (
    <section id="performing-arts" className="my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            <span className="relative inline-block">Performing Arts
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[70%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Nurturing creativity, expression, and confidence through comprehensive performing arts education
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white group relative border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-5">
                  <h3 className="text-xl font-poppins font-semibold tracking-wide text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-700 mb-4 font-inter">{program.description}</p>
                  <h4 className="font-medium text-primarydark mb-2 font-inter">Program Offerings:</h4>
                  <ul className="space-y-1">
                    {program.offerings.map((offering, offeringIndex) => (
                      <li key={offeringIndex} className="text-gray-700 text-sm flex items-start font-inter">
                        <svg
                          className="h-4 w-4 text-blue-500 mr-1 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-12">
            <h3 className="text-2xl font-poppins tracking-wide font-semibold text-gray-900 mb-6">Our Facilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-sm">
                  <h4 className="text-blue-700 mb-2 text-lg font-poppins tracking-wide font-semibold">{facility.name}</h4>
                  <p className="text-gray-700 font-inter">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Annual Events</h3>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-blue-700">Annual Concert (December)</h4>
                  <p className="text-gray-600 text-sm">Showcasing musical talents across all grades</p>
                </div>
                <div className="bg-white border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-blue-700">Dance Production (February)</h4>
                  <p className="text-gray-600 text-sm">Thematic dance performances by students</p>
                </div>
                <div className="bg-white border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-blue-700">Theatre Festival (August)</h4>
                  <p className="text-gray-600 text-sm">Original plays and adaptations performed by students</p>
                </div>
                <div className="bg-white border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-blue-700">Inter-House Cultural Competition (Quarterly)</h4>
                  <p className="text-gray-600 text-sm">Competitive events in various performing arts</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Benefits</h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Builds confidence and self-expression</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Enhances creativity and imagination</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Develops discipline and perseverance</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Improves teamwork and collaboration skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Provides cultural awareness and appreciation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default PerformingArts
