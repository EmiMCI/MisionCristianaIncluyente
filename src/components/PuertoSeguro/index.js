// En esta sección va: Misión, visión, Quienes somos?, lideres, historia MCI
import './PuertoSeguro.scss';
import Header from '../Header';
import Footer from '../Footer';

import PsLili from '../../assets/lideres/lili.jpg';
import Jesus from '../../assets/lideres/jesus.jpg';
import Fer from '../../assets/lideres/fer.jpg';
import Rous from '../../assets/lideres/Rous.jpeg';

const PuertoSeguro = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div style={{ width: '100%' }}>
          <h1>Nuestra historia</h1>
          <div className="container__videos">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/D9AfvyLjyWg"
              title="Nuestra Historia MCI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/D06SjIE-ulE?si=LiBw5IdxTaLQVFCL"
              title="Nuestra Historia MCI sede Sur"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2>Líderes</h2>
          <div>
            <div className="lider-item">
              <img src={PsLili} className="" />
              <div className="lider-container">
                <h3>Pastora Liliana Huerta Sánchez</h3>
                <p>
                  Nació en el seno de una familia con ávidas creencias
                  católicas, cursó sus primeros grados de estudio en escuelas de
                  dicha doctrina, depositando su fe en el catolicismo por
                  tradición familiar. Fue hasta enero del 2001 que su inquietud
                  la llevó a dejar atrás todo lo aprendido de sus padres para
                  entregar su corazón a Jesucristo y volver a nacer como
                  Cristiana.
                </p>
                <p>
                  Cuenta con un título universitario en Ingeniería Industrial
                  por parte de la Universidad del Valle de México. Terminó sus
                  estudios pastorales bajo la cobertura del Apóstol Ricardo
                  Averill en el año 2006, con un certificado por parte de
                  Ministerios de Impacto Global de Estados Unidos. Ese mismo año
                  complementó dichos estudios con el curso{' '}
                  <span>
                    Mundos religiosos: Religión y alternativas sexuales
                  </span>{' '}
                  impartido en la Escuela Nacional de Antropología e Historia.
                </p>
                <p>
                  Es fundadora de Misión Cristiana incluyente, y actualmente
                  pastorea dicha iglesia que cuenta con dos sedes en CDMX. Hoy
                  Liliana considera que la mayor satisfacción de sus días es ver
                  cómo el poder de Dios se manifiesta para cambiar las vidas de
                  nuestro pueblo; así como verlos crecer y desarrollarse,
                  forjándose para ser la nueva generación de ministros de
                  nuestra comunidad. Ella cree firmemente que MCI es una
                  plataforma que tiene sus bases cimentadas en una doctrina sana
                  y de sabiduría que lanzará vidas con testimonio de reino para
                  México y Sudamérica.
                </p>
              </div>
            </div>
          </div>
          <div className="lider-item">
            <img src={Jesus} />
            <div className="lider-container">
              <h3>Pastor Jesús Tecruceño Hernández</h3>
              <p>
                Estudió Teología en el Instituto Bíblico Logos perteneciente a
                la Iglesia Cristiana Independiente Pentecostés A.R., ha tomado
                varios cursos en la Comunidad Teológica de México, actualmente
                estudia Idiomas bíblicos en Maná, Museo de la Biblia A. C. Es
                parte del ministerio de Educación cristianan y parte del cuerpo
                académico del Centro de Capacitación para Ministros Incluyentes
                EMI-Global.
              </p>
            </div>
          </div>
          <div className="lider-item">
            <img src={Rous} />
            <div className="lider-container">
              <h3>Pastora Rosangel Diaz Ramos </h3>
              <p>
                Soy parte de Misión Cristiana Incluyente desde el año 2013. Desde mis inicios encontré en esta comunidad un lugar seguro donde pude crecer espiritual y personalmente.
                <br /><br />
                A lo largo de estos años, Dios me permitió servir en diferentes áreas de la iglesia. Fui una de las primeras líderes del ministerio de jóvenes, posteriormente serví en grupos pequeños y tuve el privilegio de ser la primera estudiante del Centro de Capacitación. Más adelante fui ungida como miembro del grupo de ancianos y, después de mi graduación ministerial, continué preparándome para el llamado que Dios tenía para mi vida.
                <br /><br />
                En el año 2024 recibí la unción y el nombramiento como pastora de nuestra segunda iglesia y ramificación, MCI Sede Sur.
                <br /><br />
                Al mirar atrás, puedo reconocer que Dios ha sido el autor de mis días. Él me ha rescatado de lugares de cautividad, sanando heridas profundas de rechazo y restaurándome en medio de una historia marcada por el alcoholismo. Su amor y gracia han transformado mi vida, permitiéndome caminar en libertad y propósito.
                <br /><br />
                Hoy, a través de mi testimonio, puedo dar fe del lema que identifica a nuestras iglesias: Identidad, Seguridad y Dirección. Identidad, porque sabemos que somos hijas e hijos de Dios; Seguridad, porque somos salvos por su amor y su gracia; y Dirección, porque conocemos el propósito que Dios tiene para nuestras vidas y para nuestras familias LGBT+.
                <br /><br />
                Toda la gloria sea para Dios, quien continúa escribiendo mi historia y guiando mis pasos en el servicio a su pueblo.
              </p>
            </div>
          </div>
          <div className="lider-item">
            <img src={Fer} />
            <div className="lider-container">
              <h3>Pastor Fernando Emmanuel Ponce</h3>
              <p>
                Hola me llamo Fernando Emmanuel, tengo 36 años. Soy cristiano
                desde los 12 años de edad. Vivo en Cuernavaca. <br />
                <br />
                Yo llegue a MCI el 30 de junio de 2013, aunque un día antes fue
                la primera vez que los vi en la marcha del Orgullo de la Ciudad
                de México. Creo que Dios me estaba llamando nuevamente.
                <br />
                <br />
                Actualmente soy parte del cuerpo de Ancianos de la Iglesia, algo
                que he alcanzado gracias al trabajo que Dios ha hecho en mi
                vida; demás participo como líder de la Célula MCI Cuernavaca.
                <br />
                <br />
                Desde que llegue a MCI me reencontré con Dios, entendí que mi
                orientación sexual no me alejaba de Él.
                <br />
                <br />
                Alabo y adoro al Señor de manera libre, siendo quien soy y
                confiando en el amor de Dios.
                <br />
                <br />
                En esta iglesia encontré: el amor inclusivo del Padre y hermanos
                con los cuales puedo estar en comunión y juntos adorar al Rey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PuertoSeguro;
