import React from 'react';

import './NavStyles.scss';

import logo from '../../assets/Logo_MCI_EMI-nbg.png'; 
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className='navbar__container'>
      <Link to='/MisionCristianaIncluyente/'>
        <img alt='Logo MCI' src={logo}/>
      </Link>

      <div className='navbar__container-buttons'>
        <Link to='/MisionCristianaIncluyente/puerto_seguro'>
          <button>PUERTO SEGURO</button>
        </Link>
        <Link to='/MisionCristianaIncluyente/onLine'>
          <button>EN LINEA</button>
        </Link>
        <Link to='/MisionCristianaIncluyente/iglesia'>
          <button>IGLESIA</button>
        </Link>
        <Link to='/MisionCristianaIncluyente/formacion'>
          <button>FORMACIÓN</button>
        </Link>
        <Link to='/MisionCristianaIncluyente/ofrendas'>
          <button>OFRENDAS</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;