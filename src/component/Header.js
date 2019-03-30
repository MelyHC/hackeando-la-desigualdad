import React from 'react';
import { Link } from 'react-router-dom'


const HeaderLogo = () => {
  return (
    <nav className='navbar navbar-md navbar-expand-md navbar-light bg-light '>
     <div className='container'>
     <Link className='navbar-brand' to='/home'>Stop it!</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navLogo' aria-controls='navLogo' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navLogo'>
        <div className='navbar-nav  ml-auto'>
          {/* <a className='nav-item nav-link' href='#resources'>Recursos</a>
          <a className='nav-item nav-link' href='#community'>Comunidad</a> */}
          <Link className='btn btn-dark' to='/collaborator'>Hazte colaborador</Link>
        </div>
      </div>
     </div>
    </nav>
  )
}

export default HeaderLogo;