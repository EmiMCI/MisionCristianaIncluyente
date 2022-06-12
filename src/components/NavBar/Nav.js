import React from 'react';

import './NavStyles.scss';

import logo from '../../assets/Logo_MCI_EMI-nbg.png'; 
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className='navbar__container'>
      <Link to='/'>
        <img alt='Logo MCI' src={logo}/>
      </Link>

      <div>
        <Link to='/puerto_seguro'>
          <button>PUERTO SEGURO</button>
        </Link>
        <Link to='/onLine'>
          <button>EN LINEA</button>
        </Link>
        <Link to='/iglesia'>
          <button>IGLESIA</button>
        </Link>
        <Link to='/formacion'>
          <button>FORMACIÓN</button>
        </Link>
        <Link to='/ofrendas'>
          <button>OFRENDAS</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;