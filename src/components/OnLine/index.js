// En esta sección va: Videos de la prédica y radio y devocionales
import './OnLine.scss';
import Header from "../Header";
import Footer from "../Footer";
import flag from '../../assets/flag.png'; 

const OnLine = () => {
  return (
    <>
      <Header/>
      <div className='container'>
        <h1>  ¿Qué dice realmente la biblia sobre la homosexualidad <img src={flag}/>? </h1>
        <h3><img src={flag}/> Homosexualidad y biblia parte 1</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FLi7cH8CeOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Homosexualidad y biblia parte 2</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bdAJE9uBnIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Homosexualidad y biblia parte 3</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vzjyjPiAoLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Homosexualidad y biblia parte 4</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JYVZguSi89k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h2>¿Quieres conocer más? visita nuestro <a href='https://www.youtube.com/channel/UCpjT4YMJN3CDlmjGHIjHeoA/videos' target='_blank'>canal de YouTube</a>, ahí encontrarás predicas, devocionales y testimonios </h2>
      </div>
      <Footer/>
    </>
  )
};

export default OnLine;