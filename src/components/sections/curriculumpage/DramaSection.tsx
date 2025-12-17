"use client"

import { useState } from "react"
import { Users, Star, ChevronRight } from "lucide-react"

export default function DramaSection() {
  const [selectedProgram, setSelectedProgram] = useState("theatre")

  const dramaPrograms = [
    {
      id: "theatre",
      name: "Theatre Arts",
      description: "Complete theatrical training from script to stage",
      color: "bg-gradient-to-br from-purple-600 to-indigo-700",
      modules: [
        {
          name: "Acting Fundamentals",
          description: "Basic acting techniques and character development",
          skills: ["Character Analysis", "Emotional Expression", "Voice Projection", "Stage Movement"],
        },
        {
          name: "Script Analysis",
          description: "Understanding and interpreting dramatic texts",
          skills: ["Text Analysis", "Character Motivation", "Scene Study", "Dramatic Structure"],
        },
        {
          name: "Stage Performance",
          description: "Live performance skills and stage presence",
          skills: ["Stage Presence", "Audience Engagement", "Improvisation", "Ensemble Work"],
        },
      ],
    },
    {
      id: "musical",
      name: "Musical Theatre",
      description: "Combining acting, singing, and dancing",
      color: "bg-gradient-to-br from-rose-600 to-pink-700",
      modules: [
        {
          name: "Triple Threat Training",
          description: "Acting, singing, and dancing integration",
          skills: ["Vocal Performance", "Dance Choreography", "Acting Through Song", "Character Consistency"],
        },
        {
          name: "Musical Numbers",
          description: "Performing songs within dramatic context",
          skills: ["Song Interpretation", "Musical Storytelling", "Harmony Singing", "Choreographed Movement"],
        },
        {
          name: "Production Skills",
          description: "Behind-the-scenes musical theatre work",
          skills: ["Music Direction", "Choreography Assistance", "Costume Design", "Set Design"],
        },
      ],
    },
    {
      id: "improv",
      name: "Improvisation",
      description: "Spontaneous performance and creative thinking",
      color: "bg-gradient-to-br from-emerald-600 to-teal-700",
      modules: [
        {
          name: "Improv Games",
          description: "Fun exercises to build spontaneity",
          skills: ["Quick Thinking", "Yes, And...", "Character Creation", "Scene Building"],
        },
        {
          name: "Comedy Techniques",
          description: "Timing, humor, and comedic performance",
          skills: ["Comic Timing", "Physical Comedy", "Verbal Wit", "Audience Interaction"],
        },
        {
          name: "Storytelling",
          description: "Creating narratives on the spot",
          skills: ["Narrative Structure", "Character Development", "Plot Progression", "Collaborative Storytelling"],
        },
      ],
    },
  ]

  const theatreSpaces = [
    {
      name: "Main Auditorium",
      capacity: "500 seats",
      features: ["Professional lighting", "Sound system", "Orchestra pit", "Backstage area"],
      description: "Our premier performance venue for major productions",
      image: "/theatre-main-auditorium.jpg",
    },
    {
      name: "Black Box Theatre",
      capacity: "100 seats",
      features: ["Flexible seating", "Intimate setting", "Experimental space", "Student-directed shows"],
      description: "Versatile space for experimental and student productions",
      image: "/theatre-black-box.jpg",
    },
    {
      name: "Rehearsal Studios",
      capacity: "30 students",
      features: ["Mirrored walls", "Piano access", "Props storage", "Costume area"],
      description: "Dedicated spaces for rehearsals and workshops",
      image: "/theatre-rehearsal-studio.jpg",
    },
  ]

  const recentProductions = [
    {
      title: "Romeo and Juliet",
      year: "2024",
      type: "Classical Drama",
      cast: "25 students",
      audience: "1,200+",
      image: "/production-romeo-juliet.jpg",
      awards: ["Best Student Production", "Outstanding Direction"],
    },
    {
      title: "The Lion King Jr.",
      year: "2024",
      type: "Musical Theatre",
      cast: "40 students",
      audience: "2,000+",
      image: "/production-lion-king.jpg",
      awards: ["Best Costume Design", "Audience Choice Award"],
    },
    {
      title: "A Midsummer Night's Dream",
      year: "2023",
      type: "Comedy",
      cast: "20 students",
      audience: "800+",
      image: "/production-midsummer.jpg",
      awards: ["Best Ensemble Performance"],
    },
  ]

  const dramaSkills = [
    { skill: "Confidence Building", description: "Overcoming stage fright and building self-assurance" },
    { skill: "Public Speaking", description: "Clear articulation and effective communication" },
    { skill: "Emotional Intelligence", description: "Understanding and expressing emotions" },
    { skill: "Teamwork", description: "Collaborative creation and ensemble work" },
    { skill: "Creativity", description: "Imaginative thinking and artistic expression" },
    { skill: "Critical Thinking", description: "Analyzing texts and making artistic choices" },
  ]

  const selectedProgramData = dramaPrograms.find((program) => program.id === selectedProgram)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            <span className="font-bold">DRAMA</span> & THEATRE
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Bring stories to life on stage and develop powerful communication skills through the art of theatre
          </p>
        </div>

        {/* Program Selection */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {dramaPrograms.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedProgram === program.id
                    ? "bg-slate-800 text-white scale-105 shadow-xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200"
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>

          {/* Selected Program Details */}
          {selectedProgramData && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className={`${selectedProgramData.color} text-white p-12 text-center`}>
                <h3 className="text-4xl font-light mb-4">{selectedProgramData.name}</h3>
                <p className="text-xl opacity-90 font-light">{selectedProgramData.description}</p>
              </div>

              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {selectedProgramData.modules.map((module, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{module.name}</h4>
                      <p className="text-gray-600 mb-6 font-light leading-relaxed">{module.description}</p>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Key Skills:</h5>
                        {module.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2"
                          >
                            <ChevronRight className="w-3 h-3 text-slate-500" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Theatre Spaces */}
        <div className="mb-16">
          <h3 className="text-4xl font-light text-center text-gray-800 mb-12">
            Our <span className="font-bold">Theatre Spaces</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {theatreSpaces.map((space, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={space.image || "/placeholder.svg?height=300&width=400"}
                  alt={space.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{space.name}</h4>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{space.description}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-5 h-5 text-slate-600" />
                    <span className="text-sm font-semibold">{space.capacity}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {space.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-slate-50 text-slate-700 px-3 py-2 rounded-xl text-xs font-medium text-center flex items-center gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Productions */}
        <div className="mb-16">
          <h3 className="text-4xl font-light text-center text-gray-800 mb-12">
            Recent <span className="font-bold">Productions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProductions.map((production, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={production.image || "/placeholder.svg?height=300&width=400"}
                  alt={production.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{production.title}</h4>
                  <p className="text-slate-600 font-semibold mb-4">
                    {production.type} • {production.year}
                  </p>

                  <div className="space-y-3 mb-6 text-sm text-gray-600 font-light">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4" />
                      <span>{production.cast} cast members</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4" />
                      <span>{production.audience} audience</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800">Awards:</h5>
                    {production.awards.map((award, awardIndex) => (
                      <div
                        key={awardIndex}
                        className="bg-amber-100 text-amber-800 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
                      >
                        <Star className="w-3 h-3" />
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Development */}
        <div>
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl p-12 shadow-2xl text-white">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light mb-6">
                Skills We <span className="font-bold">Develop</span>
              </h3>
              <p className="text-xl opacity-90 font-light">Drama education builds essential life skills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dramaSkills.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-4">{item.skill}</h4>
                  <p className="text-sm text-gray-300 font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
