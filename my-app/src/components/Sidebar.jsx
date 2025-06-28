import React from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsBoxArrowInDown } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";

const Menu = () => {
  return (
    <div className="w-3/12 min-h-full bg-blue-500 p-4">
      <div className="flex flex-col items-start w-full">
        <div className="h-10 text-2xl text-white font-medium flex justify-center items-center gap-3">
          <p className="w-10 h-10 bg-blue-400 rounded-md flex justify-center items-center"><BsFillBoxSeamFill/></p>
          <h1>Estoque Desk</h1>
        </div>
        <ul className="flex flex-col w-full gap-4 mt-5 border-t-2 border-blue-400 pt-4">
          <p className="font-light text-white">Navegação Principal</p>
          
          <li className="cursor-pointer w-full h-15 flex items-center p-3 text-white font-mono rounded-xl hover:bg-blue-400 duration-150">
            <BsBoxArrowInDown size={24} className="font-bold text-lg"/>
            <button className="cursor-pointer w-full text-left ml-3 text-lg font-bold">
              Cadastro
              <p className="text-[12px] font-light">Gerenciar produtos</p>
            </button>
          </li>

          <li className="cursor-pointer w-full h-15 flex items-center p-3 text-white font-mono rounded-xl hover:bg-blue-400 duration-150">
            <VscGraph size={24} className="font-bold text-lg"/>
            <button className="cursor-pointer w-full text-left ml-3 text-lg font-bold">
              Estoque
              <p className="text-[12px] font-light">Controle de estoque</p>
            </button>
          </li>

          <li className="cursor-pointer w-full h-15 flex items-center p-3 text-white font-mono rounded-xl hover:bg-blue-400 duration-150">
            <IoDocumentTextOutline size={24} className="font-bold text-lg"/>
            <button className="cursor-pointer w-full text-left ml-3 text-lg font-bold">
              Relatórios
              <p className="text-[12px] font-light">Analise de dados</p>
            </button>
          </li>

          <li className="cursor-pointer w-full h-15 flex items-center p-3 text-white font-mono rounded-xl hover:bg-blue-400 duration-150">
            <GoGear size={24} className="font-bold text-lg"/>
            <button className=" cursor-pointer w-full text-left ml-3 text-lg font-bold">
              Configurações
              <p className="text-[12px] font-light">Ajuste do sistema</p>
            </button>
          </li>

        </ul>
        <p className="text-center mt-115 w-full pt-4 border-t-2 border-blue-400 text-white font-light">@ 2025 Estoque Desk</p>
      </div>
    </div>
  );
};

export default Menu;
