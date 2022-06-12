import { useEffect, useState } from 'react';

import './Header.scss';

const Header = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        setBackground('home');
        break;
      case '/puerto_seguro':
        setBackground('puerto-seguro');
        break;
      case '/onLine':
        setBackground('online');
        break;
      case '/iglesia':
        setBackground('iglesia');
        break;
      case '/formacion':
        setBackground('formacion');
        break;
      case '/ofrendas':
        setBackground('ofrendas');
        break;
      default:
        break;
    }
  }, [background]);
  
  return (
    <div className={`header__container header__${background}`}>
    </div>
  )
};

export default Header;