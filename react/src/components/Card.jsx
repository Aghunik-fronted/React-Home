import { useState } from 'react';

function Card({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-emerald-100">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-gray-600">Цена: {item.price} руб.</p>
          <button 
            onClick={() => setSelectedItem(item)} 
            className="mt-2 bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-600 transition cursor-pointer"
          >
            Подробнее
          </button>
        </div>
      ))}

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedItem && (
        <div className="fixed inset-0 bg-amber-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-emerald-100 p-6 rounded-xl max-w-sm w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-700 mb-4 p-5">
              Это подробная информация о товаре "{selectedItem.name}". <br /> 
              Цена данного экземпляра составляет {selectedItem.price} рублей.
            </p>
            <button 
              onClick={() => setSelectedItem(null)} 
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 font-medium cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;