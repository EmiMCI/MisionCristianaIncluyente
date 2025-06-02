import { useEffect, useState } from 'react';

import './Header.scss';

const Header = () => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const getGeolocation = () => {
      fetch('https://ipapi.co/json/') // Usamos HTTPS (alternativa a ip-api)
      .then(response => {
        if (!response.ok) throw new Error("Error en la respuesta");
        return response.json();
      })
      .then(data => {
        console.log("País:", data.country_name, "Ciudad:", data.city);
        // Envía datos a GTM/GA4
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'geolocation_success',
          'country': data.country_name,
          'city': data.city,
          'ip': data.ip
        });
      })
      .catch(error => {
        console.error("Error al obtener geolocalización:", error);
        window.dataLayer.push({
          'event': 'geolocation_error',
          'error': error.message
        });
      });
  };

  getGeolocation();
  }, [])

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