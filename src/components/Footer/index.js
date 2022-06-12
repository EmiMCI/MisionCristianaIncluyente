import logo from '../../assets/Logo_MCI_EMI-nbg.png'; 
import facebook from '../../assets/facebook.png'; 
import twitter from '../../assets/twitter.png'; 
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import spotify from '../../assets/spotify.png'; 
import whatsapp from '../../assets/whatsapp.png'; 
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-container'>
        <Link to='/'>
          <img alt='Logo MCI' src={logo}/>
        </Link>
        <Link to='/ofrendas'>
          <button>OFRENDAS</button>
        </Link>
      </div>
      <div className='footer__sedes-container'>
        <h3>Sedes</h3>
        <div>
          <h4>Sede Oriente:</h4>
          <p>Cecilio Robelo #517, Venustiano Carranza, Ciudad de México.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.819492606405!2d-99.10585138461269!3d19.42020364610817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd4c28f804b%3A0xfb668f9e8f69471c!2sMisi%C3%B3n%20Cristiana%20Incluyente!5e0!3m2!1ses-419!2smx!4v1654406133336!5m2!1ses-419!2smx" style={{border: '0', width: '400px', height: '100px'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <h4>Sede Norte:</h4>
          <p>Planetas 1, El Rosario, Azcapotzalco, 02100 Ciudad de México, CDMX.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.8634742078634!2d-99.20492268461197!3d19.504508743430222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202bceb9ba379%3A0x6f578700cded4c97!2sPlanetas%201%2C%20El%20Rosario%2C%20Azcapotzalco%2C%2002100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1655013056644!5m2!1ses-419!2smx" style={{border: '0', width: '400px', height: '100px'}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className='footer__socialmedia-container'>
        <h3>Síguenos en nuestras redes</h3>
        <a href='https://www.facebook.com/MisionCristianaIncluyente' target="_blank" rel="noreferrer">
          <img src={facebook}/>
        </a>
        <a href='https://twitter.com/Dios_y_los_Gays' target="_blank" rel="noreferrer">
          <img src={twitter}/>
        </a>
        <a href='https://www.instagram.com/misioncristianaincluyentecdmx/' target="_blank" rel="noreferrer">
          <img src={instagram}/>
        </a>
        <a href='https://www.youtube.com/channel/UCpjT4YMJN3CDlmjGHIjHeoA/videos' target="_blank" rel="noreferrer">
          <img src={youtube}/>
        </a>
        <a href='https://open.spotify.com/show/3iazBBnP1Spj6jrbKNRgoF?si=ystxycMhR3a2sDgiS1FjDQ' target="_blank" rel="noreferrer">
          <img src={spotify}/>
        </a>
      </div>

      <a href='https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n' target='_blank' rel='noreferrer'>
        <img  className='footer__whatsapp-button' src={whatsapp}/>
      </a>
    </footer>
  );
};

export default Footer;