// En esta sección va: Misión, visión, Quienes somos?, lideres, historia MCI
import './PuertoSeguro.scss';
import Header from "../Header";
import Footer from "../Footer";

import PsLili from '../../assets/lideres/lili.jpg'; 
import Jesus from '../../assets/lideres/jesus.jpg'; 
import Fer from '../../assets/lideres/fer.jpg'; 

const PuertoSeguro = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div>
          <h2>Nuestra historia</h2>
          <p>
            rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <h2>Líderes</h2>
          <div>
            <div className='lider-item'>
              <img src={PsLili} className=''/>
              <div className='lider-container'>
                <h3>Pastora Liliana Huerta Sánchez</h3>
                <p>
                Nació en el seno de una familia con ávidas creencias católicas, cursó sus primeros grados de estudio en escuelas de dicha doctrina, depositando su fe en el catolicismo por tradición familiar. Fue hasta enero del 2001 que su inquietud la llevó a dejar atrás todo lo aprendido de sus padres para entregar su corazón a Jesucristo y volver a nacer como Cristiana.
                </p>
                <p>
                Cuenta con un título universitario en Ingeniería Industrial por parte de la Universidad del Valle de México. Terminó sus estudios pastorales bajo la cobertura del Apóstol Ricardo Averill en el año 2006, con un certificado por parte de Ministerios de Impacto Global de Estados Unidos. Ese mismo año complementó dichos estudios con el curso <span>Mundos religiosos: Religión y alternativas sexuales</span> impartido en la Escuela Nacional de Antropología e Historia.
                </p>
                <p>
                Es fundadora de Misión Cristiana incluyente, y actualmente pastorea dicha iglesia que cuenta con dos sedes en CDMX. Hoy Liliana considera que la mayor satisfacción de sus días es ver cómo el poder de Dios se manifiesta para cambiar las vidas de nuestro pueblo; así como verlos crecer y desarrollarse, forjándose para ser la nueva generación de ministros de nuestra comunidad. Ella cree firmemente que MCI es una plataforma que tiene sus bases cimentadas en una doctrina sana y de sabiduría que lanzará vidas con testimonio de reino para México y Sudamérica.
                </p>
              </div>
            </div>
          </div>
          <div className='lider-item'>
            <img src={Jesus}/>
            <div className='lider-container'>
              <h3>
              Jesús Tecruceño Hernández
              </h3>
              <p>Estudió Teología en el Instituto Bíblico Logos perteneciente a la Iglesia Cristiana Independiente Pentecostés A.R., ha tomado varios cursos en la Comunidad Teológica de México, actualmente estudia Idiomas bíblicos en Maná, Museo de la Biblia A. C. Es parte del ministerio de Educación cristianan y parte del cuerpo académico del Centro de Capacitación para Ministros Incluyentes EMI-Global.</p>
            </div>
          
          </div>
          <div className='lider-item'>
            <img src={Fer}/>
            <div className='lider-container'>
              <h3>
              Fernando Emmanuel Ponce
              </h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
};

export default PuertoSeguro;