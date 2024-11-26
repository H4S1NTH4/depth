// src/components/MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">CPE Collect</h1>

      {/* Customer Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Customer Detail</h2>
        <div className="text-gray-600 space-y-2">
          <p>Case ID</p>
          <p>Name</p>
          <p>Arrears Amount</p>
          <p>Contact Number</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-200 p-3 text-left font-semibold text-gray-600">
                Telephone No
              </th>
              <th className="border border-gray-200 p-3 text-left font-semibold text-gray-600">
                Service Type
              </th>
              <th className="border border-gray-200 p-3 text-left font-semibold text-gray-600">
                Model
              </th>
              <th className="border border-gray-200 p-3 text-left font-semibold text-gray-600">
                Serial No
              </th>
              <th className="border border-gray-200 p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-3">0112234566</td>
              <td className="border border-gray-200 p-3">Peo</td>
              <td className="border border-gray-200 p-3">
                <input
                  type="text"
                  placeholder="Enter"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </td>
              <td className="border border-gray-200 p-3">
                <input
                  type="text"
                  placeholder="Enter"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </td>
              <td className="border border-gray-200 p-3 text-right">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
