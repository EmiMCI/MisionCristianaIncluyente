// En esta sección va: Grupos pequeós y sedes
// Cambiar imagen por una donde estemos todos
import Header from '../Header';
import Footer from '../Footer';
import './Iglesia.scss';

import gp2 from '../../assets/grupos/GP-Andres.jpeg';
import gp3 from '../../assets/grupos/GP-chema.jpeg';
import gp4 from '../../assets/grupos/GP-Fer.jpeg';
import gp5 from '../../assets/grupos/GP-Josue.jpeg';
import gp6 from '../../assets/grupos/GP-Rous.jpeg';
import gp7 from '../../assets/grupos/GP-Nuevo_comienzo.jpeg';

const Iglesia = () => {
  const gpList = [gp2, gp3, gp4, gp5, gp7, gp6];
  return (
    <>
      <Header />
      <div className="container">
        <h1>Grupos pequeños</h1>
        <p>
          El objetivo de los grupos pequeños es estrechar lazos entre hermanos.
          orando unos por otros, exhortando con palabras de animo a quien lo
          necesite y tener un tiempo de enseñanza y reflexión sobre la palabra
          de Dios.
        </p>
        <div className="container__grupos-pequeños">
          {gpList.map((gp) => (
            <img alt="Grupo Pequeño" src={gp} />
          ))}
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Iglesia;
