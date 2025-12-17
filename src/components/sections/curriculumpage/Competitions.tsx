const Competitions = () => {
  const internalCompetitions = [
    {
      name: "Science Olympiad",
      description: "Annual competition testing scientific knowledge and application skills",
      eligibility: "Grades 6-12",
      date: "July",
    },
    {
      name: "Mathematics Challenge",
      description: "Problem-solving competition with advanced mathematical concepts",
      eligibility: "Grades 5-12",
      date: "August",
    },
    {
      name: "Literary Fest",
      description: "Creative writing, poetry, debate, and elocution competitions",
      eligibility: "All grades",
      date: "September",
    },
    {
      name: "Tech Innovation Challenge",
      description: "Technology-based competition focusing on innovative solutions",
      eligibility: "Grades 8-12",
      date: "November",
    },
  ]

  const externalCompetitions = [
    {
      name: "International Science Olympiad",
      level: "International",
      achievements: "Gold and Silver medals in 2022-23",
    },
    {
      name: "National Mathematics Olympiad",
      level: "National",
      achievements: "Top 10 ranks nationally in 2022-23",
    },
    {
      name: "CBSE Heritage India Quiz",
      level: "National",
      achievements: "Regional winners 2023",
    },
    {
      name: "Inter-School Debate Championship",
      level: "State",
      achievements: "Champions 2022, Runners-up 2023",
    },
    {
      name: "Robotics Challenge",
      level: "International",
      achievements: "Qualified for global finals 2023",
    },
  ]

  return (
    <section id="competitions" className="my-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Competitions</h2>
          <p className="text-gray-600 mb-12 text-lg">
            We encourage healthy competition to foster excellence and bring out the best in our students
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Internal Competitions</h3>
              <div className="space-y-4">
                {internalCompetitions.map((competition, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-5">
                    <h4 className="font-semibold text-blue-700 text-lg mb-2">{competition.name}</h4>
                    <p className="text-gray-600 mb-3">{competition.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{competition.eligibility}</div>
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {competition.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">External Competitions</h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-6">
                  Our students regularly participate and excel in various external competitions at regional, national,
                  and international levels.
                </p>

                <div className="space-y-4">
                  {externalCompetitions.map((competition, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-blue-700 mb-1">{competition.name}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Level: {competition.level}</span>
                        <span className="text-green-600 font-medium">{competition.achievements}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-5">
                <h4 className="font-semibold text-blue-800 mb-3">Competition Preparation</h4>
                <ul className="space-y-2">
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
                    <span className="text-gray-700">Specialized coaching by subject experts</span>
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
                    <span className="text-gray-700">Regular practice sessions and mock competitions</span>
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
                    <span className="text-gray-700">Access to advanced learning resources</span>
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
                    <span className="text-gray-700">Mentoring by past winners and experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <h3 className="text-2xl font-semibold mb-4">Ready to Compete?</h3>
                <p className="mb-4">
                  We encourage all students to participate in competitions that match their interests and abilities.
                  Competitions help develop critical thinking, time management, and performance under pressure.
                </p>
                <p>
                  Speak to your subject teachers or visit the Competition Coordination Office to learn more about
                  upcoming opportunities.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/10 p-6 rounded-full">
                  <svg className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competitions