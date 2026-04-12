import { useState } from 'react';

function Card({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-emerald-50 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-emerald-900">{item.name}</h3>
            <p className="text-emerald-700 font-semibold mt-1">Цена: {item.price} руб.</p>
          </div>
          <button 
            onClick={() => setSelectedItem(item)} 
            className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Подробнее
          </button>
        </div>
      ))}

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)} 
        >
          <div 
            className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-2xl transform transition-all border-t-4 border-emerald-500"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-start mb-4">
               <h2 className="text-2xl font-bold text-gray-800">{selectedItem.name}</h2>
               <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-2 py-1 rounded">
                 {selectedItem.price} ₽
               </span>
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="text-gray-600 leading-relaxed">
                {selectedItem.desc || "Описание товара временно отсутствует."}
              </p>
              {selectedItem.specs && (
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1 p-2.5">Характеристики:</p>
                  <p className="text-sm text-gray-700 italic">{selectedItem.specs}</p>
                </div>
              )}
            </div>

            <button 
              onClick={() => setSelectedItem(null)} 
              className="w-full bg-slate-800 text-white py-3 rounded-xl hover:bg-slate-900 font-medium transition-colors shadow-lg cursor-pointer"
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