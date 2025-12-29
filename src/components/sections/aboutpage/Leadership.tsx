import type React from "react"

const Leadership: React.FC = () => {
  // Leadership team data
  const leaders = [
    {
      name: "Mr. Vinod Kumar",
      position: "Chairperson",
      image: "/Images/Heros/samplehero.JPG",
      bio: "The school owes its inception to the profound vision of its esteemed Founder and Chairperson – Mr. Vinod Kumar – whose strenuous efforts, selfless devotion, dynamic philosophy and passion for providing quality education – has not only given the city the most reliable, desirable and preferred school but surpassing countless challenges with unfailing diligence to evolve the school holistically in all the spheres. His mission is to cater school education as a powerful weapon to bring changes in the nationwide social and economic milieu. The school has discerned marvelous growth through the years in contemplation and nostalgia with every stone and foundation laid under the direction of Mr. Kumar. The entire school fraternity owes to the hardships and inexhaustible promising attitude of our founder chairperson.",
    },
    {
      name: "Mr. Akash Mahajan",
      position: "Vice Chairperson",
      image: "/Images/Heros/samplehero.JPG",
      bio: "Under the unique endeavor of honourable Vice-Chairperson – Mr. Akash Mahajan – the school has taken a bounce from traditional methods of teaching – to – modern methods of digital pedagogy. From re-structuring and planning of several different spheres of academic and non-academic departments, ranging from the 21st Century Classrooms, Play-Areas, Accommodation to Modernization of Workmanship, Maturing of Internal and External, Financial and Non-Financial School Affairs and bringing the school to the forefront, accessible to thousands of people pan India via technology integration. Prudent, precise and a person of few words, he has contributed immensely to the development of school into an outstanding institution with an established focus on inculcation of discipline and professionalism.",
    },
    {
      name: "Mrs. Rashmi Ahluwalia",
      position: "Principal/Director",
      image: "/Images/Heros/samplehero.JPG",
      bio: "With the truly assiduous and meticulous enlightenment of highly revered School Principal – Mrs. Rashmi Ahluwalia, the school in all horizons has caught the sight of enormous development. As an educationist, she sees her goal as the overall development of child and adaptability to the challenges of modern era. She provides a balanced emphasis on academics, extra-curricular activities and also training for competitive examinations with a view to make the students intellectually competent, physically sound and socially mindful individuals. She creates an ideal atmosphere for learners including teachers, non-academic staff and students to acquire and imbibe skills necessary for their physical, mental, social and intellectual development. In recognition of her outstanding contribution towards the cause of education, Mrs. Ahluwalia was honoured with National Award – 2015 by the President of India. She has also been conferred with Best Principal Award, Best Educationist Award and several other noteworthy recognitions at both State and National level for last ten consecutive years.",
    },
  ]

  return (
    <section id="our-leadership" className="py-4 sm:py-10 my-10 bg-white">
      <div className="mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Our Visionary{" "}
            <span className="relative inline-block">
              Leadership
              {/* Spark Doodle */}
              <img
                src="/Images/Doodles/SparkPurple.png"
                alt="Spark"
                className="absolute w-10 sm:w-12 md:w-14 -top-6 md:-top-8 -right-12 md:-right-15"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated leaders & visionary educators shaping the future of Montessori Cambridge School.
          </p>
        </div>


        <div className="mb-8 sm:mb-12 lg:mb-16 bg-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-sm font-inter text-base sm:text-lg">
          <p className="text-gray-700">
            Montessori Cambridge School, Pathankot is overseen by our leaders who are heavily invested in the school.
            Coming from a range of backgrounds with all being very successful in their fields, our leaders comprise of
            <b> our Esteemed Chairperson – Mr. Vinod Kumar, Honorable Vice Chairperson – Mr. Akash Mahajan, and Revered
              Principal/Director – Mrs. Rashmi Ahluwalia.</b>
          </p>
          <p className="mt-4 text-gray-700">
            This mix of experience is clearly evident by the drive and passion they have for success in the school as a
            community, alongside individual success for our pupils and teachers.
          </p>
          <p className="mt-4 text-gray-700">
            Ever since the blossoming of our first stone in Pathankot, in the year 1997, we have impacted thousands of
            lives, setting a new benchmark for quality of education. Our leaders believe in <b>"Shaping minds, Touching
              lives, Building Second Homes".</b>
          </p>
          <p className="mt-4 text-gray-700">
            Along with academic excellence, our leaders also lay a strong emphasis on personality development and employ
            a number of innovative ways to inculcate strong values, building responsible individuals and future-ready
            global citizens.
          </p>
        </div>

        {/* Leadership profiles */}
        <div className="space-y-12 sm:space-y-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 xl:gap-8 items-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-10 transform scale-110 animate-pulse"></div>
                  <div className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-blue-600 z-10">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-1 sm:mb-2">{leader.name}</h3>
                <p className="text-lg sm:text-xl text-primary font-inter font-semibold mb-3 sm:mb-4">{leader.position}</p>
                <p className="text-gray-700 font-inter text-base sm:text-lg">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
