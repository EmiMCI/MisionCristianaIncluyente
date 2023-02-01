// En esta sección va: Grupos pequeós y sedes
// Cambiar imagen por una donde estemos todos
import Header from "../Header";
import Footer from "../Footer";
import './Iglesia.scss';

import bullet from '../../assets/bullet.png'; 

const Iglesia = () => {
  return (
    <>
      <Header/>
        <div className="container">
          <h1>Grupos pequeños</h1>
          <p>El objetivo de los grupos pequeños es estrechar lazos entre hermanos. orando unos por otros, exhortando con palabras de animo a quien lo necesite y tener un tiempo de enseñanza y reflexión sobre la palabra de Dios.</p>
          <div className="container__grupos-pequeños">
            <div>
              <h3><img src={bullet}/> Grupo pequeño Martes 19:00 hrs.</h3>
              <p>Responsable: <strong>Rous</strong></p>
              <p>Plataforma: <strong>Whatsapp</strong></p>
              <p>Informes: <strong><a href='https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20grupo%20pequeño%20de%20los%20martes%20con%20Jesus' target='_blank'>55-14-73-38-26</a></strong></p>
            </div>
            <div>
              <h3><img src={bullet}/> Grupo pequeño Martes 19:30 hrs.</h3>
              <p>Responsable: <strong>Viri y Ana</strong></p>
              <p>Plataforma: <strong>Sala de Facebook</strong></p>
              <p>Informes: <strong><a href='https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20grupo%20pequeño%20de%20los%20martes%20con%20Viri%20y%20Ana' target='_blank'>55-14-73-38-26</a></strong></p>
            </div>
            <div>
              <h3><img src={bullet}/> Grupo pequeño Miércoles 20:00 hrs.</h3>
              <p>Responsable: <strong>Liliana</strong></p>
              <p>Plataforma: <strong>Google Meet</strong></p>
              <p>Informes: <strong><a href='https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20grupo%20pequeño%20de%20los%20miercoles%20con%20Liliana' target='_blank'>55-14-73-38-26</a></strong></p>
            </div>
            <div>
              <h3><img src={bullet}/> Grupo pequeño Jueves 21:00 hrs.</h3>
              <p>Responsable: <strong>Fernando y Chema</strong></p>
              <p>Plataforma: <strong>Zoom</strong></p>
              <p>Informes: <strong><a href='https://api.whatsapp.com/send/?phone=5215514733826&text=Hola!!%20Visit%C3%A9%20su%20p%C3%A1gina%20en%20internet%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20grupo%20pequeño%20de%20los%20jueves%20con%20Fernando' target='_blank'>55-14-73-38-26</a></strong></p>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
};

export default Iglesia;