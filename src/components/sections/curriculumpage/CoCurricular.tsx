const CoCurricular = () => {
  const activities = [
    {
      title: "Robotics Club",
      description:
        "Students learn to design, build, and program robots, participating in national and international competitions.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Tuesdays and Thursdays, 3:30 PM - 5:00 PM",
    },
    {
      title: "Debate and Public Speaking",
      description:
        "Develop critical thinking, research skills, and confident communication through regular debates and competitions.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Mondays, 3:30 PM - 5:00 PM",
    },
    {
      title: "Model United Nations",
      description: "Students simulate UN committees, representing different countries and addressing global issues.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Wednesdays, 3:30 PM - 5:00 PM",
    },
    {
      title: "Eco Club",
      description:
        "Promoting environmental awareness through conservation projects, recycling initiatives, and sustainability campaigns.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Fridays, 3:30 PM - 5:00 PM",
    },
    {
      title: "Literary Club",
      description:
        "Fostering a love for literature through book discussions, creative writing workshops, and publishing a school magazine.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Tuesdays, 3:30 PM - 5:00 PM",
    },
    {
      title: "STEM Innovation Lab",
      description: "Hands-on experiments and projects in science, technology, engineering, and mathematics.",
      image: "/Images/Campus/NewHostel.JPG",
      schedule: "Thursdays, 3:30 PM - 5:00 PM",
    },
  ]

  return (
    <section id="co-curricular" className="my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Co-curricular <span className="relative inline-block">Activities
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-7 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            We believe in holistic development through a wide range of co-curricular activities
          </p>
        </div>
         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2 tracking-wide">{activity.title}</h3>
                  <p className="text-gray-700 mb-4 font-inter">{activity.description}</p>
                  <div className="text-sm text-gray-600 flex items-center font-inter">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {activity.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-6 tracking-wide">Benefits of Co-curricular Activities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-primarydark text-lg">Leadership Development</h4>
                  <p className="text-gray-700 text-base font-inter">
                    Students learn to lead teams and projects, developing essential leadership skills
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-primarydark text-lg">Time Management</h4>
                  <p className="text-gray-700 text-base font-inter">
                    Balancing academics and activities teaches effective time management
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-primarydark text-lg">Skill Development</h4>
                  <p className="text-gray-700 text-base font-inter">
                    Students develop specialized skills that complement academic learning
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-primarydark text-lg">College Applications</h4>
                  <p className="text-gray-700 text-base font-inter">
                    Strong co-curricular profiles enhance college and university applications
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default CoCurricular
