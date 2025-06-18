import React from "react";

const Menu = () => {
  return (
    <div className="max-w-5/12 h-screen flex bg-emerald-700 p-4">
      <div className="relative flex flex-col items-center w-full">
        <h1 className="text-2xl text-white font-medium">List menu</h1>
        <ul className="flex flex-col items-center w-full gap-4 mt-10">
          <li className="text-lg text-white font-mono">
            <button className="cursor-pointer py-2 px-4 rounded-xl hover:bg-emerald-500 hover:font-bold duration-150">
              Cadastro
            </button>
          </li>
          <li className="text-lg text-white font-mono">
            <button className="cursor-pointer py-2 px-4 rounded-xl hover:bg-emerald-500 hover:font-bold duration-150">
              Consulta
            </button>
          </li>
          <li className="text-lg text-white font-mono">
            <button className="cursor-pointer py-2 px-4 rounded-xl hover:bg-emerald-500 hover:font-bold duration-150">
              Relatórios
            </button>
          </li>
          <li className="text-lg text-white font-mono">
            <button className="cursor-pointer py-2 px-4 rounded-xl hover:bg-emerald-500 hover:font-bold duration-150">
              Vendas
            </button>
          </li>
        </ul>
        <p className="absolute bottom-5 text-center">Nick name**</p>
      </div>
    </div>
  );
};

export default Menu;
