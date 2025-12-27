"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  FileText,
  Award,
  BookOpen,
  Clock,
  HelpCircle,
  ChevronDown,
  Download,
  CheckCircle,
  AlertCircle,
  BarChart2,
} from "lucide-react"

// Types for our data structures
interface ExamType {
  id: string
  name: string
  description: string
  duration: string
  weightage: string
}

interface ClassDatesheet {
  class: string
  exams: {
    name: string
    dates: {
      subject: string
      date: string
      time: string
      venue?: string
    }[]
  }[]
}

interface AssessmentCriteria {
  type: string
  components: {
    name: string
    weightage: string
    description: string
  }[]
}

interface FAQ {
  question: string
  answer: string
}

// Sample data - replace with your actual data
const examTypes: ExamType[] = [
  {
    id: "formative",
    name: "Formative Assessments",
    description:
      "Ongoing assessments conducted throughout the term to monitor student learning progress and provide continuous feedback.",
    duration: "40-60 minutes",
    weightage: "30% of term grade",
  },
  {
    id: "summative",
    name: "Summative Assessments",
    description:
      "Evaluations conducted at the end of instructional units to assess student achievement against specific standards.",
    duration: "90-120 minutes",
    weightage: "30% of term grade",
  },
  {
    id: "term",
    name: "Term Examinations",
    description:
      "Comprehensive examinations conducted at the end of each term covering the entire syllabus taught during that period.",
    duration: "120-180 minutes",
    weightage: "40% of term grade",
  },
  {
    id: "practical",
    name: "Practical Examinations",
    description:
      "Hands-on assessments to evaluate practical skills and application of theoretical knowledge in subjects like Science, Computer Science, etc.",
    duration: "60-120 minutes",
    weightage: "Included in respective subject grades",
  },
]

const classDatesheets: ClassDatesheet[] = [
  {
    class: "Class I-V",
    exams: [
      {
        name: "Term I Examination",
        dates: [
          { subject: "English", date: "15 Sep 2025", time: "9:00 AM - 10:30 AM" },
          { subject: "Mathematics", date: "17 Sep 2025", time: "9:00 AM - 10:30 AM" },
          { subject: "Science", date: "19 Sep 2025", time: "9:00 AM - 10:30 AM" },
          { subject: "Social Studies", date: "21 Sep 2025", time: "9:00 AM - 10:30 AM" },
          { subject: "Hindi", date: "23 Sep 2025", time: "9:00 AM - 10:30 AM" },
        ],
      },
      {
        name: "Term II Examination",
        dates: [
          { subject: "English", date: "15 Mar 2026", time: "9:00 AM - 10:30 AM" },
          { subject: "Mathematics", date: "17 Mar 2026", time: "9:00 AM - 10:30 AM" },
          { subject: "Science", date: "19 Mar 2026", time: "9:00 AM - 10:30 AM" },
          { subject: "Social Studies", date: "21 Mar 2026", time: "9:00 AM - 10:30 AM" },
          { subject: "Hindi", date: "23 Mar 2026", time: "9:00 AM - 10:30 AM" },
        ],
      },
    ],
  },
  {
    class: "Class VI-VIII",
    exams: [
      {
        name: "Term I Examination",
        dates: [
          { subject: "English", date: "15 Sep 2025", time: "9:00 AM - 11:00 AM" },
          { subject: "Mathematics", date: "17 Sep 2025", time: "9:00 AM - 11:00 AM" },
          { subject: "Science", date: "19 Sep 2025", time: "9:00 AM - 11:00 AM" },
          { subject: "Social Science", date: "21 Sep 2025", time: "9:00 AM - 11:00 AM" },
          { subject: "Hindi", date: "23 Sep 2025", time: "9:00 AM - 11:00 AM" },
          { subject: "Sanskrit/French", date: "25 Sep 2025", time: "9:00 AM - 11:00 AM" },
        ],
      },
      {
        name: "Term II Examination",
        dates: [
          { subject: "English", date: "15 Mar 2026", time: "9:00 AM - 11:00 AM" },
          { subject: "Mathematics", date: "17 Mar 2026", time: "9:00 AM - 11:00 AM" },
          { subject: "Science", date: "19 Mar 2026", time: "9:00 AM - 11:00 AM" },
          { subject: "Social Science", date: "21 Mar 2026", time: "9:00 AM - 11:00 AM" },
          { subject: "Hindi", date: "23 Mar 2026", time: "9:00 AM - 11:00 AM" },
          { subject: "Sanskrit/French", date: "25 Mar 2026", time: "9:00 AM - 11:00 AM" },
        ],
      },
    ],
  },
  {
    class: "Class IX-X",
    exams: [
      {
        name: "Term I Examination",
        dates: [
          { subject: "English", date: "15 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Mathematics", date: "17 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Science", date: "19 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Social Science", date: "21 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Hindi/Sanskrit", date: "23 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Computer Science", date: "25 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Computer Lab" },
        ],
      },
      {
        name: "Pre-Board Examination",
        dates: [
          { subject: "English", date: "10 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Mathematics", date: "12 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Science", date: "14 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Social Science", date: "16 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Hindi/Sanskrit", date: "18 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Computer Science", date: "20 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Computer Lab" },
        ],
      },
      {
        name: "Term II Examination",
        dates: [
          { subject: "English", date: "15 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Mathematics", date: "17 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Science", date: "19 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Social Science", date: "21 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Hindi/Sanskrit", date: "23 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
          { subject: "Computer Science", date: "25 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Computer Lab" },
        ],
      },
    ],
  },
  {
    class: "Class XI-XII",
    exams: [
      {
        name: "Term I Examination",
        dates: [
          { subject: "English", date: "15 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          { subject: "Physics/History", date: "17 Sep 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          {
            subject: "Chemistry/Political Science",
            date: "19 Sep 2025",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Mathematics/Biology/Economics",
            date: "21 Sep 2025",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Computer Science/Psychology",
            date: "23 Sep 2025",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
        ],
      },
      {
        name: "Pre-Board Examination",
        dates: [
          { subject: "English", date: "10 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          { subject: "Physics/History", date: "12 Jan 2026", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          {
            subject: "Chemistry/Political Science",
            date: "14 Jan 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Mathematics/Biology/Economics",
            date: "16 Jan 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Computer Science/Psychology",
            date: "18 Jan 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
        ],
      },
      {
        name: "Term II Examination",
        dates: [
          { subject: "English", date: "15 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          { subject: "Physics/History", date: "17 Mar 2026", time: "9:00 AM - 12:00 PM", venue: "Examination Hall" },
          {
            subject: "Chemistry/Political Science",
            date: "19 Mar 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Mathematics/Biology/Economics",
            date: "21 Mar 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
          {
            subject: "Computer Science/Psychology",
            date: "23 Mar 2026",
            time: "9:00 AM - 12:00 PM",
            venue: "Examination Hall",
          },
        ],
      },
    ],
  },
]

const assessmentCriteria: AssessmentCriteria[] = [
  {
    type: "Academic Performance",
    components: [
      {
        name: "Written Examinations",
        weightage: "40%",
        description:
          "Formal written tests conducted at the end of each term to assess conceptual understanding and application skills.",
      },
      {
        name: "Periodic Tests",
        weightage: "20%",
        description: "Short tests conducted periodically to assess ongoing learning and retention of concepts.",
      },
      {
        name: "Projects & Assignments",
        weightage: "20%",
        description:
          "Individual and group projects that assess research skills, creativity, and application of knowledge.",
      },
      {
        name: "Class Participation",
        weightage: "10%",
        description: "Active engagement in classroom discussions, activities, and collaborative learning.",
      },
      {
        name: "Practical Work",
        weightage: "10%",
        description: "Laboratory work, field studies, and hands-on activities that assess practical skills.",
      },
    ],
  },
  {
    type: "Co-Scholastic Areas",
    components: [
      {
        name: "Life Skills",
        weightage: "Grades A-E",
        description:
          "Assessment of thinking skills, social skills, and emotional skills through observation and activities.",
      },
      {
        name: "Work Education",
        weightage: "Grades A-E",
        description: "Evaluation of skills related to work experience and hands-on training.",
      },
      {
        name: "Visual & Performing Arts",
        weightage: "Grades A-E",
        description: "Assessment of creativity, expression, and skills in arts, music, dance, etc.",
      },
      {
        name: "Health & Physical Education",
        weightage: "Grades A-E",
        description: "Evaluation of physical fitness, sports skills, and health awareness.",
      },
    ],
  },
]

const faqs: FAQ[] = [
  {
    question: "What happens if a student misses an examination?",
    answer:
      "If a student misses an examination due to illness or other valid reasons, parents must submit a written application along with supporting documents (like a medical certificate) to the class teacher. Re-examinations may be conducted for such cases based on the school policy and the validity of the reason.",
  },
  {
    question: "How are the final grades calculated?",
    answer:
      "Final grades are calculated by combining the weighted scores from formative assessments (30%), summative assessments (30%), and term examinations (40%). For classes IX-XII, the weightage may vary according to board guidelines. The cumulative score is then converted to the corresponding grade as per the grading scale.",
  },
  {
    question: "Are there any provisions for students with special needs?",
    answer:
      "Yes, the school provides accommodations for students with special needs as per board guidelines. These may include extra time, scribes, readers, modified question papers, or separate seating arrangements. Parents should contact the Special Education Needs Coordinator well in advance to discuss specific requirements.",
  },
  {
    question: "How can students access their examination results?",
    answer:
      "Examination results are published on the school's online portal and can be accessed using the student's login credentials. Physical report cards are also distributed during the Parent-Teacher Meetings scheduled after each term examination. For board examinations, results are published as per the respective board's schedule.",
  },
  {
    question: "What is the promotion policy?",
    answer:
      "For promotion to the next class, students must achieve a minimum of 33% marks in each subject and maintain an overall average of 40%. Additionally, 75% attendance is mandatory. Students failing to meet these criteria may be required to repeat the class or take improvement examinations as per school policy.",
  },
]

const Examination = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedClass, setExpandedClass] = useState<string | null>("Class I-V")
  const [expandedExam, setExpandedExam] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleClass = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className)
    setExpandedExam(null)
  }

  const toggleExam = (examName: string) => {
    setExpandedExam(expandedExam === examName ? null : examName)
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-purple-700 to-indigo-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/public/exam-pattern.svg')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Examination System</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Our comprehensive assessment framework is designed to evaluate not just academic knowledge, but also
              critical thinking, creativity, and application skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Calendar className="w-5 h-5" />
                Current Exam Schedule
              </button>
              <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors border border-purple-400">
                <FileText className="w-5 h-5" />
                Examination Policy
              </button>
            </div>
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
                activeTab === "overview" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("datesheets")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "datesheets" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Class-wise Datesheets
            </button>
            <button
              onClick={() => setActiveTab("assessment")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "assessment" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Assessment Criteria
            </button>
            <button
              onClick={() => setActiveTab("grading")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "grading" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Grading System
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "resources" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeTab === "faq" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              FAQs
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Examination Philosophy</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Our school follows a comprehensive and balanced assessment system that aims to evaluate students'
                  progress holistically. We believe that examinations should not just test memorization but should
                  assess understanding, application, analysis, and creativity.
                </p>
                <p className="mt-4">
                  The examination system is designed to provide regular feedback to students and parents, identify areas
                  for improvement, and celebrate achievements. We follow a continuous and comprehensive evaluation
                  pattern that includes both formative and summative assessments throughout the academic year.
                </p>
              </div>
            </section>

            {/* Exam Types */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Types of Examinations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {examTypes.map((exam) => (
                  <div
                    key={exam.id}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{exam.name}</h3>
                    <p className="text-gray-600 mb-4">{exam.description}</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">
                          <strong>Duration:</strong> {exam.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-700">
                          <strong>Weightage:</strong> {exam.weightage}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Academic Calendar */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Academic Calendar 2025-26</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="py-3 px-4 text-left font-semibold">Examination</th>
                      <th className="py-3 px-4 text-left font-semibold">Classes</th>
                      <th className="py-3 px-4 text-left font-semibold">Duration</th>
                      <th className="py-3 px-4 text-left font-semibold">Tentative Dates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4">Periodic Test I</td>
                      <td className="py-3 px-4">I-XII</td>
                      <td className="py-3 px-4">1 hour</td>
                      <td className="py-3 px-4">July 15-20, 2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Half Yearly Examination</td>
                      <td className="py-3 px-4">I-XII</td>
                      <td className="py-3 px-4">3 hours</td>
                      <td className="py-3 px-4">September 15-30, 2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Periodic Test II</td>
                      <td className="py-3 px-4">I-XII</td>
                      <td className="py-3 px-4">1 hour</td>
                      <td className="py-3 px-4">November 15-20, 2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Pre-Board Examination</td>
                      <td className="py-3 px-4">X & XII</td>
                      <td className="py-3 px-4">3 hours</td>
                      <td className="py-3 px-4">January 10-25, 2026</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Annual Examination</td>
                      <td className="py-3 px-4">I-XII</td>
                      <td className="py-3 px-4">3 hours</td>
                      <td className="py-3 px-4">March 15-30, 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </motion.div>
        )}

        {/* Datesheets Tab */}
        {activeTab === "datesheets" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Class-wise Examination Datesheets</h2>
              <p className="text-gray-600 mb-8">
                Select your class to view the detailed examination schedule. Please note that these dates are tentative
                and subject to change. Any changes will be communicated through the school's official channels.
              </p>

              <div className="space-y-4">
                {classDatesheets.map((classData) => (
                  <div key={classData.class} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleClass(classData.class)}
                      className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                        expandedClass === classData.class
                          ? "bg-purple-50 text-purple-700"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{classData.class}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedClass === classData.class ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedClass === classData.class && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <div className="space-y-4">
                          {classData.exams.map((exam) => (
                            <div key={exam.name} className="border border-gray-100 rounded-md overflow-hidden">
                              <button
                                onClick={() => toggleExam(exam.name)}
                                className={`w-full flex items-center justify-between p-3 text-left ${
                                  expandedExam === exam.name
                                    ? "bg-gray-50 text-purple-700"
                                    : "bg-white text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                <span className="font-medium">{exam.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    expandedExam === exam.name ? "transform rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {expandedExam === exam.name && (
                                <div className="p-3 bg-white">
                                  <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                      <thead>
                                        <tr className="bg-gray-50 text-gray-600 text-sm">
                                          <th className="py-2 px-3 text-left font-medium">Subject</th>
                                          <th className="py-2 px-3 text-left font-medium">Date</th>
                                          <th className="py-2 px-3 text-left font-medium">Time</th>
                                          {exam.dates[0].venue && (
                                            <th className="py-2 px-3 text-left font-medium">Venue</th>
                                          )}
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-gray-100">
                                        {exam.dates.map((date, idx) => (
                                          <tr key={idx} className="hover:bg-gray-50">
                                            <td className="py-2 px-3">{date.subject}</td>
                                            <td className="py-2 px-3">{date.date}</td>
                                            <td className="py-2 px-3">{date.time}</td>
                                            {date.venue && <td className="py-2 px-3">{date.venue}</td>}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="mt-4 flex justify-end">
                                    <button className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 font-medium">
                                      <Download className="w-4 h-4" />
                                      Download PDF
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Assessment Criteria Tab */}
        {activeTab === "assessment" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Assessment Methodology</h2>
              <p className="text-gray-600 mb-8">
                Our school follows a comprehensive assessment system that evaluates students on various parameters
                beyond just academic performance. The assessment is divided into Scholastic and Co-Scholastic areas to
                ensure holistic development.
              </p>

              {assessmentCriteria.map((criteria, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{criteria.type}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {criteria.components.map((component, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:border-purple-200 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-medium text-gray-800">{component.name}</h4>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                            {component.weightage}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{component.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Assessment Tools</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <FileText className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Written Tests</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Multiple choice questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Short answer questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Long answer questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Case studies and scenarios</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <BookOpen className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Projects & Assignments</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Individual research projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Group presentations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Portfolio development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Creative assignments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Practical Assessments</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Laboratory experiments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Field studies and observations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Performance-based assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Skill demonstrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* Grading System Tab */}
        {activeTab === "grading" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Grading System</h2>
              <p className="text-gray-600 mb-8">
                Our school follows a comprehensive grading system that provides a clear indication of student
                performance. The grading scale is designed to reflect not just academic achievement but also effort and
                progress.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Scholastic Areas (Classes I-VIII)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-purple-50">
                          <th className="py-3 px-4 text-left font-semibold text-purple-700 border-b">Marks Range</th>
                          <th className="py-3 px-4 text-left font-semibold text-purple-700 border-b">Grade</th>
                          <th className="py-3 px-4 text-left font-semibold text-purple-700 border-b">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4">91-100</td>
                          <td className="py-3 px-4 font-medium text-green-600">A1</td>
                          <td className="py-3 px-4">Outstanding</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">81-90</td>
                          <td className="py-3 px-4 font-medium text-green-600">A2</td>
                          <td className="py-3 px-4">Excellent</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">71-80</td>
                          <td className="py-3 px-4 font-medium text-blue-600">B1</td>
                          <td className="py-3 px-4">Very Good</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">61-70</td>
                          <td className="py-3 px-4 font-medium text-blue-600">B2</td>
                          <td className="py-3 px-4">Good</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">51-60</td>
                          <td className="py-3 px-4 font-medium text-yellow-600">C1</td>
                          <td className="py-3 px-4">Satisfactory</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">41-50</td>
                          <td className="py-3 px-4 font-medium text-yellow-600">C2</td>
                          <td className="py-3 px-4">Average</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">33-40</td>
                          <td className="py-3 px-4 font-medium text-orange-600">D</td>
                          <td className="py-3 px-4">Below Average</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">0-32</td>
                          <td className="py-3 px-4 font-medium text-red-600">E</td>
                          <td className="py-3 px-4">Needs Improvement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Co-Scholastic Areas (All Classes)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-purple-50">
                          <th className="py-3 px-4 text-left font-semibold text-purple-700 border-b">Grade</th>
                          <th className="py-3 px-4 text-left font-semibold text-purple-700 border-b">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 font-medium text-green-600">A</td>
                          <td className="py-3 px-4">Outstanding</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-blue-600">B</td>
                          <td className="py-3 px-4">Very Good</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-yellow-600">C</td>
                          <td className="py-3 px-4">Satisfactory</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-orange-600">D</td>
                          <td className="py-3 px-4">Needs Improvement</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-red-600">E</td>
                          <td className="py-3 px-4">Unsatisfactory</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Board Examination Grading (IX-XII)</h3>
                    <p className="text-gray-600 mb-4">
                      For classes IX-XII, the grading system follows the respective board guidelines (CBSE/ICSE/State
                      Board). Please refer to the specific board's assessment structure for detailed information.
                    </p>
                    <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                      View Board Examination Guidelines
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Examination Resources</h2>
              <p className="text-gray-600 mb-8">
                We provide a variety of resources to help students prepare for their examinations. These resources are
                designed to support different learning styles and needs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Papers</h3>
                  <p className="text-gray-600 mb-4">
                    Practice with previous years' question papers and sample papers designed as per the latest pattern.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    Download Sample Papers
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Study Materials</h3>
                  <p className="text-gray-600 mb-4">
                    Access comprehensive study materials, notes, and revision guides prepared by our experienced
                    faculty.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    Access Study Materials
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Online Practice Tests</h3>
                  <p className="text-gray-600 mb-4">
                    Take online practice tests to assess your preparation level and identify areas for improvement.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    Take Practice Tests
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    Important guidelines and instructions for students to follow during examinations.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    View Guidelines
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Revision Schedules</h3>
                  <p className="text-gray-600 mb-4">
                    Structured revision schedules to help students plan their exam preparation effectively.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    Download Schedules
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Instructions</h3>
                  <p className="text-gray-600 mb-4">
                    Special instructions for students with specific needs or accommodations during examinations.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1">
                    View Instructions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our examination system. If you don't find the information you're
                looking for, please contact the examination department.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 text-left font-medium bg-white hover:bg-gray-50"
                    >
                      <span className="pr-8">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedFAQ === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFAQ === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-4">
                  If you couldn't find the answer to your question, please feel free to contact our examination
                  department.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:exams@school.edu"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Contact Examination Department
                  </a>
                  <a
                    href="#"
                    className="bg-white border border-purple-200 hover:border-purple-300 text-purple-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    View Examination Policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Examination