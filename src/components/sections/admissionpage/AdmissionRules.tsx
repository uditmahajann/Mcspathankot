import {
    FileText,
    Check,
    Info,
} from "lucide-react"

const AdmissionRules = () => {

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
        <section id="admission-rules" className="relative bg-white py-4 sm:py-10 my-10">
            <div className="mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
                        Guidelines for {" "}
                        <span className="relative inline-block">
                            Admission
                            <img
                                src="/Images/Doodles/LineYellow.png"
                                alt="Underline"
                                className="absolute w-[90%] left-5 -bottom-4"
                            />
                        </span><br className="block md:hidden"/>{" "} at MCS
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                        Our admission program offers the perfect balance between school and home life, providing extended hours of supervised learning, activities, and meals.
                    </p>
                </div>


                {/* Guidelines Section */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-12 lg:mb-16">
                    <div className="bg-primarydark p-5">
                        <h3 className="mb-1 text-lg sm:text-xl font-poppins font-bold text-white tracking-wide">Important Information for Parents</h3>
                        <p className="text-blue-100 text-sm sm:text-base font-inter">General guidelines for Admission</p>
                    </div>
                    <div className="p-6">
                        <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 font-inter">
                            <li>
                                Admission is subject to seat availability and completion of all
                                required formalities.
                            </li>
                            <li>Ensure that all documents submitted are genuine and verified.</li>
                            <li>Submission of registration form does not guarantee admission.</li>
                            <li>
                                Keep track of important admission dates through the school notice
                                board or website.
                            </li>
                            <li>
                                The school reserves the right to make final decisions regarding
                                admissions.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Required Documents */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-12 lg:mb-16">
                  <div className="bg-primarydark p-5">
                    <h3 className="mb-1 text-lg sm:text-xl font-poppins font-bold text-white tracking-wide">Required Documents</h3>
                    <p className="text-blue-100 text-sm sm:text-base font-inter">List of documents needed for Admission</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {documents.map((document, index) => (
                            <div key={index} className="flex items-center">
                                <div className="p-1 rounded-full bg-blue-100 items-center justify-center">
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 text-primary" />
                                </div>
                                <span className="ml-3 text-gray-700 text-sm sm:text-base font-inter">{document}</span>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Age Criteria */}
                <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-gray-100">
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6 tracking-wide leading-normal">Age Criteria for Admission</h3>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base font-inter">
                        The age criteria for admission to various classes are as follows (as of March 31st of the academic year):
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 font-inter">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Class
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Minimum Age
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Maximum Age
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pre-Nursery</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">2 years 6 months</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                                </tr>
                                <tr>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nursery</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">3 years 6 months</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                                </tr>
                                <tr>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">LKG</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">4 years 6 months</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                                </tr>
                                <tr>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">UKG</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">5 years 6 months</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">6 years 6 months</td>
                                </tr>
                                <tr>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">Class 1</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">6 years</td>
                                    <td className="px-4.5 py-2.5 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">7 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 font-inter">
                        Note: Age relaxation of up to 30 days may be considered in exceptional cases at the discretion of the school
                        management.
                    </p>
                </div>


                {/* CTA */}
                <div className="text-center mt-8 lg:mt-14">
                    <a
                        href="/downloads/school-prospectus.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all"
                    >
                        <FileText className="w-5 h-5" />
                        Download School Prospectus
                    </a>
                </div>
            </div>
        </section>

    )
}

export default AdmissionRules