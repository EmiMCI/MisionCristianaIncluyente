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
        <div style={{width: '100%'}}>
          <h1>Nuestra historia</h1>
          <iframe style={{width: '100%'}} height="500" src="https://www.youtube.com/embed/D9AfvyLjyWg" title="Nuestra Historia MCI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              <p>Hola me llamo Fernando Emmanuel, tengo 36 años. 
Soy cristiano desde los 12 años de edad. 
Vivo en Cuernavaca. <br/><br/>

Yo llegue a MCI el 30 de junio de 2013, aunque un día antes fue la primera vez que los vi en la marcha del Orgullo de la Ciudad de México.  
Creo que Dios me estaba llamando nuevamente.<br/><br/>

Actualmente soy parte del cuerpo de Ancianos de la  Iglesia, algo que he alcanzado gracias al trabajo que Dios ha hecho en mi vida; demás participo como líder de la Célula MCI Cuernavaca.<br/><br/>

Desde que llegue a MCI me reencontré con Dios, entendí que mi orientación sexual no me alejaba de  Él.<br/><br/>

Alabo y adoro al Señor de manera libre, siendo quien soy y confiando en el amor de Dios.<br/><br/>

En esta iglesia encontré: el amor inclusivo del Padre y  hermanos con los cuales puedo estar en comunión y juntos adorar al Rey. 
</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
};

export default PuertoSeguro;