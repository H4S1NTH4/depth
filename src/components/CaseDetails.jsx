import React from "react";

const CaseDetails = () => {
  const filters = [
    "Select",
    "RTOM",
    "Arrears Amount",
    "DTM",
    "Agent",
    "Status",
    "Service Type",
    "From",
    "To",
  ];

  const data = [
    {
      id: "RC001",
      accountNo: "0115678",
      serviceType: "PEO TV",
      amount: "54,000",
      status: "FTL",
      agent: "CMS",
      rtom: "AD",
      createdDate: "11/12/2024",
      lastPaidDate: "11/12/2024",
    },
    {
      id: "RC001",
      accountNo: "8765946",
      serviceType: "LTE",
      amount: "-",
      status: "Write Off",
      agent: "Prompt",
      rtom: "GM",
      createdDate: "23/4/2023",
      lastPaidDate: "23/4/2023",
    },
    {
      id: "RC001",
      accountNo: "3754918",
      serviceType: "Fiber",
      amount: "43,750",
      status: "Being Settle",
      agent: "ACCIVA",
      rtom: "KU",
      createdDate: "2/5/2024",
      lastPaidDate: "2/5/2024",
    },
  ];

  return (
    <div className="p-4">
      {/* Filter Section */}
      <div className="bg-white shadow-md p-4 mb-4">
        <h2 className="font-bold text-lg mb-2">Case Details (Filter)</h2>
        <div className="grid grid-cols-5 gap-4">
          {filters.map((filter, index) => (
            <select
              key={index}
              className="border border-gray-300 rounded p-2 text-gray-700"
            >
              <option>{filter}</option>
            </select>
          ))}
          <button className="col-span-1 bg-blue-500 text-white py-2 rounded shadow">
            Submit
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md p-4">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              {[
                "ID",
                "Account No.",
                "Service Type",
                "Amount",
                "Status",
                "Agent",
                "RTOM",
                "Created Date",
                "Last Paid Date",
              ].map((heading, index) => (
                <th key={index} className="border border-gray-300 p-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {Object.values(row).map((value, idx) => (
                  <td key={idx} className="border border-gray-300 p-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded shadow">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
