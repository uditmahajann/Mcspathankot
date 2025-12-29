import type React from "react"
import { ReceiptIndianRupee, RefreshCw, FileText, CircleCheck, Check, Info, Download } from "lucide-react"
import CtaButton from "../../interface/CtaButton";

const TransferCertificate: React.FC = () => {
  // TC process steps
  const tcSteps = [
    {
      title: "Submit Application",
      description: "Parents must submit a written application requesting a Transfer Certificate to the school office.",
      icon: FileText,
    },
    {
      title: "Clearance Process",
      description:
        "Obtain clearance from all departments including library, laboratories, sports, and accounts office.",
      icon: CircleCheck,
    },
    {
      title: "Fee Settlement",
      description: "All outstanding dues must be cleared before the TC can be issued.",
      icon: ReceiptIndianRupee,
    },
    {
      title: "Processing Time",
      description: "The TC will be issued within 7 working days after completing all formalities.",
      icon: RefreshCw,
    },
  ]

  // Required documents
  const requiredDocuments = [
    "Written application from parents requesting TC",
    "Clearance form signed by all concerned departments",
    "Receipt of fee payment for the current quarter",
    "Original admission receipt",
    "Student ID card",
  ]

  return (
    <section id="transfer-certificate" className="py-4 sm:py-10 my-10 bg-white">
      <div className="container mx-auto px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl md:text-4xl text-gray-900 font-playpen font-medium">
            Transfer <span className="relative inline-block">Certificate
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[90%] left-6 -bottom-4 sm:-bottom-6 lg:-bottom-8"
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Access information and application details for obtaining a student’s transfer certificate.
          </p>
        </div>

        {/* What is a TC */}
        <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-poppins font-bold text-gray-900 mb-4 tracking-wide">What is a Transfer Certificate?</h3>
          <p className="text-gray-700 mb-4 font-inter">
            A Transfer Certificate (TC) is an official document issued by the school when a student leaves to join
            another educational institution. It contains essential information about the student's academic record,
            conduct, and reason for leaving. This document is mandatory for admission to another school or college.
          </p>
          <p className="text-gray-700 font-inter">
            At Montessori Cambridge School, we ensure a smooth and efficient process for issuing Transfer Certificates
            to our outgoing students, following all guidelines set by the Central Board of Secondary Education (CBSE).
          </p>
        </div>

        {/* TC Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 xl:px-20">
          {tcSteps.map((step, index) => {
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

        {/* Required Documents */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-12 lg:mb-16">
          <div className="bg-primary p-5">
            <h3 className="mb-1 text-xl font-poppins font-bold text-white tracking-wide">Required Documents</h3>
            <p className="text-blue-100 text-sm sm:text-base font-inter">Documents needed for TC application</p>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {requiredDocuments.map((document, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 shrink-0 text-green-600 mr-2" />
                  <span className="text-gray-700 font-inter">{document}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4 tracking-wide">Important Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mr-2 mt-1" />
                <span className="text-gray-700 font-inter">
                  The TC will be issued in the name that appears on the student's admission records.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  In case of any discrepancy in the name or other details, it should be brought to the notice of the
                  school administration immediately.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  The TC will be issued only once. In case of loss, a duplicate TC can be issued upon submission of an
                  FIR and payment of the prescribed fee.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  The TC must be collected by the parent/guardian in person from the school office.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4 tracking-wide">TC Application Form</h3>
            <p className="text-gray-700 mb-6 font-inter">
              Download the official Transfer Certificate application form to initiate the process.
            </p>
            <div className="text-start text-base">
              <CtaButton className="text-base" text="Download TC Form" href="/preview" icon={Download} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransferCertificate