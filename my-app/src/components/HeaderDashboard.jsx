import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiSidebar } from "react-icons/fi";

const HeaderDashboard = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white border-b border-gray-200">
      {/* Título e subtítulo */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">Visão geral do seu estoque e produtos</p>
      </div>

      {/* Campo de busca */}
      <div className="relative w-72">
        <IoSearchOutline size={20} className="absolute left-3 top-2.5"/>
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Ícones da direita */}
      <div className="flex items-center gap-6 text-xl text-gray-700">
        <button className="cursor-pointer p-3 hover:bg-gray-200 rounded-full transition-colors duration-200">
          <FiSidebar />
        </button>
        <button className="cursor-pointer p-3 hover:bg-gray-200 rounded-full transition-colors duration-200">
          <FiUser />
        </button>
      </div>
    </header>
  );
};

export default HeaderDashboard;
