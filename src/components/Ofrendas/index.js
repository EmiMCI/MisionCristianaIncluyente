// En esta sección va: Que hacemos con las ofrendas y un link al paypal

import Header from "../Header";
import Footer from "../Footer";
import CTA from '../../assets/cta.jpeg'; 

const Ofrendas = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <h1>
          Ofrendas
        </h1>
        <h3>
          Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde.

          Malaquías 3:10 
        </h3>

        <p>Gracias a tus aportaciones seguimos creciendo, si gustas hacer alguna, te dejamos los datos de la iglesia</p>
        <img style={{width: '50%'}} src={CTA}/>
      </div>
      <Footer/>
    </>
  )
};

export default Ofrendas;