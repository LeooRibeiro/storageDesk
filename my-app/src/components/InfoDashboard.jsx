import React, { useState } from 'react';
import { FiBox } from "react-icons/fi";
import { SlSocialDropbox } from "react-icons/sl"
import { TbBoxOff } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";

const InfoDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    tipo: '',
    valor: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produto cadastrado:', form);
    // Aqui pode chamar API ou salvar no estado global
    setShowModal(false);
  };

  return (
    <section className="px-6 py-4">
      {/* Título e botão */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Gestão de Produtos</h2>
          <p className="text-sm text-gray-500">Gerencie seu catálogo de produtos</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 text-sm"
        >
          <span className="text-lg">+</span> Adicionar Produto
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total de Itens</p>
            <h3 className="text-xl font-semibold text-gray-900"> 1,234 </h3>
          </div>
          <div className="bg-gray-100 rounded-full p-1"><SlSocialDropbox size={26}/></div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Produtos em Estoque</p>
            <h3 className="text-xl font-semibold text-gray-900"> 987 </h3>
          </div>
          <div className="bg-gray-100 rounded-full p-1"><FiBox size={26}/></div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Produtos em Falta</p>
            <h3 className="text-xl font-semibold text-gray-900"> 43 </h3>
          </div>
          <div className="bg-gray-100 rounded-full p-1"><TbBoxOff size={26}/></div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Valor total em patrimonio</p>
            <h3 className="text-xl font-semibold text-gray-900"> R$ 45.231 </h3>
          </div>
          <div className="bg-gray-100 rounded-full p-1"><MdAttachMoney size={26}/></div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Cadastro de Produto</h2>
            <p className="text-sm text-gray-500 mb-4">Preencha os dados abaixo</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
                />
              </div>

              {/* Tipo - Select */}
              <div>
                <label className="block text-sm font-medium">Tipo</label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="acessorios">Acessórios</option>
                  <option value="pecas">Peças</option>
                  <option value="manutencao">Manutenção</option>
                </select>
              </div>

              {/* Valor - com prefixo R$ */}
              <div>
                <label className="block text-sm font-medium">Valor</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
                  <span className="text-gray-500 mr-1">R$</span>
                  <input
                    type="number"
                    name="valor"
                    value={form.valor}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Quantidade */}
              <div>
                <label className="block text-sm font-medium">Quantidade</label>
                <input
                  type="number"
                  name="quantidade"
                  value={form.quantidade}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>

              {/* Ações */}
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default InfoDashboard;
