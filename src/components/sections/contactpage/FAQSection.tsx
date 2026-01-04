import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What are the school's hours of operation?",
      answer:
        "Our school operates from 8:00 AM to 4:00 PM, Monday through Friday. The administrative office is open from 8:00 AM to 5:00 PM on weekdays and from 9:00 AM to 12:00 PM on Saturdays.",
      category: "general",
    },
    {
      id: 2,
      question: "How can I apply for admission to the school?",
      answer:
        "To apply for admission, you can visit our Admissions page and fill out the online application form. Alternatively, you can visit our campus and submit a physical application. For more details, please contact our Admissions Office at (123) 456-7891.",
      category: "admissions",
    },
    {
      id: 3,
      question: "What is the fee structure for different grades?",
      answer:
        "Our fee structure varies by grade level. For detailed information about tuition, activity fees, and other costs, please visit our Fee Structure page or contact our Finance Department at (123) 456-7892.",
      category: "fees",
    },
    {
      id: 4,
      question: "Does the school provide transportation services?",
      answer:
        "Yes, we offer transportation services for students living within a 15-mile radius of the school. The bus routes are carefully planned to ensure convenience and safety. For more information, please contact our Transportation Department at (123) 456-7895.",
      category: "facilities",
    },
    {
      id: 5,
      question: "What extracurricular activities are available for students?",
      answer:
        "We offer a wide range of extracurricular activities including sports, performing arts, debate, robotics, and various clubs. These activities are designed to develop students' talents and interests beyond academics.",
      category: "activities",
    },
    {
      id: 6,
      question: "How can I schedule a meeting with a teacher?",
      answer:
        "You can schedule a meeting with a teacher by contacting our administrative office or by sending an email directly to the teacher. Parent-teacher meetings are also regularly scheduled throughout the academic year.",
      category: "academics",
    },
    {
      id: 7,
      question: "What is the school's policy on absences and leaves?",
      answer:
        "Students are expected to maintain regular attendance. For planned absences, parents should notify the school in advance. For medical leaves, a doctor's certificate is required. Excessive absences may affect a student's academic performance and evaluation.",
      category: "policies",
    },
    {
      id: 8,
      question: "How does the school handle emergencies and medical situations?",
      answer:
        "We have a well-equipped medical room with a qualified nurse on duty during school hours. In case of emergencies, we follow a standard protocol that includes immediate first aid, contacting parents, and if necessary, transporting the student to the nearest hospital.",
      category: "policies",
    },
    {
      id: 9,
      question: "What curriculum does the school follow?",
      answer:
        "Our school follows a comprehensive curriculum that integrates national educational standards with innovative teaching methodologies. We focus on developing critical thinking, creativity, and practical skills alongside academic knowledge.",
      category: "academics",
    },
    {
      id: 10,
      question: "How can I get involved as a parent in school activities?",
      answer:
        "Parents can get involved through our Parent-Teacher Association (PTA), volunteer programs, and various school events. We encourage parent participation and value your contribution to our school community.",
      category: "general",
    },
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "general", name: "General Information" },
    { id: "admissions", name: "Admissions" },
    { id: "fees", name: "Fees & Payments" },
    { id: "academics", name: "Academics" },
    { id: "activities", name: "Activities & Events" },
    { id: "facilities", name: "Facilities & Services" },
    { id: "policies", name: "Policies & Procedures" },
  ]

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-4 sm:py-16 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-8 lg:px-20 xl:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium inline-block relative leading-normal">
              <span className="relative z-10 inline-block pl-5 pr-1">
                Frequently
                <span className="absolute inset-0 -z-10 -top-5">
                  <img
                    src="/Images/Doodles/CircleGreen.png"
                    alt="Circle Doodle"
                    className="w-full h-auto object-contain"
                  />
                </span>
              </span>{" "}
              Asked Questions
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Find answers to most common questions about our school, admissions process, facilities, and more.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-6 lg:mb-12">
            <div className="relative mb-6 sm:mb-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                placeholder="Search your questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="hidden lg:flex flex-wrap gap-2 space-y-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-5 py-2 rounded-full text-sm sm:text-base font-inter font-medium transition-colors cursor-pointer ${activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-200/60 text-gray-900 hover:bg-gray-200"
                    }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 "
                >
                  <button
                    className={`w-full text-left p-5 flex justify-between items-center focus:outline-none cursor-pointer ${activeId === faq.id ? "bg-blue-50" : "bg-white hover:bg-gray-50"
                      }`}
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={activeId === faq.id}
                  >
                    <h3 className="text-base sm:text-lg font-inter font-semibold text-gray-900">{faq.question}</h3>
                    {activeId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all bg-white duration-300 ${activeId === faq.id ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div className="p-6 border-t border-gray-100">
                      <p className=" text-gray-600 font-inter">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 font-inter">No FAQs found matching your search criteria.</p>
                <button
                  className="mt-8 text-primary hover:text-primarydark font-medium cursor-pointer"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
