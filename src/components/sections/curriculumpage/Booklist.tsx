import React, { useState, type JSX } from "react"

const Booklist: React.FC = () => {
  // Sample booklists
  const booklists = [
    // Group: I–V (5 Grades)
    {
      grade: "Class-I",
      group: "I-V",
      downloadLink: "/downloads/grade1-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-II",
      group: "I-V",
      downloadLink: "/downloads/grade2-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-III",
      group: "I-V",
      downloadLink: "/downloads/grade3-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-IV",
      group: "I-V",
      downloadLink: "/downloads/grade4-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-V",
      group: "I-V",
      downloadLink: "/downloads/grade5-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },

    // Group: VI–VIII (3 Grades)
    {
      grade: "Class-VI",
      group: "VI-VIII",
      downloadLink: "/downloads/grade6-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-VII",
      group: "VI-VIII",
      downloadLink: "/downloads/grade7-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-VIII",
      group: "VI-VIII",
      downloadLink: "/downloads/grade8-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },

    // Group: IX–X
    {
      grade: "Class-IX",
      group: "IX-X",
      downloadLink: "/downloads/grade9-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-X",
      group: "IX-X",
      downloadLink: "/downloads/grade10-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },

    // Group: XI–XII
    {
      grade: "Class-XI",
      group: "XI-XII",
      downloadLink: "/downloads/grade11-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
    {
      grade: "Class-XII",
      group: "XI-XII",
      downloadLink: "/downloads/grade12-booklist.pdf",
      books: [
        { srno: "1", subject: "English", title: "English Expert (Supplementary Reader)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "English Expert (Course Book)", publisher: "Collins Learning" },
        { srno: "1", subject: "English", title: "Speak from UOLO", publisher: "UOLO Publisher" },
        { srno: "2", subject: "Hindi", title: "Arhul", publisher: "Green Earth Publisher" },
        { srno: "3", subject: "Maths", title: "Learning Maths", publisher: "Frank Educational AIDS" },
        { srno: "4", subject: "EVS", title: "The Green Era", publisher: "Era Education Books" },
        { srno: "5", subject: "Computer", title: "Computer Science Program (Tekie)", publisher: "UOLO Publisher" },
        { srno: "6", subject: "G.K", title: "Frontiers", publisher: "PM Publishers Pvt. Ltd." },
      ],
    },
  ]

  const groups = ["I-V", "VI-VIII", "IX-X", "XI-XII"]
  const [activeTab, setActiveTab] = useState("I-V")

  const currentBooklists = booklists.filter((b) => b.group === activeTab)

  return (
    <section id="booklist" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium leading-normal">
            MCS Learning Resources <span className="relative inline-block">and Booklist
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Find the complete list of prescribed textbooks and reference materials for each grade level.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveTab(group)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-base ${activeTab === group ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                }`}
            >
              Grade {group}
            </button>
          ))}
        </div>

        {/* Tables for Selected Tab */}
        <div className="space-y-12">
          {currentBooklists.map((list, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="bg-primary px-5 py-4 flex flex-row justify-between items-center gap-3">
                <h3 className="text-white font-inter font-semibold text-lg tracking-wide uppercase">{list.grade} Booklist</h3>
                <a
                  href={list.downloadLink}
                  className="text-primary bg-white px-4 py-2 text-sm font-inter font-semibold rounded hover:bg-blue-50"
                >
                  Download PDF
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 font-inter uppercase text-sm tracking-wide">
                    <tr>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Sr. No.</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Subject</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Title</th>
                      <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-gray-500">Publisher</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const groupedBySubject: { [key: string]: { sr: string; title: string; publisher: string }[] } = {}

                      list.books.forEach((book) => {
                        if (!groupedBySubject[book.subject]) {
                          groupedBySubject[book.subject] = []
                        }
                        groupedBySubject[book.subject].push({
                          sr: book.srno,
                          title: book.title,
                          publisher: book.publisher,
                        })
                      })

                      const rows: JSX.Element[] = []
                      let globalIndex = 0 // ← GLOBAL index for alternate color pattern

                      for (const [subject, books] of Object.entries(groupedBySubject)) {
                        books.forEach((book, index) => {
                          const isEven = globalIndex % 2 === 0
                          rows.push(
                            <tr
                              key={`${subject}-${index}`}
                              className={`${isEven ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 font-inter`}
                            >
                              {index === 0 && (
                                <>
                                  <td rowSpan={books.length} className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left text-gray-700 align-top">
                                    {book.sr}
                                  </td>
                                  <td rowSpan={books.length} className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left font-medium text-gray-900 align-top">
                                    {subject}
                                  </td>
                                </>
                              )}
                              <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left font-medium text-gray-900">{book.title}</td>
                              <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-left text-gray-700">{book.publisher}</td>
                            </tr>
                          )
                          globalIndex++ // ← increment for each rendered row
                        })
                      }

                      return rows
                    })()}
                  </tbody>

                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Booklist
