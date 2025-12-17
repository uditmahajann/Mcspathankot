const Academics = () => {
  const academicPrograms = [
    {
      title: "Primary School (Grades 1-5)",
      description: "Foundation years focusing on core skills, creativity, and character development.",
      features: [
        "Activity-based learning approach",
        "Introduction to languages, mathematics, and environmental studies",
        "Regular field trips and hands-on projects",
        "Development of social and emotional skills",
      ],
    },
    {
      title: "Middle School (Grades 6-8)",
      description: "Transition years with deeper subject knowledge and critical thinking development.",
      features: [
        "Subject-specific teaching with specialized faculty",
        "Introduction to laboratory sciences and advanced mathematics",
        "Research projects and presentations",
        "Leadership development opportunities",
      ],
    },
    {
      title: "Secondary School (Grades 9-10)",
      description: "Preparation for board examinations with comprehensive academic support.",
      features: [
        "Rigorous preparation for board examinations",
        "Career guidance and counseling",
        "Advanced laboratory work in sciences",
        "Specialized coaching for competitive examinations",
      ],
    },
    {
      title: "Senior Secondary (Grades 11-12)",
      description: "Specialized streams with focus on college preparation and career readiness.",
      features: [
        "Streams: Science, Commerce, and Humanities",
        "College preparation and entrance exam coaching",
        "Internship opportunities with industry partners",
        "Advanced research projects and publications",
      ],
    },
  ]

  return (
    <section id="academics" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Academics</h2>
          <p className="text-gray-600 mb-12 text-lg">
            Our comprehensive academic program is designed to nurture intellectual curiosity and academic excellence
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {academicPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
              >
                <div className="bg-blue-900 text-white p-4">
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <h4 className="font-medium text-blue-800 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Teaching Methodology</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-blue-600 font-bold text-lg mb-2">Inquiry-Based</div>
                <p className="text-gray-600">
                  Encouraging students to ask questions and discover answers through guided exploration
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-blue-600 font-bold text-lg mb-2">Collaborative</div>
                <p className="text-gray-600">
                  Fostering teamwork and communication through group projects and peer learning
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-blue-600 font-bold text-lg mb-2">Technology-Integrated</div>
                <p className="text-gray-600">
                  Incorporating digital tools and resources to enhance learning experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academics
