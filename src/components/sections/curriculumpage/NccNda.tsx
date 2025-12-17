"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Award,
  Calendar,
  ChevronDown,
  Clock,
  Flag,
  Heart,
  MapPin,
  Medal,
  Shield,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

// Types for our data structures
interface TrainingProgram {
  id: string
  title: string
  description: string
  duration: string
  participants: number
  icon: any
}

interface Achievement {
  title: string
  description: string
  year: string
  category: "NCC" | "NDA" | "Both"
}

interface Activity {
  name: string
  description: string
  frequency: string
  image: string
  category: "drill" | "fitness" | "leadership" | "values"
}

interface Instructor {
  name: string
  rank: string
  specialization: string
  experience: string
  image: string
}

// Sample data - replace with your actual data
const trainingPrograms: TrainingProgram[] = [
  {
    id: "ncc-basic",
    title: "NCC Basic Training",
    description:
      "Comprehensive foundation program covering drill, discipline, and basic military knowledge for character development.",
    duration: "6 months",
    participants: 120,
    icon: Shield,
  },
  {
    id: "nda-prep",
    title: "NDA Preparation",
    description:
      "Intensive preparation program for National Defence Academy entrance, focusing on academics and physical fitness.",
    duration: "2 years",
    participants: 45,
    icon: Target,
  },
  {
    id: "leadership",
    title: "Leadership Development",
    description: "Advanced program for senior cadets focusing on command, leadership skills, and responsibility.",
    duration: "1 year",
    participants: 30,
    icon: Flag,
  },
  {
    id: "adventure",
    title: "Adventure Training",
    description: "Outdoor adventure activities including trekking, camping, and survival skills to build resilience.",
    duration: "Ongoing",
    participants: 80,
    icon: Zap,
  },
]

const achievements: Achievement[] = [
  {
    title: "Best NCC Unit Award",
    description: "Recognized as the Best NCC Unit in the state for outstanding performance and discipline.",
    year: "2024",
    category: "NCC",
  },
  {
    title: "NDA Selection Record",
    description: "15 students successfully cleared NDA entrance examination, highest in school history.",
    year: "2024",
    category: "NDA",
  },
  {
    title: "Republic Day Parade",
    description: "School NCC contingent participated in the prestigious Republic Day Parade in New Delhi.",
    year: "2024",
    category: "NCC",
  },
  {
    title: "Inter-School Drill Competition",
    description: "Won first place in inter-school drill competition with perfect synchronization.",
    year: "2024",
    category: "Both",
  },
  {
    title: "Adventure Camp Excellence",
    description: "Awarded excellence certificate in National Adventure Camp for outstanding participation.",
    year: "2023",
    category: "NCC",
  },
  {
    title: "Physical Fitness Championship",
    description: "School team won the regional physical fitness championship for three consecutive years.",
    year: "2022-2024",
    category: "Both",
  },
]

const activities: Activity[] = [
  {
    name: "Morning Parade & Drill",
    description:
      "Daily morning sessions focusing on precision drill, marching, and ceremonial movements to instill discipline and coordination.",
    frequency: "Daily (6:00 AM - 7:00 AM)",
    image: "/public/drill-session.jpg",
    category: "drill",
  },
  {
    name: "Physical Training",
    description:
      "Comprehensive fitness regime including running, obstacle courses, strength training, and endurance building exercises.",
    frequency: "Daily (Evening)",
    image: "/public/physical-training.jpg",
    category: "fitness",
  },
  {
    name: "Weapon Training Basics",
    description:
      "Basic weapon handling, safety protocols, and marksmanship training under expert supervision (for senior cadets only).",
    frequency: "Weekly",
    image: "/public/weapon-training.jpg",
    category: "drill",
  },
  {
    name: "Leadership Workshops",
    description:
      "Interactive sessions on command, decision-making, team management, and leadership principles through practical exercises.",
    frequency: "Bi-weekly",
    image: "/public/leadership-workshop.jpg",
    category: "leadership",
  },
  {
    name: "Values & Ethics Sessions",
    description:
      "Character building sessions focusing on integrity, patriotism, service before self, and moral values.",
    frequency: "Weekly",
    image: "/public/values-session.jpg",
    category: "values",
  },
  {
    name: "Team Building Exercises",
    description:
      "Group activities, obstacle courses, and challenges designed to foster teamwork, trust, and collective problem-solving.",
    frequency: "Weekly",
    image: "/public/team-building.jpg",
    category: "leadership",
  },
  {
    name: "Yoga & Meditation",
    description:
      "Mental fitness and stress management through yoga, meditation, and breathing exercises for holistic development.",
    frequency: "Daily (Morning)",
    image: "/public/yoga-session.jpg",
    category: "fitness",
  },
  {
    name: "Patriotic Activities",
    description:
      "Flag hoisting ceremonies, national anthem sessions, and activities to instill love for the country and national pride.",
    frequency: "Weekly",
    image: "/public/patriotic-activity.jpg",
    category: "values",
  },
]

const instructors: Instructor[] = [
  {
    name: "Colonel Rajesh Sharma (Retd.)",
    rank: "NCC Officer",
    specialization: "Drill & Discipline",
    experience: "25 years",
    image: "/public/instructor-1.jpg",
  },
  {
    name: "Major Priya Singh (Retd.)",
    rank: "Assistant NCC Officer",
    specialization: "Physical Training",
    experience: "18 years",
    image: "/public/instructor-2.jpg",
  },
  {
    name: "Captain Vikram Joshi (Retd.)",
    rank: "NDA Coordinator",
    specialization: "Academic Preparation",
    experience: "15 years",
    image: "/public/instructor-3.jpg",
  },
  {
    name: "Subedar Anil Kumar (Retd.)",
    rank: "Drill Instructor",
    specialization: "Weapon Training",
    experience: "20 years",
    image: "/public/instructor-4.jpg",
  },
]

const NccNda = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const toggleActivity = (activityName: string) => {
    setExpandedActivity(expandedActivity === activityName ? null : activityName)
  }

  const filteredActivities = activities.filter(
    (activity) => selectedCategory === "all" || activity.category === selectedCategory,
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-blue-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/public/military-pattern.svg')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">NCC & NDA Training</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Building character, discipline, and leadership through comprehensive military training programs.
                Preparing young minds for service to the nation with honor, courage, and commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">275+</div>
                <div className="text-sm opacity-90">Active Cadets</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">15</div>
                <div className="text-sm opacity-90">NDA Selections</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Awards Won</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">12</div>
                <div className="text-sm opacity-90">Years Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Flag className="w-5 h-5" />
                Join NCC Program
              </button>
              <button className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors border border-green-600">
                <Target className="w-5 h-5" />
                NDA Preparation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "overview" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "training" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Training Programs
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "activities" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Activities & Sessions
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "achievements" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("instructors")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "instructors" ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Instructors
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">About Our NCC & NDA Programs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">National Cadet Corps (NCC)</h3>
                  <p className="text-gray-600 mb-4">
                    Our NCC program is designed to develop character, comradeship, discipline, leadership, secular
                    outlook, spirit of adventure, and ideals of selfless service among young people. The program
                    emphasizes on creating responsible citizens who are ready to serve the nation.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Character development through discipline and values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Leadership skills and team building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Physical fitness and mental toughness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>Patriotism and national service</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    National Defence Academy (NDA) Preparation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our specialized NDA preparation program provides comprehensive training for students aspiring to
                    join the Indian Armed Forces. The program combines academic excellence with physical fitness and
                    character building to prepare future officers.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                      <span>Comprehensive academic preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                      <span>Physical fitness and endurance training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                      <span>Personality development and interview skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                      <span>Military knowledge and current affairs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Values & Principles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Discipline & Honor</h3>
                  <p className="text-gray-600">
                    Instilling self-discipline, respect for authority, and maintaining the highest standards of personal
                    and professional conduct.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Flag className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Patriotism & Service</h3>
                  <p className="text-gray-600">
                    Developing love for the country, understanding of national issues, and commitment to serve the
                    nation with dedication.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Leadership & Teamwork</h3>
                  <p className="text-gray-600">
                    Building leadership qualities, decision-making skills, and the ability to work effectively in teams
                    under pressure.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-orange-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Character & Integrity</h3>
                  <p className="text-gray-600">
                    Developing moral courage, ethical behavior, and strong character traits essential for future
                    leaders.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Physical & Mental Fitness</h3>
                  <p className="text-gray-600">
                    Maintaining peak physical condition and mental resilience through rigorous training and healthy
                    lifestyle practices.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-yellow-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Excellence & Achievement</h3>
                  <p className="text-gray-600">
                    Striving for excellence in all endeavors, setting high standards, and achieving goals through
                    dedication and hard work.
                  </p>
                </div>
              </div>
            </section>

            {/* Program Benefits */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Development</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Enhanced self-confidence and self-esteem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Improved communication and public speaking skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Better time management and organizational abilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Stress management and emotional resilience</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Advantages</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Priority in defense services recruitment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Additional marks in various competitive exams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Leadership experience valued by employers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Network of like-minded individuals and mentors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* Training Programs Tab */}
        {activeTab === "training" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Training Programs</h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive training programs are designed to develop well-rounded individuals with strong
                character, leadership skills, and a commitment to excellence.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {trainingPrograms.map((program) => {
                  const IconComponent = program.icon
                  return (
                    <div
                      key={program.id}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-green-200 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full shrink-0">
                          <IconComponent className="w-6 h-6 text-green-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                          <p className="text-gray-600 mb-4">{program.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">
                                <strong>Duration:</strong> {program.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">
                                <strong>Participants:</strong> {program.participants}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Training Schedule */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Weekly Training Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="py-3 px-4 text-left font-semibold text-green-700 border-b">Day</th>
                        <th className="py-3 px-4 text-left font-semibold text-green-700 border-b">
                          Morning (6:00-7:30 AM)
                        </th>
                        <th className="py-3 px-4 text-left font-semibold text-green-700 border-b">
                          Evening (4:00-6:00 PM)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 px-4 font-medium">Monday</td>
                        <td className="py-3 px-4">Parade & Drill Practice</td>
                        <td className="py-3 px-4">Physical Training & Fitness</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Tuesday</td>
                        <td className="py-3 px-4">Yoga & Meditation</td>
                        <td className="py-3 px-4">Leadership Workshop</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Wednesday</td>
                        <td className="py-3 px-4">Parade & Drill Practice</td>
                        <td className="py-3 px-4">Weapon Training (Senior Cadets)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Thursday</td>
                        <td className="py-3 px-4">Physical Training</td>
                        <td className="py-3 px-4">Values & Ethics Session</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Friday</td>
                        <td className="py-3 px-4">Parade & Drill Practice</td>
                        <td className="py-3 px-4">Team Building Activities</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Saturday</td>
                        <td className="py-3 px-4">Adventure Training</td>
                        <td className="py-3 px-4">NDA Academic Preparation</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Sunday</td>
                        <td className="py-3 px-4">Community Service</td>
                        <td className="py-3 px-4">Rest & Recreation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Activities & Sessions Tab */}
        {activeTab === "activities" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Activities & Training Sessions</h2>
              <p className="text-gray-600 mb-8">
                Explore our diverse range of training activities designed to build character, fitness, leadership, and
                values among our cadets.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === "all"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Activities
                </button>
                <button
                  onClick={() => setSelectedCategory("drill")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === "drill"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Drill & Training
                </button>
                <button
                  onClick={() => setSelectedCategory("fitness")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === "fitness"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Physical Fitness
                </button>
                <button
                  onClick={() => setSelectedCategory("leadership")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === "leadership"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Leadership
                </button>
                <button
                  onClick={() => setSelectedCategory("values")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === "values"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Values & Ethics
                </button>
              </div>

              {/* Activities List */}
              <div className="space-y-4">
                {filteredActivities.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleActivity(activity.name)}
                      className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                        expandedActivity === activity.name
                          ? "bg-green-50 text-green-700"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{activity.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{activity.frequency}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedActivity === activity.name ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedActivity === activity.name && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-3">Activity Details</h4>
                            <p className="text-gray-600 mb-4">{activity.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>Frequency: {activity.frequency}</span>
                            </div>
                          </div>
                          <div>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Special Programs */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Special Programs & Camps</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-blue-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Annual Training Camp</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      10-day intensive training camp focusing on advanced drill, leadership, and adventure activities.
                    </p>
                    <div className="text-blue-700 font-medium text-sm">Duration: 10 days (Summer)</div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-green-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Adventure Training</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Rock climbing, trekking, river crossing, and survival skills training in natural environments.
                    </p>
                    <div className="text-green-700 font-medium text-sm">Duration: Weekend expeditions</div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Flag className="w-6 h-6 text-purple-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Republic Day Parade</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Special training for selected cadets to participate in Republic Day celebrations and parades.
                    </p>
                    <div className="text-purple-700 font-medium text-sm">Duration: 3 months preparation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Achievements & Recognition</h2>
              <p className="text-gray-600 mb-8">
                Our NCC and NDA programs have consistently achieved excellence, earning recognition at state and
                national levels.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-6 border ${
                      achievement.category === "NCC"
                        ? "bg-green-50 border-green-100"
                        : achievement.category === "NDA"
                          ? "bg-blue-50 border-blue-100"
                          : "bg-purple-50 border-purple-100"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className={`p-2 rounded-full ${
                          achievement.category === "NCC"
                            ? "bg-green-100"
                            : achievement.category === "NDA"
                              ? "bg-blue-100"
                              : "bg-purple-100"
                        }`}
                      >
                        <Trophy
                          className={`w-5 h-5 ${
                            achievement.category === "NCC"
                              ? "text-green-700"
                              : achievement.category === "NDA"
                                ? "text-blue-700"
                                : "text-purple-700"
                          }`}
                        />
                      </div>
                      <div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            achievement.category === "NCC"
                              ? "bg-green-100 text-green-700"
                              : achievement.category === "NDA"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {achievement.category}
                        </span>
                        <div className="text-gray-500 text-sm mt-1">{achievement.year}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">275+</div>
                  <div className="text-gray-600">Active Cadets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-gray-600">NDA Selections (2024)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">25+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">12</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">8</div>
                  <div className="text-gray-600">State Level Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">3</div>
                  <div className="text-gray-600">National Recognitions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">100%</div>
                  <div className="text-gray-600">Participation Rate</div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievement Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Award ceremony"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Parade performance"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Trophy presentation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="National recognition"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Cadets with medals"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Flag ceremony"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Training camp"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Achievement celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructors Tab */}
        {activeTab === "instructors" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Expert Instructors</h2>
              <p className="text-gray-600 mb-8">
                Our experienced team of retired military officers and trained instructors bring decades of expertise to
                guide and mentor our cadets.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {instructors.map((instructor, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-green-200 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-200 shrink-0">
                        <img
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{instructor.name}</h3>
                        <p className="text-green-700 font-medium mb-2">{instructor.rank}</p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Medal className="w-4 h-4 text-green-600" />
                            <span>
                              <strong>Specialization:</strong> {instructor.specialization}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-green-600" />
                            <span>
                              <strong>Experience:</strong> {instructor.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instructor Qualifications */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Instructor Qualifications & Expertise</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                    <h4 className="font-medium text-gray-800 mb-3">Military Experience</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Retired officers from Indian Army, Navy, and Air Force</li>
                      <li>• Minimum 15 years of active military service</li>
                      <li>• Combat and peacetime operational experience</li>
                      <li>• Leadership roles in various military units</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h4 className="font-medium text-gray-800 mb-3">Training Certifications</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• NCC Officer Training Course certified</li>
                      <li>• Physical Training Instructor qualified</li>
                      <li>• Weapon Training Safety certified</li>
                      <li>• First Aid and Emergency Response trained</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                    <h4 className="font-medium text-gray-800 mb-3">Educational Background</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Graduate degrees from premier institutions</li>
                      <li>• Specialized courses in leadership development</li>
                      <li>• Youth mentoring and counseling training</li>
                      <li>• Continuous professional development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NccNda
