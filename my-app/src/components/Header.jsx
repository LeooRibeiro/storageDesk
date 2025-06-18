import React from "react";

const Header = () => {
  return (
    <div ClassName="w-full text-black">
      <div className="h-20 flex justify-between items-center p-4 bg-emerald-800">
        <h1 className="text-white text-4xl font-bold text-shadow-emerald-950">
          Storage Desk - company
        </h1>
        <div className="flex items-center gap-4">
          <p>imagem</p>
          <p className="text-2xl text-white font-medium">Outsing</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
