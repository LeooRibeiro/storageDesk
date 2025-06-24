import React from 'react'

const InfoDashboard = () => {
    return (
        <section className="px-6 py-4">
          {/* Título e botão */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Gestão de Produtos</h2>
              <p className="text-sm text-gray-500">Gerencie seu catálogo de produtos</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 text-sm">
              <span className="text-lg">+</span> Adicionar Produto
            </button>
          </div>
    
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total de Produtos</p>
                <h3 className="text-xl font-semibold text-gray-900"> {/* valor aqui */} </h3>
                <p className="text-xs text-green-600 mt-1"> {/* % e texto aqui */} </p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                {/* ícone aqui */}
              </div>
            </div>
    
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Produtos em Estoque</p>
                <h3 className="text-xl font-semibold text-gray-900"> {/* valor aqui */} </h3>
                <p className="text-xs text-green-600 mt-1"> {/* % e texto aqui */} </p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                {/* ícone aqui */}
              </div>
            </div>
    
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Produtos em Falta</p>
                <h3 className="text-xl font-semibold text-gray-900"> {/* valor aqui */} </h3>
                <p className="text-xs text-red-500 mt-1"> {/* % e texto aqui */} </p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                {/* ícone aqui */}
              </div>
            </div>
    
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Vendas do Mês</p>
                <h3 className="text-xl font-semibold text-gray-900"> {/* valor aqui */} </h3>
                <p className="text-xs text-green-600 mt-1"> {/* % e texto aqui */} </p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                {/* ícone aqui */}
              </div>
            </div>
          </div>
        </section>
      );
}

export default InfoDashboard