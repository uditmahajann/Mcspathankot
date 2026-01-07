import type React from "react"
import { Wallet, Landmark, CreditCard} from "lucide-react"
import CtaButton from "../../interface/CtaButton";

type FeeRow = {
  class: string
  annual: string
  one: string
  two: string
  three: string
  four: string
}

type FeeCategory = {
  key: string
  title: string
  description?: string
  rows: FeeRow[]
}

interface FeeStructureProps {
  feeCategories: FeeCategory[]
}

const FeeStructure: React.FC<FeeStructureProps> = ({ feeCategories }) => {

  // Payment methods
  const paymentMethods = [
    {
      name: "Online Payment",
      description: "Pay securely through our online portal using credit/debit cards or net banking.",
      icon: Wallet,
    },
    {
      name: "Bank Transfer",
      description: "Direct bank transfer to the school account.",
      icon: Landmark,
    },
    {
      name: "Cheque/DD",
      description: "Payable to 'Montessori Cambridge School' at the school accounts office.",
      icon: CreditCard,
    },
  ]

  return (
    <section id="fee-structure" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Our Fee <span className="relative inline-block">Structure
              <img
                src="/Images/Doodles/LineYellow.png"
                alt="Underline"
                className="absolute w-[90%] -bottom-4"
              />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Detailed breakdown of all applicable fees for the academic year 2024-25
          </p>
        </div>

        {/* Fee Categories */}

        <h3 className="text-xl font-semibold mb-4 text-gray-900">A. One-Time Payable Fees</h3>
        <div className="rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-16 lg:mb-25">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primarydark text-white p-5 font-inter">
              <tr>
                <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-sm font-medium text-white uppercase tracking-wider ">Sr.No.</th>
                <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-sm font-medium text-white uppercase tracking-wider ">Fee Type</th>
                <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider ">Fee Amount</th>
                <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider ">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50 font-inter">
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">1</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">Registration Fee</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">₹1000</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">One time payable and Non-refundable</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50 font-inter">
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">2</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">Admission Fee</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">₹4000</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">Payable at the time of admission and Non-Refundable</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50 font-inter">
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">3</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">Prospectus Fee</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">₹100</td>
                <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center">Non-Refundable</td>
              </tr>
            </tbody>
          </table>
        </div>

        {feeCategories?.map((category) => (
        <div key={category.key}>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            {category.key}. {category.title}
          </h2>

          <div className="rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-16 lg:mb-25">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primarydark p-5 font-inter">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-sm font-medium text-white uppercase tracking-wider">CLASS</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider">ANNUAL FEES</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider">1ST INSTALLMENT</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider">2ND INSTALLMENT</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider">3RD INSTALLMENT</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm font-medium text-white uppercase tracking-wider">4TH INSTALLMENT</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {category.rows?.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white hover:bg-blue-50" : "bg-gray-100 hover:bg-blue-50"}
                  >
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left font-inter">{row.class}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center font-inter">{row.annual}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center font-inter">{row.one}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center font-inter">{row.two}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center font-inter">{row.three}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 text-center font-inter">{row.four}</td>
                  </tr>
                ))}
              </tbody>
              <tr className="bg-secondarylight">
                    <th colSpan={6} className="px-4.5 py-3.5 text-left text-xs sm:text-sm font-inter font-medium text-secondarydark">
                      {category.description}
                    </th>
              </tr>
            </table>
            </div>

            {/* {category.description && (
              <div className="bg-red-50 p-4 text-sm text-red-600">
                {category.description}
              </div>
            )} */}
          </div>
        </div>
      ))}


        {/* {feeCategories.map((category, index) => (
          <div key={index} className="bg-white">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">{category.title}</h3>
            <div className="rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-16">
              <div className="overflow-x-auto">

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary p-5 font-inter">

                    <tr>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-left text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        Annual Fees
                      </th>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        1st Installment
                      </th>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        2nd Installment
                      </th>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        3rd Installment
                      </th>
                      <th
                        scope="col"
                        className="px-4.5 py-4 sm:px-6 sm:py-5 text-center text-sm lg:text-base font-medium text-white uppercase tracking-wider"
                      >
                        4th Installment
                      </th>
                    </tr>

                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.rows.map((fee, feeIndex) => (
                      <tr key={feeIndex} className={feeIndex % 2 === 0 ? "bg-white hover:bg-blue-50" : "bg-gray-100 hover:bg-blue-50"}>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base font-medium text-gray-900 text-left font-inter">For {fee.class}</td>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base text-gray-500 text-center font-inter">{fee.annual}</td>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base text-gray-500 text-center font-inter">{fee.one}</td>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base text-gray-500 text-center font-inter">{fee.two}</td>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base text-gray-500 text-center font-inter">{fee.three}</td>
                        <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm lg:text-base text-gray-500 text-center font-inter">{fee.four}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tr className="bg-secondarylight">
                    <th colSpan={6} className="px-4.5 py-3.5 text-left text-xs sm:text-sm font-inter font-medium text-secondarydark">
                      {category.description}
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ))} */}

        {/* Fee Policy */}
        <div className="mt-8 sm:mt-20 bg-blue-50 rounded-2xl p-6 sm:p-8 shadow-md">
          <h3 className="text-xl lg:text-2xl font-poppins font-bold text-primarydark mb-6 tracking-wide">Our Fee Policy</h3>
          <div className="space-y-4 text-gray-700 font-inter">
            <p>
              <strong>Due Dates:</strong> Quarterly fees are due on the 10th of April, July, October, and January.
            </p>
            <p>
              <strong>Late Payment:</strong> A late fee of ₹100 per day will be charged for payments made after the due
              date.
            </p>
            <p>
              <strong>Sibling Discount:</strong> A 10% discount on tuition fees is offered for the second child and 15%
              for the third child from the same family studying in the school.
            </p>
            <p>
              <strong>Annual Payment Discount:</strong> A 5% discount is offered if the entire year's tuition fee is
              paid in advance.
            </p>
            <p>
              <strong>Refund Policy:</strong> No refund of fees will be made if a student withdraws from the school
              during the middle of a quarter. The security deposit is refundable after adjusting any outstanding dues.
            </p>
            <p>
              <strong>Fee Revision:</strong> The school reserves the right to revise the fee structure for the next
              academic year.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl lg:text-2xl font-poppins font-bold text-gray-900 text-center mb-6 sm:mb-8 tracking-wide">Payment Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex w-12 h-12 items-center justify-center rounded-full bg-primarylight text-primary mb-4">
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-poppins font-bold text-gray-900 tracking-wide">{index + 1}. {method.name}</h3>
                </div>
                <p className="text-gray-700 font-inter">{method.description}</p>
              </div>
            )
          })}

        </div>
        </div>

        {/* Financial Assistance */}

        {/* <div className="mt-8 sm:mt-12 bg-blue-50 rounded-xl p-8 sm:p-12 shadow-md">
          <div className="flex flex-col items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl lg:text-2xl font-poppins font-bold text-gray-900 mb-3 tracking-wide text-center">Financial Assistance & Scholarships</h3>
              <p className="text-gray-700 font-inter text-center text-base sm:text-lg">
                We believe that financial constraints should not be a barrier to quality education. Montessori Cambridge
            School offers merit-based scholarships and need-based financial assistance to deserving students.
              </p>
            </div>
           <div className="text-center text-base mt-6">
              <CtaButton className="text-base" text="Learn More About Scholarships" href="/preview"/>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default FeeStructure
