const Sports = () => {
  const sportsFacilities = [
    {
      name: "Olympic-Size Swimming Pool",
      description: "Temperature-controlled pool with professional coaching for all levels",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Multi-Purpose Sports Complex",
      description: "Indoor courts for basketball, volleyball, badminton, and table tennis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Football Field",
      description: "FIFA-standard football field with natural grass and floodlights",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Cricket Ground",
      description: "Professional cricket pitch with practice nets and bowling machines",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Tennis Courts",
      description: "All-weather tennis courts with professional coaching",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Athletics Track",
      description: "400-meter track with facilities for all track and field events",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const achievements = [
    "National Champions in Under-17 Football (2023)",
    "State Champions in Swimming (2022, 2023)",
    "District Champions in Cricket (2023)",
    "Gold Medals in State Athletics Meet (2023)",
    "Winners of Inter-School Basketball Tournament (2022)",
  ]

  return (
    <section id="sports" className="my-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Sports</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We believe in the power of sports to build character, discipline, and teamwork
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Sports Facilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsFacilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg text-blue-700 mb-2">{facility.name}</h4>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Sports Programs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Regular Physical Education</h4>
                  <p className="text-gray-600">
                    Structured PE classes for all students focusing on fitness, skills, and sports fundamentals
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Sports Teams</h4>
                  <p className="text-gray-600">
                    Competitive teams in football, cricket, basketball, swimming, tennis, athletics, and more
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Professional Coaching</h4>
                  <p className="text-gray-600">
                    Expert coaches with national and international experience in various sports
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">Sports Scholarships</h4>
                  <p className="text-gray-600">Scholarships for exceptional athletes to nurture sporting talent</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Recent Achievements</h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-blue-700 mb-2">Annual Sports Events</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Annual Sports Day (December)</li>
                    <li className="text-gray-600">Inter-House Sports Tournament (Quarterly)</li>
                    <li className="text-gray-600">Swimming Gala (April)</li>
                    <li className="text-gray-600">Parents vs. Teachers Friendly Matches (October)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sports
