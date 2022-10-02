import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Formacion from '../components/Formacion';
import Home from '../components/Home';
import Iglesia from '../components/Iglesia';
import Nav from '../components/NavBar/Nav';
import Ofrendas from '../components/Ofrendas';
import OnLine from '../components/OnLine';
import PuertoSeguro from '../components/PuertoSeguro';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MisionCristianaIncluyente/' element={<Home/>}/>
        <Route path='/MisionCristianaIncluyente/puerto_seguro' element={<PuertoSeguro/>}/>
        <Route path='/MisionCristianaIncluyente/onLine' element={<OnLine/>}/>
        <Route path='/MisionCristianaIncluyente/iglesia' element={<Iglesia/>}/>
        <Route path='/MisionCristianaIncluyente/formacion' element={<Formacion/>}/>
        <Route path='/MisionCristianaIncluyente/ofrendas' element={<Ofrendas/>}/>
      </Routes>
    </BrowserRouter>
  )
}