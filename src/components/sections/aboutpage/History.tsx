import type React from "react"
import { cld } from "../../../utils/cloudinary";

const History: React.FC = () => {
  return (
    <section id="our-story" className="py-10 my-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            <span className="relative inline-block">Our History
              <img
                src="/Images/Doodles/LinePink.png"
                alt="Underline"
                className="w-[80%] absolute left-8 -bottom-4 sm:-bottom-6 md:-bottom-8"
              />
            </span>
          </h2>
        </div> */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div className="space-y-6 font-inter text-lg">

            <h3 className="text-2xl max-w-5xl font-playpen font-semibold text-primarydark italic">
              "With your first step in MCS campus, there is immediately a sense that it is more than just a school"
            </h3>

            <p className="text-gray-700">
              Montessori Cambridge School was founded in 1997 away from the dins of the city for the benefit of the
              children of Pathankot and the neighbouring extensions.
            </p>

            <p className="text-gray-700">
              We are an English-Medium Co-Educational Boarding and Day-Boarding school recognised by the Central Board
              of Secondary Education. The school year begins in April and ends in March of the following year. The
              academic grades at school range from Pre-Nursery to Grade 12th. The course of study is arranged according
              to the syllabus laid down by C.B.S.E and also in accordance with the state government guidelines.
            </p>

            <p className="text-gray-700">
              With a profusion of multitudinous highly recognised awards under the hat of our School, today, we are one
              of the top most progressive schools in the Tri-City Region and all the nearing districts as well.
            </p>

            <p className="text-gray-700">
              Our school has a strength of student fraternity from varying backgrounds and cities, a team of well
              qualified, efficient, experienced and dedicated staff of more than 120 teachers, more than 50 non-teaching
              staff working under the able guidance of the School Management and Principal.
            </p>

            <p className="text-gray-700">
              The diverse atmosphere at the school is truly a feeling to behold as our students belong from beyond the
              borders of Punjab going up-to 4 northern states.
            </p>

          </div>

          <div className="sticky top-50 w-full max-h-fit overflow-hidden rounded-2xl shadow-xl">
            <img
              src={cld("SampleImage_nefv5n")}
              alt="MCS School Building"
              className="w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10"></div> */}
          </div>
        </div>

        <div className="w-full my-20">
          <video
            className="w-full h-full rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Videos/Mcs2023.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div className="sticky top-40 w-full max-h-fit overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Images/About/Beauty3.JPG"
              alt="MCS School Building"
              className="w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10"></div> */}
          </div>

          <div className="space-y-6 font-inter text-lg">

            <h3 className="text-2xl max-w-5xl font-playpen font-semibold text-primarydark italic">
              "An environment where every learning experience is surrounded by Beauty, Peace, and Inspiration"
            </h3>

            <p className="text-gray-700">
              The school is located at Defence Road, Pathankot, one of the prestigious outdoor localities of Pathankot city that houses a large number of highly qualified citizens.
            </p>

            <p className="text-gray-700">
              The school is spread on a vast stretch of 15 acres and exceeding land with lush green lawns, spacious and well-ventilated classrooms, several fully equipped laboratories, massive hygienic refectory with round the clock meals.
            </p>

            <p className="text-gray-700">
              The school has the city below and the nature all across. So, a casual glance out of a classroom window may well find eyes rest on an exquisite scenic beauty, adorned with birds, parrots and cheerful environment.
            </p>

            <p className="text-gray-700">
              Amidst such surroundings, tranquil yet with so much to tell, academics take added dimensions. Here academic striving encompasses a life-long thirst for scholarship and curiosity.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/Beauty2.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">

              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Green Spaces</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/HM3.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Spacious Classrooms</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/Beauty1.JPG"
              alt="Virtual reality learning session"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Scenic Beauty</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div className="space-y-6 font-inter text-lg">

            <h3 className="text-2xl max-w-5xl font-playpen font-semibold text-primarydark italic">
              "Where young minds take shape—with strong values, joyful learning, and a spark of curiosity that lasts a lifetime."
            </h3>

            <p className="text-gray-700">
              The Academic Infrastructure in campus is divided into three main buildings – ‘Kindergarten Wing’, ‘Primary Wing’ and ‘Middle – Secondary – Senior Secondary Wing’ in increasing order of the covered area respectively. Our campus provides an ideal atmosphere for learners to acquire and imbibe skills necessary for their physical, mental, social and intellectual development.
            </p>

            <p className="text-gray-700">
              A variety of activities are offered as an integral part of the curriculum to provide each student an opportunity to develop a wholesome personality.
            </p>

            <p className="text-gray-700">
              Inter House, Intra Class competitions ensure the students absorb a healthy, competitive spirit and loyalty to their respective houses or classes. Debates, Dramatics, Choral Singing, Elocution, Math Wizard, Spelling Bee, Creative Writing and Team Games are some of the activities which observe frequent participation of students.
            </p>

            <p className="text-gray-700">
              There are vast playgrounds which accommodate Basketball, Lawn- Tennis, Volleyball, Cricket, Football and many other athletic facilities along with numerous indoor activity halls catering to Dance, Music, Yoga, Taekwondo, Table Tennis.
            </p>

            <p className="text-gray-700">
              The school also offers a large state- level Swimming Pool hosting several year on year State-Level and North-Zonal Championships. With plethora of infrastructural facilities and constantly growing new dimensions within the campus, we promise you the best.
            </p>
          </div>

          <div className="sticky top-40 w-full max-h-fit overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Images/About/HM1.JPG"
              alt="MCS School Building"
              className="w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10"></div> */}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/Curiosity1.JPG"
              alt="Interactive digital whiteboard in classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">

              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Laying the Academic Bedrock</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/Curiosity2.JPG"
              alt="Students using tablets in classroom"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Modern Infrastructure</h3>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-xl shadow-lg">
            <img
              src="/Images/About/Curiosity3.JPG"
              alt="Virtual reality learning session"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent flex p-6">
              <h3 className="text-white text-xl font-poppins font-semibold tracking-wider mt-1">Learning Beyond Books</h3>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  )
}

export default History