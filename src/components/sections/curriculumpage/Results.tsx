import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Award,
  BarChart2,
  ChevronDown,
  Download,
  FileText,
  Search,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react"

// Types for our data structures
interface BoardResult {
  year: string
  passPercentage: number
  totalStudents: number
  distinctionPercentage: number
  firstDivisionPercentage: number
  topScore: number
  highlights: string[]
}

interface ClassResult {
  class: string
  section?: string
  passPercentage: number
  distinctionPercentage: number
  firstDivisionPercentage: number
  averagePercentage: number
  topScorer: {
    name: string
    percentage: number
    photo?: string
  }
}

interface SubjectTopper {
  subject: string
  name: string
  class: string
  marks: number
  percentage: number
  photo?: string
}

interface Achiever {
  name: string
  class: string
  achievement: string
  rank?: string
  score?: number
  photo: string
}

interface YearlyComparison {
  year: string
  passPercentage: number
  distinctionPercentage: number
  averagePercentage: number
}

// Sample data - replace with your actual data
const boardResults: BoardResult[] = [
  {
    year: "2025",
    passPercentage: 98.7,
    totalStudents: 245,
    distinctionPercentage: 62.4,
    firstDivisionPercentage: 35.1,
    topScore: 98.8,
    highlights: [
      "100% pass result in Science stream",
      "School ranked in top 5 in the region",
      "15 students scored above 95%",
      "42 students scored above 90%",
      "All-time highest average score of 85.6%",
    ],
  },
  {
    year: "2024",
    passPercentage: 97.5,
    totalStudents: 230,
    distinctionPercentage: 58.7,
    firstDivisionPercentage: 36.5,
    topScore: 97.6,
    highlights: [
      "100% pass result in Commerce stream",
      "School ranked in top 10 in the region",
      "12 students scored above 95%",
      "38 students scored above 90%",
      "Average score of 83.2%",
    ],
  },
  {
    year: "2023",
    passPercentage: 96.8,
    totalStudents: 225,
    distinctionPercentage: 55.1,
    firstDivisionPercentage: 38.2,
    topScore: 97.2,
    highlights: [
      "100% pass result in Humanities stream",
      "10 students scored above 95%",
      "35 students scored above 90%",
      "Average score of 82.5%",
    ],
  },
]

const classResults: ClassResult[] = [
  {
    class: "XII",
    section: "Science",
    passPercentage: 100,
    distinctionPercentage: 68.5,
    firstDivisionPercentage: 31.5,
    averagePercentage: 87.2,
    topScorer: {
      name: "Ananya Sharma",
      percentage: 98.8,
      photo: "/public/student-1.jpg",
    },
  },
  {
    class: "XII",
    section: "Commerce",
    passPercentage: 100,
    distinctionPercentage: 65.2,
    firstDivisionPercentage: 32.1,
    averagePercentage: 86.5,
    topScorer: {
      name: "Rohan Mehta",
      percentage: 97.6,
      photo: "/public/student-2.jpg",
    },
  },
  {
    class: "XII",
    section: "Humanities",
    passPercentage: 98.2,
    distinctionPercentage: 58.7,
    firstDivisionPercentage: 36.5,
    averagePercentage: 84.3,
    topScorer: {
      name: "Priya Patel",
      percentage: 96.4,
      photo: "/public/student-3.jpg",
    },
  },
  {
    class: "X",
    passPercentage: 99.5,
    distinctionPercentage: 72.3,
    firstDivisionPercentage: 26.2,
    averagePercentage: 88.7,
    topScorer: {
      name: "Arjun Singh",
      percentage: 98.2,
      photo: "/public/student-4.jpg",
    },
  },
  {
    class: "IX",
    passPercentage: 98.7,
    distinctionPercentage: 65.8,
    firstDivisionPercentage: 30.5,
    averagePercentage: 86.2,
    topScorer: {
      name: "Neha Gupta",
      percentage: 97.5,
      photo: "/public/student-5.jpg",
    },
  },
  {
    class: "VIII",
    passPercentage: 100,
    distinctionPercentage: 68.9,
    firstDivisionPercentage: 29.1,
    averagePercentage: 87.5,
    topScorer: {
      name: "Vikram Joshi",
      percentage: 98.0,
      photo: "/public/student-6.jpg",
    },
  },
  {
    class: "VII",
    passPercentage: 100,
    distinctionPercentage: 70.2,
    firstDivisionPercentage: 28.8,
    averagePercentage: 88.1,
    topScorer: {
      name: "Aisha Khan",
      percentage: 97.8,
      photo: "/public/student-7.jpg",
    },
  },
  {
    class: "VI",
    passPercentage: 100,
    distinctionPercentage: 72.5,
    firstDivisionPercentage: 27.5,
    averagePercentage: 89.3,
    topScorer: {
      name: "Rahul Verma",
      percentage: 98.5,
      photo: "/public/student-8.jpg",
    },
  },
]

const subjectToppers: SubjectTopper[] = [
  {
    subject: "Physics",
    name: "Ananya Sharma",
    class: "XII-A",
    marks: 99,
    percentage: 99,
    photo: "/public/student-1.jpg",
  },
  {
    subject: "Chemistry",
    name: "Rohan Mehta",
    class: "XII-A",
    marks: 98,
    percentage: 98,
    photo: "/public/student-2.jpg",
  },
  {
    subject: "Mathematics",
    name: "Vikram Joshi",
    class: "XII-A",
    marks: 100,
    percentage: 100,
    photo: "/public/student-6.jpg",
  },
  {
    subject: "Biology",
    name: "Priya Patel",
    class: "XII-A",
    marks: 99,
    percentage: 99,
    photo: "/public/student-3.jpg",
  },
  {
    subject: "English",
    name: "Aisha Khan",
    class: "XII-C",
    marks: 98,
    percentage: 98,
    photo: "/public/student-7.jpg",
  },
  {
    subject: "Computer Science",
    name: "Arjun Singh",
    class: "XII-A",
    marks: 100,
    percentage: 100,
    photo: "/public/student-4.jpg",
  },
  {
    subject: "Economics",
    name: "Neha Gupta",
    class: "XII-B",
    marks: 99,
    percentage: 99,
    photo: "/public/student-5.jpg",
  },
  {
    subject: "Accountancy",
    name: "Rahul Verma",
    class: "XII-B",
    marks: 100,
    percentage: 100,
    photo: "/public/student-8.jpg",
  },
]

const achievers: Achiever[] = [
  {
    name: "Ananya Sharma",
    class: "XII-A",
    achievement: "CBSE Merit Certificate for outstanding performance in Science stream",
    score: 98.8,
    photo: "/public/student-1.jpg",
  },
  {
    name: "Rohan Mehta",
    class: "XII-B",
    achievement: "CBSE Merit Certificate for outstanding performance in Commerce stream",
    score: 97.6,
    photo: "/public/student-2.jpg",
  },
  {
    name: "Arjun Singh",
    class: "X-A",
    achievement: "National Talent Search Examination (NTSE) Scholar",
    rank: "AIR 45",
    photo: "/public/student-4.jpg",
  },
  {
    name: "Priya Patel",
    class: "XII-C",
    achievement: "KVPY Fellowship recipient",
    rank: "AIR 120",
    photo: "/public/student-3.jpg",
  },
  {
    name: "Vikram Joshi",
    class: "XII-A",
    achievement: "JEE Main 2025",
    rank: "AIR 235",
    photo: "/public/student-6.jpg",
  },
  {
    name: "Neha Gupta",
    class: "XII-B",
    achievement: "NEET 2025",
    rank: "AIR 342",
    photo: "/public/student-5.jpg",
  },
]

const yearlyComparison: YearlyComparison[] = [
  {
    year: "2025",
    passPercentage: 98.7,
    distinctionPercentage: 62.4,
    averagePercentage: 85.6,
  },
  {
    year: "2024",
    passPercentage: 97.5,
    distinctionPercentage: 58.7,
    averagePercentage: 83.2,
  },
  {
    year: "2023",
    passPercentage: 96.8,
    distinctionPercentage: 55.1,
    averagePercentage: 82.5,
  },
  {
    year: "2022",
    passPercentage: 95.9,
    distinctionPercentage: 52.8,
    averagePercentage: 81.7,
  },
  {
    year: "2021",
    passPercentage: 94.5,
    distinctionPercentage: 50.2,
    averagePercentage: 80.5,
  },
]

const Results = () => {
  const [activeTab, setActiveTab] = useState("board-results")
  const [selectedYear, setSelectedYear] = useState("2025")
  const [expandedClass, setExpandedClass] = useState<string | null>(null)
  const [chartData, setChartData] = useState<any>(null)

  // Toggle class expansion
  const toggleClass = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className)
  }

  // Generate simple bar chart data for yearly comparison
  useEffect(() => {
    const generateChartData = () => {
      return {
        labels: yearlyComparison.map((item) => item.year),
        datasets: [
          {
            label: "Pass %",
            data: yearlyComparison.map((item) => item.passPercentage),
            backgroundColor: "rgba(109, 40, 217, 0.8)",
          },
          {
            label: "Distinction %",
            data: yearlyComparison.map((item) => item.distinctionPercentage),
            backgroundColor: "rgba(79, 70, 229, 0.8)",
          },
          {
            label: "Average %",
            data: yearlyComparison.map((item) => item.averagePercentage),
            backgroundColor: "rgba(59, 130, 246, 0.8)",
          },
        ],
      }
    }

    setChartData(generateChartData())
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-2">
            <button
              onClick={() => setActiveTab("board-results")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "board-results" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              CBSE Board Results
            </button>
            <button
              onClick={() => setActiveTab("class-results")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "class-results" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Class-wise Results
            </button>
            <button
              onClick={() => setActiveTab("subject-toppers")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "subject-toppers" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Subject Toppers
            </button>
            <button
              onClick={() => setActiveTab("achievers")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "achievers" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Achievers
            </button>
            <button
              onClick={() => setActiveTab("trends")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "trends" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Result Trends
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Board Results Tab */}
        {activeTab === "board-results" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Year Selection */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">CBSE Board Results</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {boardResults.map((result) => (
                  <button
                    key={result.year}
                    onClick={() => setSelectedYear(result.year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedYear === result.year
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {result.year}
                  </button>
                ))}
              </div>

              {/* Selected Year Results */}
              {boardResults
                .filter((result) => result.year === selectedYear)
                .map((result) => (
                  <div key={result.year} className="space-y-8">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                        <div className="text-purple-600 text-sm font-medium mb-1">Pass Percentage</div>
                        <div className="text-3xl font-bold text-gray-800">{result.passPercentage}%</div>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                        <div className="text-indigo-600 text-sm font-medium mb-1">Total Students</div>
                        <div className="text-3xl font-bold text-gray-800">{result.totalStudents}</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="text-blue-600 text-sm font-medium mb-1">Distinction</div>
                        <div className="text-3xl font-bold text-gray-800">{result.distinctionPercentage}%</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <div className="text-green-600 text-sm font-medium mb-1">Top Score</div>
                        <div className="text-3xl font-bold text-gray-800">{result.topScore}%</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Highlights</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {result.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1 text-purple-600">
                              <Star className="w-5 h-5" />
                            </div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <FileText className="w-5 h-5" />
                        Detailed Result Analysis
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-white border border-purple-200 hover:border-purple-300 text-purple-700 px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Download Result PDF
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Performers - {selectedYear}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classResults
                  .filter((result) => result.class === "XII" || result.class === "X")
                  .map((result, index) => (
                    <div
                      key={index}
                      className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-lg p-5 border border-purple-100"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                          <img
                            src={result.topScorer.photo || "/placeholder.svg"}
                            alt={result.topScorer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{result.topScorer.name}</h3>
                          <p className="text-purple-700 font-medium">
                            Class {result.class}
                            {result.section ? `-${result.section}` : ""}
                          </p>
                          <p className="text-gray-600 text-sm">Score: {result.topScorer.percentage}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Media Coverage */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Media Coverage</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                  <div className="h-40 bg-gray-200">
                    <img
                      src="/placeholder.svg?height=160&width=320"
                      alt="News coverage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      School achieves 100% pass result in CBSE Class XII exams
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">Times Education, May 15, 2025</p>
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Read full article →
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                  <div className="h-40 bg-gray-200">
                    <img
                      src="/placeholder.svg?height=160&width=320"
                      alt="News coverage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      15 students score above 95% in CBSE Class XII Science stream
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">Education Daily, May 18, 2025</p>
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Read full article →
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                  <div className="h-40 bg-gray-200">
                    <img
                      src="/placeholder.svg?height=160&width=320"
                      alt="News coverage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      School ranks in top 5 in the region for CBSE results
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">City Express, May 20, 2025</p>
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Read full article →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Class-wise Results Tab */}
        {activeTab === "class-results" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Class-wise Results</h2>
              <p className="text-gray-600 mb-8">
                Explore the academic performance of each class. Click on a class to view detailed statistics and top
                performers.
              </p>

              <div className="space-y-4">
                {/* Senior Secondary (XI-XII) */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Senior Secondary (Classes XI-XII)</h3>
                  <div className="space-y-3">
                    {classResults
                      .filter((result) => result.class === "XII")
                      .map((result, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleClass(`XII-${result.section}`)}
                            className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                              expandedClass === `XII-${result.section}`
                                ? "bg-purple-50 text-purple-700"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-lg">
                              Class XII - {result.section || "All Sections"} ({result.passPercentage}% Pass)
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                expandedClass === `XII-${result.section}` ? "transform rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedClass === `XII-${result.section}` && (
                            <div className="p-4 bg-white border-t border-gray-200">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Performance Statistics</h4>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Pass Percentage</span>
                                      <span className="font-medium text-gray-800">{result.passPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${result.passPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Distinction</span>
                                      <span className="font-medium text-gray-800">{result.distinctionPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-indigo-600 h-2.5 rounded-full"
                                        style={{ width: `${result.distinctionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">First Division</span>
                                      <span className="font-medium text-gray-800">
                                        {result.firstDivisionPercentage}%
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${result.firstDivisionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Average Percentage</span>
                                      <span className="font-medium text-gray-800">{result.averagePercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        style={{ width: `${result.averagePercentage}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Top Performer</h4>
                                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                                    <div className="flex items-center gap-4">
                                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                                        <img
                                          src={result.topScorer.photo || "/placeholder.svg"}
                                          alt={result.topScorer.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-gray-800">{result.topScorer.name}</h5>
                                        <p className="text-purple-700">Score: {result.topScorer.percentage}%</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <a
                                      href="#"
                                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                                    >
                                      <FileText className="w-4 h-4" />
                                      View Complete Result Analysis
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Secondary (IX-X) */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Secondary (Classes IX-X)</h3>
                  <div className="space-y-3">
                    {classResults
                      .filter((result) => result.class === "X" || result.class === "IX")
                      .map((result, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleClass(result.class)}
                            className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                              expandedClass === result.class
                                ? "bg-purple-50 text-purple-700"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-lg">
                              Class {result.class} ({result.passPercentage}% Pass)
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                expandedClass === result.class ? "transform rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedClass === result.class && (
                            <div className="p-4 bg-white border-t border-gray-200">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Performance Statistics</h4>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Pass Percentage</span>
                                      <span className="font-medium text-gray-800">{result.passPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${result.passPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Distinction</span>
                                      <span className="font-medium text-gray-800">{result.distinctionPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-indigo-600 h-2.5 rounded-full"
                                        style={{ width: `${result.distinctionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">First Division</span>
                                      <span className="font-medium text-gray-800">
                                        {result.firstDivisionPercentage}%
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${result.firstDivisionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Average Percentage</span>
                                      <span className="font-medium text-gray-800">{result.averagePercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        style={{ width: `${result.averagePercentage}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Top Performer</h4>
                                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                                    <div className="flex items-center gap-4">
                                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                                        <img
                                          src={result.topScorer.photo || "/placeholder.svg"}
                                          alt={result.topScorer.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-gray-800">{result.topScorer.name}</h5>
                                        <p className="text-purple-700">Score: {result.topScorer.percentage}%</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <a
                                      href="#"
                                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                                    >
                                      <FileText className="w-4 h-4" />
                                      View Complete Result Analysis
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Middle School (VI-VIII) */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Middle School (Classes VI-VIII)</h3>
                  <div className="space-y-3">
                    {classResults
                      .filter((result) => ["VI", "VII", "VIII"].includes(result.class))
                      .map((result, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleClass(result.class)}
                            className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                              expandedClass === result.class
                                ? "bg-purple-50 text-purple-700"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-lg">
                              Class {result.class} ({result.passPercentage}% Pass)
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                expandedClass === result.class ? "transform rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedClass === result.class && (
                            <div className="p-4 bg-white border-t border-gray-200">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Performance Statistics</h4>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Pass Percentage</span>
                                      <span className="font-medium text-gray-800">{result.passPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${result.passPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Distinction</span>
                                      <span className="font-medium text-gray-800">{result.distinctionPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-indigo-600 h-2.5 rounded-full"
                                        style={{ width: `${result.distinctionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">First Division</span>
                                      <span className="font-medium text-gray-800">
                                        {result.firstDivisionPercentage}%
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${result.firstDivisionPercentage}%` }}
                                      ></div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-600">Average Percentage</span>
                                      <span className="font-medium text-gray-800">{result.averagePercentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                      <div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        style={{ width: `${result.averagePercentage}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium text-gray-700 mb-3">Top Performer</h4>
                                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                                    <div className="flex items-center gap-4">
                                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                                        <img
                                          src={result.topScorer.photo || "/placeholder.svg"}
                                          alt={result.topScorer.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-gray-800">{result.topScorer.name}</h5>
                                        <p className="text-purple-700">Score: {result.topScorer.percentage}%</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <a
                                      href="#"
                                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                                    >
                                      <FileText className="w-4 h-4" />
                                      View Complete Result Analysis
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Subject Toppers Tab */}
        {activeTab === "subject-toppers" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Subject Toppers</h2>
              <p className="text-gray-600 mb-8">
                Our students have excelled in various subjects, demonstrating exceptional understanding and mastery of
                the curriculum.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjectToppers.map((topper, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 border border-gray-200 hover:border-purple-200 transition-colors shadow-sm hover:shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                        <img
                          src={topper.photo || "/placeholder.svg"}
                          alt={topper.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{topper.name}</h3>
                        <p className="text-gray-600 text-sm">{topper.class}</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3 mb-3">
                      <div className="text-purple-800 font-medium">{topper.subject}</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-600 text-sm">Marks</span>
                        <span className="font-semibold text-gray-800">
                          {topper.marks} ({topper.percentage}%)
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">CBSE Board 2025</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Achievers Tab */}
        {activeTab === "achievers" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Board Exam Achievers */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Academic Achievers</h2>
              <p className="text-gray-600 mb-8">
                Our students have demonstrated exceptional academic prowess in board examinations and competitive tests.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievers.map((achiever, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                        <img
                          src={achiever.photo || "/placeholder.svg"}
                          alt={achiever.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{achiever.name}</h3>
                        <p className="text-purple-700 font-medium">{achiever.class}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-gray-700">{achiever.achievement}</div>
                      {achiever.rank && <div className="text-indigo-700 font-medium mt-1">Rank: {achiever.rank}</div>}
                      {achiever.score && (
                        <div className="text-indigo-700 font-medium mt-1">Score: {achiever.score}%</div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-medium">Outstanding Achievement</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Exam Success */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Competitive Exam Success</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-purple-50 text-gray-700">
                      <th className="py-3 px-4 text-left font-semibold">Examination</th>
                      <th className="py-3 px-4 text-left font-semibold">Number of Qualifiers</th>
                      <th className="py-3 px-4 text-left font-semibold">Top Rank</th>
                      <th className="py-3 px-4 text-left font-semibold">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4">JEE Main</td>
                      <td className="py-3 px-4">28</td>
                      <td className="py-3 px-4">AIR 235</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">JEE Advanced</td>
                      <td className="py-3 px-4">15</td>
                      <td className="py-3 px-4">AIR 512</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">NEET</td>
                      <td className="py-3 px-4">32</td>
                      <td className="py-3 px-4">AIR 342</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">NTSE</td>
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4">AIR 45</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">KVPY</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">AIR 120</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Olympiads</td>
                      <td className="py-3 px-4">45</td>
                      <td className="py-3 px-4">International Bronze Medal</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Achievement Gallery */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievement Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Achievement celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
                    alt="Student with trophy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Result celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Principal with toppers"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Award distribution"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Students celebrating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Result day"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Result Trends Tab */}
        {activeTab === "trends" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Result Trends</h2>
              <p className="text-gray-600 mb-8">
                Our school has consistently improved its academic performance over the years. The following charts and
                statistics showcase our journey of excellence.
              </p>

              {/* Year-wise Comparison */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Year-wise Performance Comparison</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                  <div className="h-64 md:h-80">
                    {/* This is a placeholder for a chart - in a real implementation, you would use a charting library */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                      <div className="text-center">
                        <BarChart2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">
                          Chart showing year-wise comparison of pass percentage, distinction percentage, and average
                          percentage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-purple-50 text-gray-700">
                        <th className="py-3 px-4 text-left font-semibold">Year</th>
                        <th className="py-3 px-4 text-left font-semibold">Pass Percentage</th>
                        <th className="py-3 px-4 text-left font-semibold">Distinction Percentage</th>
                        <th className="py-3 px-4 text-left font-semibold">Average Percentage</th>
                        <th className="py-3 px-4 text-left font-semibold">Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {yearlyComparison.map((year, index) => (
                        <tr key={index}>
                          <td className="py-3 px-4 font-medium">{year.year}</td>
                          <td className="py-3 px-4">{year.passPercentage}%</td>
                          <td className="py-3 px-4">{year.distinctionPercentage}%</td>
                          <td className="py-3 px-4">{year.averagePercentage}%</td>
                          <td className="py-3 px-4">
                            {index < yearlyComparison.length - 1 ? (
                              <div className="flex items-center text-green-600">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {(year.averagePercentage - yearlyComparison[index + 1].averagePercentage).toFixed(1)}%
                              </div>
                            ) : (
                              "-"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stream-wise Performance */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Stream-wise Performance (Class XII)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                    <h4 className="font-medium text-gray-800 mb-3">Science Stream</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pass Percentage</span>
                        <span className="font-medium text-gray-800">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Distinction</span>
                        <span className="font-medium text-gray-800">68.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "68.5%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average</span>
                        <span className="font-medium text-gray-800">87.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "87.2%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                    <h4 className="font-medium text-gray-800 mb-3">Commerce Stream</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pass Percentage</span>
                        <span className="font-medium text-gray-800">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Distinction</span>
                        <span className="font-medium text-gray-800">65.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "65.2%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average</span>
                        <span className="font-medium text-gray-800">86.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "86.5%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h4 className="font-medium text-gray-800 mb-3">Humanities Stream</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pass Percentage</span>
                        <span className="font-medium text-gray-800">98.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "98.2%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Distinction</span>
                        <span className="font-medium text-gray-800">58.7%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "58.7%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average</span>
                        <span className="font-medium text-gray-800">84.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "84.3%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Award className="w-6 h-6 text-green-700" />
                      </div>
                      <h4 className="font-medium text-gray-800">Consistent Improvement</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our school has shown consistent improvement in academic performance over the past 5 years, with an
                      average increase of 1.2% in overall results annually.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Trophy className="w-6 h-6 text-yellow-700" />
                      </div>
                      <h4 className="font-medium text-gray-800">Regional Recognition</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Ranked among the top 5 schools in the region for CBSE board results for three consecutive years
                      (2023-2025).
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="w-6 h-6 text-blue-700" />
                      </div>
                      <h4 className="font-medium text-gray-800">100% Pass Rate</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Achieved 100% pass rate in Science and Commerce streams for Class XII in 2025, demonstrating our
                      commitment to every student's success.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Star className="w-6 h-6 text-purple-700" />
                      </div>
                      <h4 className="font-medium text-gray-800">Excellence in Competitive Exams</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Over 75 students qualified for various competitive examinations including JEE, NEET, NTSE, and
                      Olympiads in 2025.
                    </p>
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

export default Results