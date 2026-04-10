import { useState } from 'react';

function Header({name, children}) {
  return (
    <header>
        <h1>{name}</h1>
        <nav>{children}</nav>
    </header>
  );
}

export default Header;