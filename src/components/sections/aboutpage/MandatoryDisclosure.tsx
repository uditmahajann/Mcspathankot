import { Download } from "lucide-react";

type BoardResultRow = {
  year: number;
  registered: number;
  passed: number;
  percentage: number;
  remarks?: string;
};


const downloadLink = (url: string) => (
  <a
    href={url}
    download
    className="text-blue-600 hover:underline hover:text-blue-800 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="inline w-4 h-4 mr-1" />View
  </a>
);

const pdfdocument = (url?: string) =>
  url ? downloadLink(url) : <span className="text-gray-400">Not Uploaded</span>;


const MandatoryDisclosure = ({ data }: { data: any }) => {
  return (
    <section className="py-4 sm:py-10 my-10 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 min-[540px]:px-12 sm:px-16 md:px-12 lg:px-20">

        {/* A: General Information */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">A: General Information</h3>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Information</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Name of the School", data.schoolName],
                  ["2", "Affiliation No.", data.affiliationNo],
                  ["3", "School Code", data.schoolCode],
                  ["4", "Complete address with pin code", data.address],
                  ["5", "Principal Name & Qualification", data.principal],
                  ["6", "School email id", data.email],
                  ["7", "Contact details", data.contact],
                ].map(([sno, label, value]) => (
                  <tr key={`${sno}-${label}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{sno}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">{label}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* B: Documents */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">B: Documents and Information</h3>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Document Information</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Upload Documents</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">1</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copies of affiliation/upgradation letter and the recent extension of affiliation, if any</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.affiliation?.asset?.url ? (
                      <a
                        href={data.documents.affiliation.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">2</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copies of no objection certificate(NOC) issued, if applicable, by the State Govt./UT</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.noc?.asset?.url ? (
                      <a
                        href={data.documents.noc.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">3</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copy of valid building safety certificate as per National Building code</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.buildingSafety?.asset?.url ? (
                      <a
                        href={data.documents.buildingSafety.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">4</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copy of Fire safety certificate issued by the competent authority</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.fireSafety?.asset?.url ? (
                      <a
                        href={data.documents.fireSafety.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">5</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copy of DEO certificate submitted by the school for affiliation/upgradation/extension of affiliation or self-certification by the school</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.deo?.asset?.url ? (
                      <a
                        href={data.documents.deo.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">6</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Copies of valid water, health and sanitation certificates</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    {data.documents?.waterHealth?.asset?.url ? (
                      <a
                        href={data.documents.waterHealth.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                      >
                        <Download className="inline w-4 h-4 mr-1" />View
                      </a>
                    ) : (
                      <span className="text-gray-400">Not Uploaded</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* C: Result and Academics */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">C: Result and Academics</h3>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Information</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Fee Structure of the school", pdfdocument(data.feeStructure?.asset?.url),],
                  ["2", "Annual academic calendar", pdfdocument(data.academicCalendar?.asset?.url),],
                  ["3", "List of Parents Teachers Association (PTA) members", pdfdocument(data.pta?.asset?.url),],
                  ["4", "Last three-year result of the Board examination as per applicability", "See Below"],
                ].map(([sno, info, detail], i) => (
                  <tr key={`result-${i}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{sno}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">{info}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Result Class X */}
          <h4 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Result Class-X</h4>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Year</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Registered</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Passed</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Percentage</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {data.classXResults?.map((row: BoardResultRow, i: number) => (
                  <tr key={row.year ?? i} className="odd:bg-gray-50">
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{i + 1}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.year}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.registered}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.passed}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.percentage}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Result Class XII */}
          <h4 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">Result Class-XII</h4>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Year</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Registered</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Passed</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Percentage</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {data.classXIIResults?.map((row: BoardResultRow, i: number) => (
                  <tr key={row.year ?? i} className="odd:bg-gray-50">
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{i + 1}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.year}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.registered}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.passed}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.percentage}</td>
                    <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* D: Staff (Teaching) */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">D: Staff (Teaching)</h3>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Information</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">1</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Principal</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">Mrs. Rashmi Ahluwalia</td>
                </tr>

                {/* Sub-rows for Total Teachers */}
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td rowSpan={4} className="p-3.5 font-inter align-top">2</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Total no. of teachers</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.totalTeachers}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">I. PGT</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.pgt}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">II. TGT</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.tgt}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">III. PRT</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.prt}</td>
                </tr>

                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">3</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Teacher Section Ratio</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.teacherRatio}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">4</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Details of Special Educator</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.specialEducator}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">5</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Details of Counsellor & Wellness Teacher</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.counsellor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* E: Infrastructure */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">E: School Infrastructure</h3>
          <div className="rounded-lg shadow-lg overflow-scroll lg:overflow-hidden border border-gray-100 mb-16">
            <table className="min-w-full text-sm lg:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">S.No.</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Information</th>
                  <th className="px-4.5 py-4 sm:px-6 sm:py-5 text-left font-inter">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">1</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Total Campus Area of School (in square mtr.)</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.campusArea}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">2</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">No. and Size of the Classrooms (in square mtr.)</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.classrooms}</td>
                </tr>

                {/* Sub-rows for Labs */}
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td rowSpan={7} className="p-3.5 font-inter align-top">3</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">No. of the size of labs including computer labs (in square mtr.)</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.labs}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Biology Lab</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.biologyLab}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Chemistry Lab</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.chemistryLab}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Physics Lab</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.physicsLab}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Mathematics Lab</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.mathsLab}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Computer Lab 1</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.computerLab1}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Computer Lab 2</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.computerLab2}</td>
                </tr>

                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">4</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">Internet Facility (Y/N)</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.internet}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">5</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">No. of Girls Toilets</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.girlsToilets}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">6</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">No. of Boys Toilets</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">{data.boysToilets}</td>
                </tr>
                <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter">7</td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter uppercase">
                    Link of a YouTube video of the inspection of school covering the infrastructure of the school
                  </td>
                  <td className="px-4.5 py-3.5 sm:px-6 sm:py-4 font-inter font-medium">
                    <a
                      className="text-blue-600 hover:underline"
                      href={data.inspectionVideo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      YouTube Link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MandatoryDisclosure;
