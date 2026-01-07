import {
  FileText,
  ClipboardCheck,
  Users,
  School,
  BookOpen,
  Check,
  Info,
} from "lucide-react"

const AdmissionProcedure = () => {
  const steps = [
    {
      title: "Registration",
      desc: "Contact our admissions office via phone, email, or visit our campus to inquire about available seats and admission requirements for the desired grade level. Parents can collect the registration form from the school office or download it from the website. Fill all required details carefully.",
      icon: FileText,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      title: "Document Submission",
      desc: "Submit the completed registration form along with necessary documents — birth certificate, passport-sized photographs, and previous academic records etc. Refer below to obtain the list of all the necessary documents required for admission along with the application/registration form.",
      icon: ClipboardCheck,
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
      title: "Interaction / Assessment",
      desc: "Students may be invited for an entrance assessment to evaluate their academic readiness for the appropriate grade level and gauge thier readiness & skill level. Selected candidates & their parents maybe invited for a brief interraction with the school principal or designated admission committee.",
      icon: Users,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      title: "Admission Confirmation",
      desc: "Once selected, parents will receive an admission offer letter detailing the fee structure and payment schedule. Secure your child's place by submitting the required admission fees and documents for completing the enrollment process within the specified timeframe.",
      icon: School,
      color: "bg-rose-100 text-rose-700 border-rose-200",
    },
    {
      title: "Orientation & Commencement",
      desc: "After fee payment & confirmation of the seat, an orientation session welcomes new students and parents, helping them familiarize themselves with the school environment and ethos.",
      icon: BookOpen,
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
  ]

  // Required documents
  const documents = [
    "Completed application form",
    "Birth certificate (original and photocopy)",
    "Four recent passport-sized photographs",
    "Previous academic records/report cards",
    "Transfer certificate from previous school (if applicable)",
    "Medical health record and vaccination history",
    "Passport copy (for international students)",
    "Residence proof",
  ]
  
  return (
    <section id="admission-procedure" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Admission Procedure{" "}
            <span className="relative inline-block">
              & Guidelines
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] -bottom-5"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Join our learning community through a simple, transparent, and
            student-friendly admission journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-sky-200 pl-8 sm:pl-15 ml-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="mb-8 sm:mb-12 relative flex flex-col sm:flex-row sm:items-center sm:gap-10"
            >
              {/* Connector dot */}
              <div className="absolute -left-16 sm:-left-24  flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-3 sm:border-4 border-sky-400/75 shadow-lg">
                <step.icon className="w-6 h-6 text-sky-700" />
              </div>

              {/* Step content */}
              <div
                className={`flex-1 p-6 sm:p-8 rounded-2xl border shadow-sm ${step.color} hover:shadow-md transition-all duration-300`}
              >
                <h3 className="text-lg sm:text-xl font-semibold font-poppins mb-3 text-gray-900 tracking-wide">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default AdmissionProcedure