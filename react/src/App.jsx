import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer';

function App() {
  const products = [
  { 
    name: 'Ноутбук', 
    price: 50000, 
    desc: 'Мощный игровой ноутбук с отличным охлаждением.',
    specs: 'RTX 3060, 16GB RAM, 512GB SSD'
  },
  { 
    name: 'Мышь', 
    price: 1500, 
    desc: 'Беспроводная мышь для работы и игр.',
    specs: '16000 DPI, 6 кнопок'
  },
  { 
    name: 'Клавиатура', 
    price: 3000, 
    desc: 'Механическая клавиатура с RGB подсветкой.',
    specs: 'Blue Switches, Anti-ghosting'
  }
];
  return (
    <>
      <div className='react-app'>
          <Header name="Мой магазин">
            <ul>
              <li><a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors">Главная</a></li>
              <li><a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors">Каталог</a></li>
              <li><a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors">О нас</a></li>
            </ul>
          </Header>
          <Card items={products}/>
          <Footer name="React- Home Inc.">
      
          </Footer>
      </div>
    </>
  );
}

export default App
 