// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      {/* Header */}
      <div className="p-6 text-blue-600 font-bold text-lg">DRS</div>

      {/* Menu */}
      <ul className="space-y-4">
        <li className="px-6 py-3 cursor-pointer hover:bg-gray-100">Dash Board</li>
        <li className="px-6 py-3 cursor-pointer hover:bg-gray-100">Case Register</li>
        <li className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold">Case List</li>
        <li className="px-6 py-3 cursor-pointer hover:bg-gray-100">Function</li>
        <li className="px-6 py-3 cursor-pointer hover:bg-gray-100">Summary</li>
      </ul>

      {/* Footer */}
      <div className="p-6 text-center">
        <img src="logo.png" alt="Logo" className="mx-auto w-24" />
      </div>
    </div>
  );
};

export default Sidebar;
