/* eslint-disable jsx-a11y/alt-text */
import './Home.scss';
import PsJannet from '../../assets/PsJannet.jpg'; 
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  
  return (
    <>
      <Header/>
      <div className="container">
        <p className="home__versiculo">
            Porque así dijo Jehová: A los eunucos que guarden mis días de reposo y escojan lo que yo quiero, y abracen mi pacto, yo les daré lugar en mi casa y dentro de mis muros, y nombre mejor que el de hijos e hijas; nombre perpetuo les daré, que nunca perecerá.
            <br/>
            <span>
              Isaías 56: 4-5
            </span>
          </p>
          <h3 className="home__subtitle">
            ¿Quiénes somos?
          </h3>
          <p className="home__text">
            Somos una Iglesia Cristiana Pentecostés con un gobierno Apostólico Profético. <br/><br/>
            Misión Cristiana Incluyente recibe cobertura de Encounter Missions International (EMI).<br/><br/>
            Nuestro principal objetivo es proclamar el amor de Dios con poder en medio del pueblo
            LGBTTTIQ, siguiendo a Jesucristo como nuestro único salvador.
          </p>
          <h3 className="home__subtitle">
            Misión
          </h3>
          
            <p className="home__text">
            Representar y ser parte del cuerpo vivo de Cristo, siendo una congregación que trabaje
            en el desarrollo espiritual de la comunidad LGBTTTIQ, sus familias y todo aquel que busque un
            encuentro personal con Cristo.
            </p>
          <h3 className="home__subtitle">
            Visión
          </h3>
          <p className="home__text">
          Evangelizar, discipular y enviar hombres y mujeres que prediquen el evangelio incluyente de Cristo.
          </p>
          
          <div className="home__item-container">
            <img src={PsJannet}/>
            <p className="home__text">
            <h3 className="home__subtitle">
              Nuestra cobertura
            </h3>
            <br/>
            <strong>Janet Robertson</strong> <br/>
            Directora global de EMI<br/><br/>

            Janet Robertson se graduó del Colegio Bíblico de Glasgow, Escocia, Reino Unido. Después de graduarse, trabajó 8 años con Juventud Con Una Misión (JUCUM) en Holanda, India y Nepal. Después de venir a los Estados Unidos, Janet obtuvo una licenciatura en Negocios Internacionales y luego fundó Encounter Missions International.<br/><br/>
            <a href="https://www.emiglobal.org/" target='_blank'> 
              Conoce más
            </a>
            </p>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home;