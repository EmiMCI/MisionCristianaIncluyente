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
        <h1>  ¿Qué dice realmente la biblia sobre la Diversidad <img src={flag}/>? </h1>
        <h3><img src={flag}/> Diversidad y biblia parte 1</h3>
        <iframe style={{width: '100%'}} height="400" src="https://www.youtube.com/embed/Mhi7kkm-mAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Diversidad y biblia parte 2</h3>
        <iframe style={{width: '100%'}} height="400" src="https://www.youtube.com/embed/g8kwiqxNLBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Diversidad y biblia parte 3</h3>
        <iframe style={{width: '100%'}} height="400" src="https://www.youtube.com/embed/vcS4VXVQP44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h3><img src={flag}/> Diversidad y biblia parte 4</h3>
        <iframe style={{width: '100%'}} height="400" src="https://www.youtube.com/embed/15jij3sF0Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h2>¿Quieres conocer más? visita nuestro <a href='https://www.youtube.com/channel/UCpjT4YMJN3CDlmjGHIjHeoA/videos' target='_blank'>canal de YouTube</a>, ahí encontrarás predicas, devocionales y testimonios </h2>
      </div>
      <Footer/>
    </>
  )
};

export default OnLine;