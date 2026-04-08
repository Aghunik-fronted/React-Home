import React from 'react';

function Footer({name, children}) {
  return (
    <footer className='footer'>
        <p>© 2026 {name}</p>
        <nav className='footer-nav'>
            <a href="#">Политика конфиденциальности</a> | 
            <a href="#"> Помощь</a> | 
            <a href="#"> Контакты</a>
        </nav>
    </footer>
  );
};

export default Footer;