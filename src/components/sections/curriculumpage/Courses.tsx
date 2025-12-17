"use client"

import React, { useState } from "react"

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Grade I–V")

  const tabs = ["Grade I–V", "Grade VI–VIII", "Grade IX–X", "Grade XI–XII"]

  // Define color palette for cards
  const colorClasses = [
    "bg-fuchsia-100 border-fuchsia-200 hover:shadow-fuchsia-200",
    "bg-sky-100 border-sky-200 hover:shadow-sky-200",
    "bg-lime-100 border-lime-200 hover:shadow-lime-200",
    "bg-amber-100 border-amber-200 hover:shadow-amber-200",
    "bg-indigo-100 border-indigo-200 hover:shadow-indigo-200",
    "bg-purple-100 border-purple-200 hover:shadow-purple-200",
  ]

  const coursesData: Record<string, any> = {
    "Grade I–V": {
      title: "Primary School (Grades 1–5)",
      desc: "Our primary curriculum focuses on core academic skills while nurturing curiosity, creativity, and confidence.",
      courses: [
        {
          name: "English",
          description:
            "Develops reading, writing, and speaking skills through stories, poems, and creative exercises.",
          components: [
            "Reading Comprehension",
            "Creative Writing",
            "Grammar & Vocabulary",
            "Speaking & Listening",
          ],
        },
        {
          name: "Mathematics",
          description:
            "Builds a strong foundation in numerical understanding and logical thinking.",
          components: [
            "Number System",
            "Geometry",
            "Measurement",
            "Data Handling",
            "Patterns & Algebra",
          ],
        },
        {
          name: "Science",
          description:
            "Introduces scientific observation and experimentation through fun, hands-on learning.",
          components: [
            "Living Things",
            "Materials & Matter",
            "Earth & Space",
            "Physical Phenomena",
          ],
        },
        {
          name: "Social Studies",
          description:
            "Explores history, geography, and civics to understand society and environment.",
          components: [
            "History",
            "Geography",
            "Civics",
            "Cultural Studies",
            "Environmental Awareness",
          ],
        },
      ],
    },

    "Grade VI–VIII": {
      title: "Middle School (Grades 6–8)",
      desc: "Middle School strengthens conceptual understanding while fostering independent thinking and analytical learning.",
      courses: [
        {
          name: "English Literature",
          description:
            "Enhances comprehension, grammar, and expression through literature and composition.",
          components: [
            "Literature Study",
            "Creative Writing",
            "Grammar Skills",
            "Oral Communication",
          ],
        },
        {
          name: "Mathematics",
          description:
            "Builds abstract reasoning and mathematical fluency for real-world problem solving.",
          components: [
            "Algebra",
            "Geometry",
            "Mensuration",
            "Data Handling",
            "Integers & Equations",
          ],
        },
        {
          name: "Science",
          description:
            "Encourages curiosity through experiments and deep dives into Physics, Chemistry, and Biology.",
          components: [
            "Physics",
            "Chemistry",
            "Biology",
            "Laboratory Skills",
            "Scientific Inquiry",
          ],
        },
        {
          name: "Social Science",
          description:
            "Promotes critical understanding of human societies, governments, and the planet.",
          components: [
            "History",
            "Geography",
            "Civics",
            "Economics",
            "Contemporary Issues",
          ],
        },
      ],
    },

    "Grade IX–X": {
      title: "Secondary School (Grades 9–10)",
      desc: "Secondary School prepares students for board examinations with subject mastery and analytical rigor.",
      courses: [
        {
          name: "English Language & Literature",
          description:
            "Develops advanced comprehension, literary appreciation, and articulate communication.",
          components: [
            "Literature Analysis",
            "Advanced Grammar",
            "Essay & Letter Writing",
            "Public Speaking",
          ],
        },
        {
          name: "Mathematics",
          description:
            "Strengthens conceptual clarity through problem-solving and logical reasoning.",
          components: [
            "Algebra",
            "Trigonometry",
            "Geometry",
            "Statistics",
            "Probability",
          ],
        },
        {
          name: "Science",
          description:
            "Integrates Physics, Chemistry, and Biology for practical, application-based learning.",
          components: [
            "Scientific Investigation",
            "Experiments",
            "Data Analysis",
            "Applied Learning",
          ],
        },
        {
          name: "Social Studies",
          description:
            "Encourages understanding of the world through history, geography, civics, and economics.",
          components: [
            "World History",
            "Indian Geography",
            "Political Science",
            "Economics",
          ],
        },
      ],
    },
    "Grade XI–XII": {
      title: "Senior Secondary School (Grades 11–12)",
      desc: "Senior Secondary offers specialized academic streams preparing students for higher studies and careers.",
      courses: [
        {
          name: "English Language & Literature",
          description:
            "Develops advanced comprehension, literary appreciation, and articulate communication.",
          components: [
            "Literature Analysis",
            "Advanced Grammar",
            "Essay & Letter Writing",
            "Public Speaking",
          ],
        },
        {
          name: "Medical",
          description:
            "Strengthens conceptual clarity through problem-solving and logical reasoning.",
          components: [
            "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science",
          ],
        },
        {
          name: "Non-medical",
          description:
            "Integrates Physics, Chemistry, and Biology for practical, application-based learning.",
          components: [
            "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science",
          ],
        },
        {
          name: "Commerce",
          description:
            "Encourages understanding of the world through history, geography, civics, and economics.",
          components: [
            "Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices",
          ],
        },
        {
          name: "Humanities",
          description:
            "Encourages understanding of the world through history, geography, civics, and economics.",
          components: [
            "History", "Political Science", "Geography", "Psychology", "Sociology", "Fine Arts",
          ],
        },
      ],
    },
  }

  const current = coursesData[activeTab]

  return (
    <section id="courses" className="my-10 py-12 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Academic Courses{" "}
            <span className="relative inline-block">
              & Curriculum
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[70%] left-12 -bottom-4 sm:-bottom-6 lg:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive academic framework designed to build knowledge, character, and curiosity at every grade level.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-base transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="transition-all duration-300 ease-in-out">
          <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-3 text-center">
            {current.title}
          </h3>
          <p className="text-gray-700 text-center font-inter mb-10 max-w-4xl mx-auto">
            {current.desc}
          </p>

          {/* For Regular Courses */}
          {current.courses && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.courses.map((course: any, i: number) => (
                <div
                  key={i}
                  className={`rounded-xl border p-8 shadow-sm hover:shadow-md transition-all duration-300 ${colorClasses[i % colorClasses.length]}`}
                >
                  <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                    {course.name}
                  </h4>
                  <p className="text-gray-700 font-inter mb-3">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {course.components.map((comp: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-white/70 text-gray-800 text-sm px-4 py-2 rounded-full font-medium border border-gray-100"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* For Streams */}
          {current.streams && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.streams.map((stream: any, i: number) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${stream.color}`}
                >
                  <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-3 tracking-wide">
                    {stream.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.subjects.map((subject: string, j: number) => (
                      <span
                        key={j}
                        className="bg-white/70 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses







// import type React from "react"

// const Courses: React.FC = () => {
//   // Course offerings
//   const courses = [
//     {
//       level: "Primary School (Grades 1-5)",
//       description:
//         "Our primary school curriculum focuses on building strong foundations in core subjects while nurturing curiosity, creativity, and a love for learning.",
//       courses: [
//         {
//           name: "English",
//           description:
//             "Develops reading, writing, speaking, and listening skills through literature, grammar, vocabulary, and creative expression.",
//           components: ["Reading Comprehension", "Creative Writing", "Grammar & Vocabulary", "Speaking & Listening"],
//         },
//         {
//           name: "Mathematics",
//           description:
//             "Builds strong numerical foundations, logical thinking, and problem-solving skills through concrete and abstract mathematical concepts.",
//           components: ["Number System", "Geometry", "Measurement", "Data Handling", "Patterns & Algebra"],
//         },
//         {
//           name: "Science",
//           description:
//             "Introduces scientific concepts through observation, experimentation, and inquiry-based learning approaches.",
//           components: [
//             "Living Things",
//             "Materials & Matter",
//             "Earth & Space",
//             "Physical Phenomena",
//             "Scientific Inquiry",
//           ],
//         },
//         {
//           name: "Social Studies",
//           description:
//             "Explores history, geography, civics, and cultures to develop understanding of the world and society.",
//           components: ["History", "Geography", "Civics", "Cultural Studies", "Environmental Awareness"],
//         },
//         {
//           name: "Hindi/Regional Language",
//           description:
//             "Develops proficiency in the regional language through reading, writing, speaking, and appreciation of literature.",
//           components: ["Reading & Comprehension", "Writing Skills", "Grammar", "Literature Appreciation"],
//         },
//         {
//           name: "Computer Science",
//           description: "Introduces basic computer skills, digital literacy, and foundational programming concepts.",
//           components: ["Basic Computer Skills", "Digital Literacy", "Introduction to Coding", "Cyber Safety"],
//         },
//         {
//           name: "Art & Craft",
//           description:
//             "Nurtures creativity and artistic expression through various visual art forms and craft activities.",
//           components: ["Drawing & Painting", "Craft", "Art Appreciation", "Creative Expression"],
//         },
//         {
//           name: "Physical Education",
//           description:
//             "Promotes physical fitness, motor skills development, and healthy lifestyle through various activities.",
//           components: ["Physical Fitness", "Games & Sports", "Movement Skills", "Health & Hygiene"],
//         },
//         {
//           name: "Music & Dance",
//           description:
//             "Introduces students to various forms of music and dance, developing appreciation and basic skills.",
//           components: ["Vocal Music", "Instrumental Music", "Folk & Classical Dance", "Movement & Rhythm"],
//         },
//         {
//           name: "Value Education",
//           description: "Focuses on character development, values, ethics, and social-emotional learning.",
//           components: ["Character Education", "Social Skills", "Emotional Intelligence", "Ethics & Values"],
//         },
//       ],
//     },
//     {
//       level: "Middle School (Grades 6-8)",
//       description:
//         "Our middle school curriculum builds on the primary foundation and introduces more specialized subjects, encouraging critical thinking and independent learning.",
//       courses: [
//         {
//           name: "English Language & Literature",
//           description:
//             "Advances language skills through complex texts, creative and analytical writing, and effective communication.",
//           components: ["Literature Analysis", "Advanced Grammar", "Creative & Analytical Writing", "Public Speaking"],
//         },
//         {
//           name: "Mathematics",
//           description: "Develops advanced mathematical concepts, abstract thinking, and problem-solving strategies.",
//           components: ["Algebra", "Geometry", "Mensuration", "Data Handling", "Commercial Mathematics"],
//         },
//         {
//           name: "Science (Physics, Chemistry, Biology)",
//           description:
//             "Introduces specialized scientific disciplines with a focus on conceptual understanding and practical applications.",
//           components: ["Physics", "Chemistry", "Biology", "Scientific Methods", "Laboratory Skills"],
//         },
//         {
//           name: "Social Studies",
//           description:
//             "Explores history, geography, civics, and economics in greater depth with critical analysis of events and systems.",
//           components: ["History", "Geography", "Civics & Political Science", "Economics", "Contemporary Issues"],
//         },
//         {
//           name: "Hindi/Regional Language",
//           description:
//             "Advances proficiency in the regional language with focus on literature, advanced grammar, and creative expression.",
//           components: ["Advanced Grammar", "Literature", "Creative Writing", "Oral Expression"],
//         },
//         {
//           name: "Third Language (Sanskrit/French/German)",
//           description: "Introduces a third language, developing basic communication skills and cultural appreciation.",
//           components: ["Basic Vocabulary", "Grammar Fundamentals", "Simple Conversations", "Cultural Context"],
//         },
//         {
//           name: "Computer Science",
//           description:
//             "Advances digital skills with introduction to programming, digital design, and computational thinking.",
//           components: ["Programming Basics", "Digital Design", "Internet & Web", "Data Management"],
//         },
//         {
//           name: "Art Education",
//           description: "Develops artistic skills and appreciation through various visual and performing arts.",
//           components: ["Visual Arts", "Performing Arts", "Art History & Appreciation", "Creative Projects"],
//         },
//         {
//           name: "Physical Education",
//           description: "Focuses on sports skills, fitness, teamwork, and healthy lifestyle choices.",
//           components: ["Team Sports", "Individual Sports", "Fitness & Health", "Adventure Activities"],
//         },
//         {
//           name: "Life Skills & Value Education",
//           description: "Develops essential life skills, values, and social-emotional competencies for personal growth.",
//           components: ["Decision Making", "Communication Skills", "Emotional Management", "Social Responsibility"],
//         },
//       ],
//     },
//     {
//       level: "Secondary School (Grades 9-10)",
//       description:
//         "Our secondary curriculum prepares students for board examinations while developing deeper subject knowledge and analytical skills in preparation for higher studies.",
//       courses: [
//         {
//           name: "English Language & Literature",
//           description:
//             "Comprehensive study of language and literature with focus on critical analysis, advanced writing, and effective communication.",
//           components: ["Literature Analysis", "Advanced Writing Skills", "Grammar & Usage", "Oral Communication"],
//         },
//         {
//           name: "Mathematics",
//           description:
//             "Advanced mathematical concepts and applications with focus on problem-solving and analytical thinking.",
//           components: ["Algebra", "Geometry", "Trigonometry", "Statistics & Probability", "Coordinate Geometry"],
//         },
//         {
//           name: "Science (Physics, Chemistry, Biology)",
//           description: "In-depth study of scientific disciplines with theoretical concepts and practical applications.",
//           components: ["Physics", "Chemistry", "Biology", "Scientific Investigations", "Practical Skills"],
//         },
//         {
//           name: "Social Studies",
//           description:
//             "Comprehensive study of history, geography, political science, and economics with focus on critical analysis.",
//           components: ["History", "Geography", "Political Science", "Economics", "Contemporary World"],
//         },
//         {
//           name: "Hindi/Regional Language",
//           description:
//             "Advanced study of language and literature with focus on comprehension, expression, and appreciation.",
//           components: ["Literature", "Advanced Grammar", "Creative & Analytical Writing", "Comprehension"],
//         },
//         {
//           name: "Information Technology",
//           description: "Develops advanced digital skills, programming, and understanding of information systems.",
//           components: ["Programming", "Web Development", "Database Management", "Digital Applications"],
//         },
//         {
//           name: "Physical Education",
//           description: "Focuses on sports specialization, fitness, health education, and sports theory.",
//           components: ["Sports Specialization", "Fitness & Training", "Health Education", "Sports Theory"],
//         },
//         {
//           name: "Art Education",
//           description:
//             "Advanced artistic skills and appreciation with opportunities for specialization in chosen art forms.",
//           components: ["Specialized Art Forms", "Portfolio Development", "Art History", "Exhibition & Presentation"],
//         },
//         {
//           name: "Work Experience",
//           description: "Practical skills and vocational exposure to develop workplace readiness and career awareness.",
//           components: ["Vocational Skills", "Career Exploration", "Project Work", "Community Service"],
//         },
//       ],
//     },
//     {
//       level: "Senior Secondary School (Grades 11-12)",
//       description:
//         "Our senior secondary curriculum offers specialized streams to prepare students for higher education and future careers with in-depth subject knowledge and skills.",
//       streams: [
//         {
//           name: "Science Stream",
//           subjects: [
//             {
//               name: "Physics",
//               description:
//                 "Advanced study of physical phenomena, laws, and theories with practical applications and problem-solving.",
//               components: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
//             },
//             {
//               name: "Chemistry",
//               description:
//                 "In-depth study of chemical principles, reactions, and applications with theoretical and practical components.",
//               components: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Analytical Methods"],
//             },
//             {
//               name: "Mathematics",
//               description:
//                 "Advanced mathematical concepts, proofs, and applications preparing for engineering and scientific careers.",
//               components: ["Calculus", "Algebra", "Coordinate Geometry", "Vectors", "Probability & Statistics"],
//             },
//             {
//               name: "Biology",
//               description:
//                 "Comprehensive study of life sciences with focus on structure, function, genetics, and ecology.",
//               components: ["Cell Biology", "Genetics", "Human Physiology", "Plant Physiology", "Ecology & Evolution"],
//             },
//             {
//               name: "English",
//               description: "Advanced language skills with focus on communication, comprehension, and expression.",
//               components: ["Reading Comprehension", "Writing Skills", "Literature", "Communication Skills"],
//             },
//             {
//               name: "Computer Science (Optional)",
//               description: "Advanced programming, data structures, algorithms, and computer systems.",
//               components: ["Programming", "Data Structures", "Algorithms", "Database Systems", "Computer Networks"],
//             },
//           ],
//         },
//         {
//           name: "Commerce Stream",
//           subjects: [
//             {
//               name: "Accountancy",
//               description:
//                 "Principles and practices of accounting with focus on financial statements, analysis, and reporting.",
//               components: [
//                 "Financial Accounting",
//                 "Partnership Accounts",
//                 "Company Accounts",
//                 "Analysis of Statements",
//               ],
//             },
//             {
//               name: "Business Studies",
//               description: "Comprehensive study of business principles, management, and organizational behavior.",
//               components: ["Business Environment", "Management Principles", "Marketing", "Finance", "Entrepreneurship"],
//             },
//             {
//               name: "Economics",
//               description:
//                 "Study of economic theories, policies, and applications with focus on Indian and global economy.",
//               components: ["Microeconomics", "Macroeconomics", "Indian Economy", "Development Economics"],
//             },
//             {
//               name: "English",
//               description: "Advanced language skills with focus on communication, comprehension, and expression.",
//               components: ["Reading Comprehension", "Writing Skills", "Literature", "Communication Skills"],
//             },
//             {
//               name: "Mathematics (Optional)",
//               description: "Mathematical concepts and applications relevant to commerce and business analysis.",
//               components: ["Calculus", "Algebra", "Probability & Statistics", "Mathematical Modeling"],
//             },
//             {
//               name: "Informatics Practices (Optional)",
//               description: "Computer applications, database management, and programming for business solutions.",
//               components: ["Programming", "Database Management", "Web Applications", "Business Systems"],
//             },
//           ],
//         },
//         {
//           name: "Humanities Stream",
//           subjects: [
//             {
//               name: "History",
//               description:
//                 "In-depth study of Indian and world history with focus on events, movements, and historical analysis.",
//               components: ["Ancient History", "Medieval History", "Modern History", "World History"],
//             },
//             {
//               name: "Political Science",
//               description: "Study of political theories, systems, governance, and international relations.",
//               components: ["Political Theory", "Indian Constitution", "Governance", "International Relations"],
//             },
//             {
//               name: "Geography",
//               description:
//                 "Study of physical and human geography with focus on spatial analysis and environmental issues.",
//               components: ["Physical Geography", "Human Geography", "Indian Geography", "Practical Geography"],
//             },
//             {
//               name: "English",
//               description: "Advanced language skills with focus on communication, comprehension, and expression.",
//               components: ["Reading Comprehension", "Writing Skills", "Literature", "Communication Skills"],
//             },
//             {
//               name: "Economics",
//               description:
//                 "Study of economic theories, policies, and applications with focus on Indian and global economy.",
//               components: ["Microeconomics", "Macroeconomics", "Indian Economy", "Development Economics"],
//             },
//             {
//               name: "Psychology (Optional)",
//               description:
//                 "Study of human behavior, cognition, and mental processes with theoretical and practical components.",
//               components: [
//                 "Foundations of Psychology",
//                 "Human Development",
//                 "Social Psychology",
//                 "Psychological Disorders",
//               ],
//             },
//             {
//               name: "Sociology (Optional)",
//               description: "Study of society, social institutions, relationships, and cultural dynamics.",
//               components: ["Sociological Theories", "Indian Society", "Social Institutions", "Social Change"],
//             },
//             {
//               name: "Fine Arts (Optional)",
//               description:
//                 "Advanced study and practice of visual arts with focus on techniques, styles, and artistic expression.",
//               components: ["Drawing & Painting", "Sculpture", "Art History", "Portfolio Development"],
//             },
//           ],
//         },
//       ],
//     },
//   ]

//   return (
//     <section id="courses" className="pb-10 sm:pb-16 my-10 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center mb-16">
//           <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-3">
//             Academic Offerings
//           </span>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses</h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Comprehensive course offerings designed to provide a well-rounded education at every level
//           </p>
//         </div>

//         <div className="space-y-20">
//           {courses.map((level, levelIndex) => (
//             <div key={levelIndex}>
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.level}</h3>
//                 <p className="text-gray-700">{level.description}</p>
//               </div>

//               {level.courses && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {level.courses.map((course, courseIndex) => (
//                     <div
//                       key={courseIndex}
//                       className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
//                     >
//                       <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h4>
//                       <p className="text-gray-700 mb-4">{course.description}</p>
//                       <div>
//                         <p className="text-sm font-medium text-gray-500 mb-2">Key Components</p>
//                         <div className="flex flex-wrap gap-2">
//                           {course.components.map((component, componentIndex) => (
//                             <span
//                               key={componentIndex}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
//                             >
//                               {component}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {level.streams && (
//                 <div className="space-y-12">
//                   {level.streams.map((stream, streamIndex) => (
//                     <div key={streamIndex}>
//                       <h4 className="text-xl font-bold text-blue-800 mb-6 pb-2 border-b border-blue-200">
//                         {stream.name}
//                       </h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {stream.subjects.map((subject, subjectIndex) => (
//                           <div
//                             key={subjectIndex}
//                             className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
//                           >
//                             <h5 className="text-lg font-semibold text-gray-900 mb-2">{subject.name}</h5>
//                             <p className="text-gray-700 mb-4">{subject.description}</p>
//                             <div>
//                               <p className="text-sm font-medium text-gray-500 mb-2">Key Components</p>
//                               <div className="flex flex-wrap gap-2">
//                                 {subject.components.map((component, componentIndex) => (
//                                   <span
//                                     key={componentIndex}
//                                     className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
//                                   >
//                                     {component}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Educational Approach */}
//         <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-md">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Educational Approach</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                   />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Conceptual Understanding</h4>
//               <p className="text-gray-700">
//                 We focus on developing deep conceptual understanding rather than rote memorization, encouraging students
//                 to explore the 'why' behind the 'what' through inquiry-based learning approaches.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Learning</h4>
//               <p className="text-gray-700">
//                 We recognize that each student has unique learning styles, strengths, and areas for growth. Our approach
//                 incorporates differentiated instruction and personalized learning pathways to meet individual needs.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                   />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Perspective</h4>
//               <p className="text-gray-700">
//                 Our curriculum integrates global perspectives and cross-cultural understanding, preparing students to be
//                 informed and responsible global citizens who can navigate and contribute to an interconnected world.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <a
//             href="/academics/detailed-curriculum"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Download Detailed Course Descriptions
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="ml-2 -mr-1 h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Courses