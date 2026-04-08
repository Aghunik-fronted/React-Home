import React from 'react';

function Footer({name, children}) {
  return (
    <footer className='footer'>
        <p>© 2026 {name}</p>
        <div>{children}</div>
    </footer>
  );
};

export default Footer;