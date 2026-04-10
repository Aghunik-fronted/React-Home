import React from 'react';

function Footer({name, children}) {
  return (
    <footer className='footer'>
        <p>© 2026 {name}</p>
        <nav className='footer-nav'>
            <a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors">Политика конфиденциальности</a> | 
            <a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors"> Помощь</a> | 
            <a href="#" className="text-[#8d7d7d] font-semibold no-underline hover:text-orange-400 transition-colors"> Контакты</a>
        </nav>
    </footer>
  );
};

export default Footer;