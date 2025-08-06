import './NavStyles.scss';

import logo from '../../assets/Logo_MCI_EMI-nbg.png'; 
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
const location = useLocation();

  return (
    <div className='navbar__container'>
      <Link to='/'>
        <img alt='Logo MCI' src={logo}/>
      </Link>

      <div className='navbar__container-buttons'>
        <Link to='/puerto_seguro'>
          <button className={location.pathname === '/puerto_seguro' ? 'selected' : ''}>PUERTO SEGURO</button>
        </Link>
        <Link to='/onLine'>
          <button className={location.pathname === '/onLine' ? 'selected' : ''}>EN LINEA</button>
        </Link>
        <Link to='/iglesia'>
          <button className={location.pathname === '/iglesia' ? 'selected' : ''}>IGLESIA</button>
        </Link>
        <Link to='/formacion'>
          <button className={location.pathname === '/formacion' ? 'selected' : ''}>FORMACIÓN</button>
        </Link>
        {/* <Link to='/ofrendas'>
          <button>OFRENDAS</button>
        </Link> */}
      </div>
    </div>
  )
}

export default Nav;