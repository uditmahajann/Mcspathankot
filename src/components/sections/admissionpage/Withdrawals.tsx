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
    <section id="withdrawals" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Withdrawal Process <span className="relative inline-block">& Guidelines
              <img
                src="/Images/Doodles/LineBlue.png"
                alt="Underline"
                className="absolute w-[75%] -bottom-4"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Learn about the withdrawal procedure, required approvals, and final documentation steps.
          </p>
        </div>
        
        {/* Withdrawal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {withdrawalSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex w-12 h-12 items-center justify-center rounded-full bg-secondarylight text-secondary mb-4">
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-poppins font-bold text-gray-900 tracking-wide">{index + 1}. {step.title}</h3>
                </div>
                <p className="text-gray-700 font-inter">{step.description}</p>
              </div>
            )
          })}

        </div>

        {/* Withdrawal Policy */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-primarydark p-5">
            <h3 className="mb-1 text-xl font-poppins font-bold text-white tracking-wide">Withdrawal Policy</h3>
            <p className="text-blue-100 text-sm sm:text-base font-inter">Important guidelines regarding student withdrawals</p>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {withdrawalPolicyPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                 <Check className="w-5 h-5 shrink-0 text-green-600 mr-2" />
                  <span className="text-gray-700 font-inter">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Withdrawal Form Download */}
        {/* <div className="mt-12 bg-blue-50 rounded-xl p-6 lg:p-8 shadow-md">
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
        </div> */}
      </div>
    </section>
  )
}

export default Withdrawals