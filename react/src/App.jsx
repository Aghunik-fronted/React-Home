import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer';

function App() {
  const products = [
    { name: 'Ноутбук', price: 50000 },
    { name: 'Мышь', price: 1500 },
    { name: 'Клавиатура', price: 3000 }
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
 