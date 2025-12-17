"use client"

import { useState } from "react"
import { Star, Users, Clock, Award, ChevronRight } from "lucide-react"

export default function DanceSection() {
  const [selectedStyle, setSelectedStyle] = useState("classical")

  const danceStyles = [
    {
      id: "classical",
      name: "Classical Dance",
      description: "Traditional forms including Bharatanatyam, Kathak, and Odissi",
      color: "bg-gradient-to-br from-amber-600 to-orange-700",
      image: "/dance-classical.jpg",
      techniques: ["Mudras & Expressions", "Rhythmic Patterns", "Storytelling", "Cultural Heritage"],
      levels: ["Foundation", "Intermediate", "Advanced", "Professional"],
      ageGroups: "Ages 6+",
      duration: "90 minutes",
    },
    {
      id: "contemporary",
      name: "Contemporary Dance",
      description: "Modern expression combining various dance techniques",
      color: "bg-gradient-to-br from-rose-600 to-pink-700",
      image: "/dance-contemporary.jpg",
      techniques: ["Floor Work", "Improvisation", "Emotional Expression", "Creative Movement"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      ageGroups: "Ages 8+",
      duration: "60 minutes",
    },
    {
      id: "folk",
      name: "Folk Dance",
      description: "Regional and cultural folk dances from around the world",
      color: "bg-gradient-to-br from-emerald-600 to-teal-700",
      image: "/dance-folk.jpg",
      techniques: ["Cultural Steps", "Group Formations", "Traditional Costumes", "Festival Celebrations"],
      levels: ["All Levels"],
      ageGroups: "Ages 5+",
      duration: "45 minutes",
    },
    {
      id: "western",
      name: "Western Dance",
      description: "Hip-hop, jazz, ballet, and contemporary western styles",
      color: "bg-gradient-to-br from-purple-600 to-indigo-700",
      image: "/dance-western.jpg",
      techniques: ["Hip-Hop Moves", "Jazz Techniques", "Ballet Basics", "Street Dance"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      ageGroups: "Ages 7+",
      duration: "60 minutes",
    },
  ]

  const achievements = [
    { title: "State Championship", year: "2024", category: "Classical Dance", icon: "🏆" },
    { title: "National Folk Festival", year: "2024", category: "Folk Dance", icon: "🥇" },
    { title: "Inter-School Competition", year: "2023", category: "Contemporary", icon: "⭐" },
    { title: "Cultural Excellence Award", year: "2023", category: "Overall Performance", icon: "🎖️" },
  ]

  const instructors = [
    {
      name: "Dr. Priya Sharma",
      specialization: "Bharatanatyam & Kathak",
      experience: "15 years",
      credentials: "Sangeet Visharad, PhD in Dance",
      image: "/instructor-priya.jpg",
    },
    {
      name: "Ms. Sarah Johnson",
      specialization: "Contemporary & Jazz",
      experience: "10 years",
      credentials: "Royal Academy of Dance Certified",
      image: "/instructor-sarah.jpg",
    },
    {
      name: "Mr. Rajesh Kumar",
      specialization: "Folk & Regional Dance",
      experience: "12 years",
      credentials: "Master in Performing Arts",
      image: "/instructor-rajesh.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            <span className="font-bold">DANCE</span> PROGRAMS
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Express yourself through the language of movement and discover the rich traditions of dance from around the
            world
          </p>
        </div>

        {/* Dance Style Selector */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {danceStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedStyle === style.id
                    ? "bg-slate-800 text-white scale-105 shadow-xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>

          {/* Selected Style Details */}
          {danceStyles.map((style) => (
            <div
              key={style.id}
              className={`transition-all duration-500 ${selectedStyle === style.id ? "block" : "hidden"}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto">
                    <img
                      src={style.image || "/placeholder.svg?height=500&width=700"}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${style.color} opacity-30`}></div>
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
                      <span className="font-bold text-gray-800">{style.name}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{style.name}</h3>
                    <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">{style.description}</p>

                    {/* Class Details */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Users className="w-6 h-6 text-slate-600" />
                          <span className="font-semibold text-gray-800">Age Groups</span>
                        </div>
                        <span className="text-gray-600">{style.ageGroups}</span>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-6 h-6 text-slate-600" />
                          <span className="font-semibold text-gray-800">Duration</span>
                        </div>
                        <span className="text-gray-600">{style.duration}</span>
                      </div>
                    </div>

                    {/* Techniques */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">Key Techniques:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {style.techniques.map((technique, index) => (
                          <div
                            key={index}
                            className="bg-slate-100 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium text-center hover:bg-slate-200 transition-colors duration-200"
                          >
                            {technique}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Levels */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">Available Levels:</h4>
                      <div className="flex flex-wrap gap-3">
                        {style.levels.map((level, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dance Studios */}
        <div className="mb-16">
          <h3 className="text-4xl font-light text-center text-gray-800 mb-12">
            Our <span className="font-bold">Dance Studios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="/dance-studio-1.jpg" alt="Classical Dance Studio" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Classical Studio</h4>
                <p className="text-gray-600 mb-6 font-light">
                  Traditional setup with mirrors, barres, and cultural ambiance
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    Sprung wooden floors
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    Full-wall mirrors
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    Sound system with traditional music
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    Cultural decorations
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="/dance-studio-2.jpg" alt="Contemporary Dance Studio" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Contemporary Studio</h4>
                <p className="text-gray-600 mb-6 font-light">
                  Modern space designed for creative movement and expression
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                    Marley dance floors
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                    Adjustable lighting
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                    Professional sound system
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                    Open space for floor work
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img src="/dance-studio-3.jpg" alt="Multi-purpose Dance Studio" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Multi-Purpose Studio</h4>
                <p className="text-gray-600 mb-6 font-light">
                  Versatile space for folk, western, and group performances
                </p>
                <ul className="text-sm text-gray-600 space-y-2 font-light">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Flexible flooring system
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Portable equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Video recording setup
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    Costume storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-12 shadow-2xl text-white">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light mb-6">
                Dance <span className="font-bold">Achievements</span>
              </h3>
              <p className="text-xl opacity-90 font-light">Celebrating our students' outstanding performances</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold mb-3">{achievement.title}</h4>
                  <p className="text-amber-400 font-semibold mb-2">{achievement.year}</p>
                  <p className="text-sm opacity-80 font-light">{achievement.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructors */}
        <div>
          <h3 className="text-4xl font-light text-center text-gray-800 mb-12">
            Our <span className="font-bold">Dance Faculty</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={instructor.image || "/placeholder.svg?height=300&width=400"}
                  alt={instructor.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h4>
                  <p className="text-slate-600 font-semibold mb-4">{instructor.specialization}</p>
                  <div className="space-y-3 text-sm text-gray-600 font-light">
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span>{instructor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-slate-500" />
                      <span>{instructor.credentials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
