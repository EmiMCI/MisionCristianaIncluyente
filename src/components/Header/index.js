import { useEffect, useState } from 'react';

import './Header.scss';

const Header = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case '/MisionCristianaIncluyente/':
        setBackground('home');
        break;
      case '/MisionCristianaIncluyente':
          setBackground('home');
        break;
      case '/MisionCristianaIncluyente/puerto_seguro':
        setBackground('puerto-seguro');
        break;
      case '/MisionCristianaIncluyente/onLine':
        setBackground('online');
        break;
      case '/MisionCristianaIncluyente/iglesia':
        setBackground('iglesia');
        break;
      case '/MisionCristianaIncluyente/formacion':
        setBackground('formacion');
        break;
      case '/MisionCristianaIncluyente/ofrendas':
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