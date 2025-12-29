"use client"

import { useState } from "react"
import { Calendar, Music, BookOpen, Users, Trophy, Clock } from "lucide-react"

const Events = () => {
  const [activeTab, setActiveTab] = useState("all")

  const events = [
    {
      title: "Annual Sports Day",
      date: "December 10-12, 2023",
      description:
        "A three-day extravaganza celebrating athletic excellence with track and field events, team sports competitions, and awards ceremony.",
      category: "sports",
      featured: true,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Science Exhibition",
      date: "February 15-16, 2024",
      description:
        "Students showcase innovative science projects and experiments, demonstrating their understanding of scientific concepts and research skills.",
      category: "academic",
      featured: true,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Annual Cultural Fest",
      date: "November 5-7, 2023",
      description:
        "A vibrant celebration of arts, music, dance, and drama featuring performances by students across all grades.",
      category: "cultural",
      featured: true,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Inter-House Debate Competition",
      date: "August 25, 2023",
      description:
        "Students engage in formal debates on contemporary issues, developing critical thinking and public speaking skills.",
      category: "academic",
      upcoming: true,
    },
    {
      title: "Community Service Day",
      date: "September 30, 2023",
      description:
        "Students participate in various community service activities, contributing to social causes and developing empathy.",
      category: "outreach",
      upcoming: true,
    },
    {
      title: "Literary Week",
      date: "October 10-14, 2023",
      description:
        "A week dedicated to celebrating literature through book fairs, author visits, storytelling sessions, and creative writing competitions.",
      category: "academic",
      upcoming: true,
    },
    {
      title: "Inter-School Music Competition",
      date: "January 20, 2024",
      description:
        "Students showcase their musical talents competing with other schools in vocal and instrumental categories.",
      category: "cultural",
      upcoming: true,
    },
    {
      title: "Math Olympiad",
      date: "December 5, 2023",
      description:
        "A challenging mathematics competition designed to test problem-solving skills and mathematical aptitude.",
      category: "academic",
    },
    {
      title: "Annual Art Exhibition",
      date: "March 15-16, 2024",
      description:
        "A showcase of student artwork across various mediums including painting, sculpture, photography, and digital art.",
      category: "cultural",
    },
  ]

  const filteredEvents = activeTab === "all" ? events : events.filter((event) => event.category === activeTab)

  const featuredEvents = events.filter((event) => event.featured)
  const upcomingEvents = events.filter((event) => event.upcoming)

  return (
    <section id="events-activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Events & Activities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our vibrant campus life is enriched by a diverse range of events and activities that foster holistic
            development, teamwork, and creative expression.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">Featured Events</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                      {event.category}
                    </span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">Upcoming Events</h3>

          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-blue-800">
                    <Clock size={20} className="mb-1" />
                    <span className="text-xs font-medium">Upcoming</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{event.title}</h4>
                    <div className="flex items-center gap-2 text-blue-600 text-xs mb-2">
                      <Calendar size={12} />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Events with Filtering */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Event Calendar</h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "academic", "cultural", "sports", "outreach"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeTab === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All Events" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">{event.date}</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                  {event.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Clubs */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">Student Clubs & Organizations</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Debate Club", icon: <Users size={24} />, color: "bg-blue-100 text-blue-600" },
              { name: "Science Society", icon: <BookOpen size={24} />, color: "bg-green-100 text-green-600" },
              { name: "Arts & Crafts", icon: <Music size={24} />, color: "bg-purple-100 text-purple-600" },
              { name: "Sports Teams", icon: <Trophy size={24} />, color: "bg-orange-100 text-orange-600" },
              { name: "Coding Club", icon: <BookOpen size={24} />, color: "bg-indigo-100 text-indigo-600" },
              { name: "Environmental Club", icon: <Users size={24} />, color: "bg-teal-100 text-teal-600" },
              { name: "Literary Society", icon: <BookOpen size={24} />, color: "bg-red-100 text-red-600" },
              { name: "Music Ensemble", icon: <Music size={24} />, color: "bg-yellow-100 text-yellow-600" },
            ].map((club, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className={`w-12 h-12 mx-auto rounded-full ${club.color} flex items-center justify-center mb-4`}>
                  {club.icon}
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">{club.name}</h4>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
