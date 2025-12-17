import type React from "react"
import { ReceiptIndianRupee, RefreshCw, FileText, CircleCheck, Check, Download, Speech } from "lucide-react"
import CtaButton from "../../interface/CtaButton";

const Withdrawals: React.FC = () => {
  // Withdrawal process steps
  const withdrawalSteps = [
    {
      title: "Submit Application",
      description:
        "Parents must submit a written application for withdrawal to the school office at least one month in advance of the intended last day.",
      icon: FileText,
    },
    {
      title: "Clearance Process",
      description:
        "Obtain clearance from the library, sports department, laboratories, accounts office, and class teacher.",
      icon: CircleCheck,
    },
    {
      title: "Settlement of Dues",
      description: "All outstanding fees and dues must be cleared before the withdrawal process can be completed.",
      icon: ReceiptIndianRupee,
    },
    {
      title: "Exit Interview",
      description:
        "A brief exit interview may be conducted with the parents and/or student to understand the reason for withdrawal.",
      icon: Speech,
    },
    {
      title: "Issuance of Documents",
      description:
        "After completing all formalities, the school will issue the transfer certificate and other necessary documents.",
      icon: RefreshCw,
    },
  ]

  // Withdrawal policy points
  const withdrawalPolicyPoints = [
    "One calendar month's notice in writing or one month's fee in lieu of notice must be given before withdrawing a student from the school.",
    "Transfer Certificates will be issued only after all dues are cleared.",
    "The Security Deposit will be refunded after adjusting any outstanding dues when the student leaves the school.",
    "If a student is withdrawn during the academic year, the fee for the ongoing quarter must be paid in full regardless of the withdrawal date.",
    "For students withdrawing at the end of the academic year, the application must be submitted before March 31st.",
    "In case of any disciplinary withdrawal initiated by the school, the normal withdrawal procedures regarding fees and deposits will still apply.",
  ]

  return (
    <section id="withdrawals" className="pb-10 sm:pb-16 py-10 my-10 bg-white">
      <div className="container mx-auto px-5 min-[480px]:px-12 sm:px-16 lg:px-20 xl:px-40">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Withdrawal Process <span className="relative inline-block">& Guidelines
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[80%] left-12 -bottom-4 sm:-bottom-6 lg:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Learn about the withdrawal procedure, required approvals, and final documentation steps.
          </p>
        </div>
        
        {/* Withdrawal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-10 ">
          {withdrawalSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex w-12 h-12 items-center justify-center rounded-full bg-secondarylight text-secondary mb-4">
                  <Icon className="w-6 h-6 flex-shrink-0" />
                </div>
                <div className="flex items-center mb-2">
                  {/* <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium mr-2">
                    {index + 1}
                  </span> */}
                  <h3 className="text-lg font-poppins font-bold text-gray-900 tracking-wide">{index + 1}. {step.title}</h3>
                </div>
                <p className="text-gray-700 font-inter">{step.description}</p>
              </div>
            )
          })}

        </div>

        {/* Withdrawal Policy */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-gray-100 mb-16">
          <div className="bg-primary p-5">
            <h3 className="mb-1 text-xl font-poppins font-bold text-white tracking-wide">Withdrawal Policy</h3>
            <p className="text-blue-100 text-base font-inter">Important guidelines regarding student withdrawals</p>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {withdrawalPolicyPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                 <Check className="w-5 h-5 flex-shrink-0 text-green-600 mr-1" />
                  <span className="text-gray-700 font-inter">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Withdrawal Form Download */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2 tracking-wide">Withdrawal Application Form</h3>
              <p className="text-gray-700 font-inter">
                Download the official withdrawal application form to initiate the process.
              </p>
            </div>
           <div className="text-start text-base">
              <CtaButton className="text-base" text="Download Application Form" href="/preview" icon={Download} />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-12 bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Assistance?</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about the withdrawal process, please contact our administrative office:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a href="mailto:admin@mcs.edu" className="text-blue-600 hover:underline">
                  admin@mcs.edu
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <a href="tel:+911234567890" className="text-blue-600 hover:underline">
                  +91 123 456 7890
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Office Hours</p>
                <p className="text-gray-600">Monday to Friday: 8:00 AM - 3:00 PM</p>
                <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">Administrative Office, Main Building</p>
                <p className="text-gray-600">Montessori Cambridge School</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Withdrawals