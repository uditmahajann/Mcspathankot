import React from "react";
import { Download } from "lucide-react";

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

const MandatoryDisclosure = () => {
  return (
    <section className="py-10 bg-gray-50 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* A: General Information */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">A: General Information</h3>
          <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3 text-left font-inter">S.No.</th>
                <th className="p-3 text-left font-inter">Information</th>
                <th className="p-3 text-left font-inter">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Name of the School", "Montessori Cambridge School"],
                ["2", "Affiliation No.", "1630182"],
                ["3", "School Code", "20190"],
                ["4", "Complete address with pin code", "Defence Road (Pangoli), Pathankot – 145001"],
                ["5", "Principal Name & Qualification", "Mrs. Rashmi Ahluwalia (M.A, B.Ed)"],
                ["6", "School email id", "mcs_pathankot@yahoo.co.in"],
                ["7", "Contact details", "+91 98765-70911/7696333777/1862390186"],
              ].map(([sno, label, value]) => (
                <tr key={`${sno}-${label}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="p-3.5 font-inter">{sno}</td>
                  <td className="p-3.5 font-inter uppercase">{label}</td>
                  <td className="p-3.5 font-inter font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* B: Documents */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">B: Documents and Information</h3>
          <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3 text-left font-inter">S.No.</th>
                <th className="p-3 text-left font-inter">Document Information</th>
                <th className="p-3 text-left font-inter">Upload Documents</th>
              </tr>
            </thead>
            <tbody>
              {["Affiliation", "NOC", "BuildingSafety", "FireSafety", "DEOCertificate", "WaterHealth"]
                .map((doc, i) => (
                  <tr key={`doc-${i}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                    <td className="p-3.5 font-inter">{i + 1}</td>
                    <td className="p-3.5 font-inter uppercase">{[
                      "Copies of affiliation/upgradation letter and the recent extension of affiliation, if any",
                      "Copies of no objection certificate(NOC) issued, if applicable, by the State Govt./UT",
                      "Copy of valid building safety certificate as per National Building code",
                      "Copy of Fire safety certificate issued by the competent authority",
                      "Copy of DEO certificate submitted by the school for affiliation/upgradation/extension of affiliation or self-certification by the school",
                      "Copies of valid water, health and sanitation certificates",
                    ][i]}</td>
                    <td className="p-3.5 font-inter font-medium">{downloadLink(`/Documents/${doc}.pdf`)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* C: Result and Academics */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">C: Result and Academics</h3>
          <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden mb-6">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3 text-left font-inter">S.No.</th>
                <th className="p-3 text-left font-inter">Information</th>
                <th className="p-3 text-left font-inter">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Fee Structure of the school", downloadLink("/Documents/FeeStructure.pdf")],
                ["2", "Annual academic calendar", downloadLink("/Documents/AcademicCalendar.pdf")],
                ["3", "List of Parents Teachers Association (PTA) members", downloadLink("/Documents/PTA.pdf")],
                ["4", "Last three-year result of the Board examination as per applicability", "See Below"],
              ].map(([sno, info, detail], i) => (
                <tr key={`result-${i}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="p-3.5 font-inter">{sno}</td>
                  <td className="p-3.5 font-inter uppercase">{info}</td>
                  <td className="p-3.5 font-inter font-medium">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Result Class X */}
          <h4 className="text-2xl font-semibold mb-4 text-gray-900">Result Class-X</h4>
          <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden mb-6">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3 text-left font-inter">S.No.</th>
                <th className="p-3 text-left font-inter">Year</th>
                <th className="p-3 text-left font-inter">Registered</th>
                <th className="p-3 text-left font-inter">Passed</th>
                <th className="p-3 text-left font-inter">Percentage</th>
                <th className="p-3 text-left font-inter">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {[2023, 2024, 2025].map((year, index) => (
                <tr key={`x-${year}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="p-3.5 font-inter">{index + 1}</td>
                  <td className="p-3.5 font-inter">{year}</td>
                  <td className="p-3.5 font-inter">120</td>
                  <td className="p-3.5 font-inter">118</td>
                  <td className="p-3.5 font-inter">98.3%</td>
                  <td className="p-3.5 font-inter">Excellent</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Result Class XII */}
          <h4 className="text-2xl font-semibold mb-4 text-gray-900">Result Class-XII</h4>
          <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden mb-6">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-3 text-left font-inter">S.No.</th>
                <th className="p-3 text-left font-inter">Year</th>
                <th className="p-3 text-left font-inter">Registered</th>
                <th className="p-3 text-left font-inter">Passed</th>
                <th className="p-3 text-left font-inter">Percentage</th>
                <th className="p-3 text-left font-inter">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {[2023, 2024, 2025].map((year,index) => (
                <tr key={`xii-${year}`} className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
                  <td className="p-3.5 font-inter">{index + 1}</td>
                  <td className="p-3.5 font-inter">{year}</td>
                  <td className="p-3.5 font-inter">98</td>
                  <td className="p-3.5 font-inter">95</td>
                  <td className="p-3.5 font-inter">96.9%</td>
                  <td className="p-3.5 font-inter">Outstanding</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

{/* D: Staff (Teaching) */}
<div className="mb-12">
  <h3 className="text-2xl font-semibold mb-4 text-gray-900">D: Staff (Teaching)</h3>
  <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden mb-6">
    <thead className="bg-primary text-white">
      <tr>
        <th className="p-3 text-left font-inter">S.No.</th>
        <th className="p-3 text-left font-inter">Information</th>
        <th className="p-3 text-left font-inter">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">1</td>
        <td className="p-3.5 font-inter uppercase">Principal</td>
        <td className="p-3.5 font-inter font-medium">Mrs. Rashmi Ahluwalia</td>
      </tr>

      {/* Sub-rows for Total Teachers */}
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td rowSpan={4} className="p-3.5 font-inter align-top">2</td>
        <td className="p-3.5 font-inter uppercase">Total no. of teachers</td>
        <td className="p-3.5 font-inter font-medium">65</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">I. PGT</td>
        <td className="p-3.5 font-inter font-medium">20</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">II. TGT</td>
        <td className="p-3.5 font-inter font-medium">25</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">III. PRT</td>
        <td className="p-3.5 font-inter font-medium">20</td>
      </tr>

      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">3</td>
        <td className="p-3.5 font-inter uppercase">Teacher Section Ratio</td>
        <td className="p-3.5 font-inter font-medium">1:30</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">4</td>
        <td className="p-3.5 font-inter uppercase">Details of Special Educator</td>
        <td className="p-3.5 font-inter font-medium">Available</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">5</td>
        <td className="p-3.5 font-inter uppercase">Details of Counsellor & Wellness Teacher</td>
        <td className="p-3.5 font-inter font-medium">Available</td>
      </tr>
    </tbody>
  </table>
</div>


       {/* E: Infrastructure */}
<div className="mb-12">
  <h3 className="text-2xl font-semibold mb-4 text-gray-900">E: School Infrastructure</h3>
  <table className="w-full border border-gray-300 shadow rounded-lg overflow-hidden mb-6">
    <thead className="bg-primary text-white">
      <tr>
        <th className="p-3 text-left font-inter">S.No.</th>
        <th className="p-3 text-left font-inter">Information</th>
        <th className="p-3 text-left font-inter">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">1</td>
        <td className="p-3.5 font-inter uppercase">Total Campus Area of School (in square mtr.)</td>
        <td className="p-3.5 font-inter font-medium">20,000 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">2</td>
        <td className="p-3.5 font-inter uppercase">No. and Size of the Classrooms (in square mtr.)</td>
        <td className="p-3.5 font-inter font-medium">No.- 55 | Size- 45 sq. m each</td>
      </tr>

      {/* Sub-rows for Labs */}
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td rowSpan={7} className="p-3.5 font-inter align-top">3</td>
        <td className="p-3.5 font-inter uppercase">No. of the size of labs including computer labs (in square mtr.)</td>
        <td className="p-3.5 font-inter font-medium">No.- 6 | Size- 150 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Biology Lab</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 50 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Chemistry Lab</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 50 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Physics Lab</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 50 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Mathematics Lab</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 45 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Computer Lab 1</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 60 sq. m</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter uppercase">Computer Lab 2</td>
        <td className="p-3.5 font-inter font-medium">No.- 1 | Size- 60 sq. m</td>
      </tr>

      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">4</td>
        <td className="p-3.5 font-inter uppercase">Internet Facility (Y/N)</td>
        <td className="p-3.5 font-inter font-medium">Yes</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">5</td>
        <td className="p-3.5 font-inter uppercase">No. of Girls Toilets</td>
        <td className="p-3.5 font-inter font-medium">20</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">6</td>
        <td className="p-3.5 font-inter uppercase">No. of Boys Toilets</td>
        <td className="p-3.5 font-inter font-medium">24</td>
      </tr>
      <tr className="even:bg-white odd:bg-gray-100 hover:bg-blue-50">
        <td className="p-3.5 font-inter">7</td>
        <td className="p-3.5 font-inter uppercase">
          Link of a YouTube video of the inspection of school covering the infrastructure of the school
        </td>
        <td className="p-3.5 font-inter font-medium">
          <a
            className="text-blue-600 hover:underline"
            href="https://youtube.com/examplevideo"
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
    </section>
  );
};

export default MandatoryDisclosure;
