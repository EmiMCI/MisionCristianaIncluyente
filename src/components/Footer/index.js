import logo from '../../assets/Logo_MCI_EMI-nbg.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import spotify from '../../assets/spotify.png';
import whatsapp from '../../assets/whatsapp.png';
import notification from '../../assets/alarma.png';
import aniversario from '../../assets/aniversarioProp.jpg';
import x from '../../assets/cancelar.png';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [isShowPromo, setIsShowPromo] = useState(false);

  useEffect(() => {
    const icon = document.getElementById('notification');
    const body = document.getElementsByTagName('body');
    if (showModal) {
      body[0].setAttribute('style', 'overflow: hidden;');
    } else {
      body[0].setAttribute('style', 'overflow: inherit;');
    }
    if (!showModal && !isShowPromo) {
      setInterval(() => {
        icon.classList.add('footer__notification--shaker');
      }, 5000);
      setInterval(() => {
        icon.classList.remove('footer__notification--shaker');
      }, 5500);
    } else {
      clearInterval(1);
      clearInterval(2);
    }
  }, [showModal]);
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <Link to="/">
          <img alt="Logo MCI" src={logo} />
        </Link>
        <Link to="/ofrendas">
          <button>OFRENDAS</button>
        </Link>
      </div>
      <div className="footer__sedes-container">
        <h3>Sedes</h3>
        <div>
          <h4>Sede Oriente:</h4>
          <p>Cecilio Robelo #517, Venustiano Carranza, Ciudad de México.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.819492606405!2d-99.10585138461269!3d19.42020364610817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd4c28f804b%3A0xfb668f9e8f69471c!2sMisi%C3%B3n%20Cristiana%20Incluyente!5e0!3m2!1ses-419!2smx!4v1654406133336!5m2!1ses-419!2smx"
            style={{ border: '0', width: '95%', height: '100px' }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h4>Sede Sur:</h4>
          <p>
            Torres Adalid 1157, Narvarte Poniente, Benito Juárez, 03020 Ciudad
            de México, CDMX
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5220426732303!2d-99.16315312393156!3d19.3898374818805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff0939713485%3A0x6416f07f3a0490f7!2sTorres%20Adalid%201157%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1742610697829!5m2!1ses!2smx"
            style={{ border: '0', width: '95%', height: '100px' }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer__socialmedia-container">
        <h3>Síguenos en nuestras redes</h3>
        <a
          href="https://www.facebook.com/MisionCristianaIncluyente"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} />
        </a>
        <a
          href="https://twitter.com/Dios_y_los_Gays"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} />
        </a>
        <a
          href="https://www.instagram.com/misioncristianaincluyentecdmx/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpjT4YMJN3CDlmjGHIjHeoA/videos"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} />
        </a>
        <a
          href="https://open.spotify.com/show/3iazBBnP1Spj6jrbKNRgoF?si=ystxycMhR3a2sDgiS1FjDQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={spotify} />
        </a>
      </div>
      <div id="notification" className="footer__notification">
        <img src={notification} onClick={() => setShowModal(true)} />
      </div>

      <a
        href="https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__whatsapp-button" src={whatsapp} />
      </a>

      {showModal && (
        <div className="footer__modal">
          <button
            onClick={() => {
              setShowModal(false);
              setIsShowPromo(true);
            }}
          >
            <img src={x} />
          </button>
          <a
            href="https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20aniversario"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aniversario} />
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
