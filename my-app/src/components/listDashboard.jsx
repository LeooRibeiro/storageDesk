import React from 'react';

const products = [
  {
    name: 'Notebook Dell Inspiron',
    category: 'Eletrônicos',
    price: 'R$ 2.119,00',
    stock: '15 unidades',
    stockClass: 'text-green-600'
  },
  {
    name: 'Mouse Logitech MX Master',
    category: 'Acessórios',
    price: 'R$ 199,00',
    stock: '42 unidades',
    stockClass: 'text-green-600'
  },
  {
    name: 'Teclado Mecânico RGB',
    category: 'Acessórios',
    price: 'R$ 289,00',
    stock: '8 unidades',
    stockClass: 'text-yellow-500'
  },
  {
    name: 'Monitor 24" Full HD',
    category: 'Eletrônicos',
    price: 'R$ 599,00',
    stock: '5 unidades',
    stockClass: 'text-yellow-500'
  },
  {
    name: 'Webcam HD 1080p',
    category: 'Acessórios',
    price: 'R$ 149,00',
    stock: '50',
    stockClass: 'text-green-600'
  },
  {
    name: 'Webcam HD 1080p',
    category: 'Acessórios',
    price: 'R$ 149,00',
    stock: 'Sem estoque',
    stockClass: 'text-red-500'
  },{
    name: 'Webcam HD 1080p',
    category: 'Acessórios',
    price: 'R$ 149,00',
    stock: 'Sem estoque',
    stockClass: 'text-red-500'
  }
  ,{
    name: 'Webcam HD 1080p',
    category: 'Acessórios',
    price: 'R$ 149,00',
    stock: 'Sem estoque',
    stockClass: 'text-red-500'
  }
  ,{
    name: 'Webcam HD 1080p',
    category: 'Acessórios',
    price: 'R$ 149,00',
    stock: 'Sem estoque',
    stockClass: 'text-red-500'
  }
];

const listDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-h-170 overflow-y-scroll">
      <h2 className="text-xl font-semibold mb-1">Produtos Recentes</h2>
      <p className="text-gray-500 mb-4">Últimos produtos adicionados ao sistema</p>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded"
          >
            <div>
              <div className="text-md font-medium text-gray-800">{product.name}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
            </div>
            <div className="text-right">
              <div className="text-md font-medium text-gray-800">{product.price}</div>
              <div className={`text-sm font-medium ${product.stockClass}`}>
                {product.stock}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default listDashboard;
