import React, { Link } from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>Stop it!</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-link'>Ayuda</Link>
          <Link className='nav-link'>Reiniciar</Link>
          <button className='nav-link'>Salir</button>
        </div>
      </div>
    </nav>
  )
}

export default Header;