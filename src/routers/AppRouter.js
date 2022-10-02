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
    <BrowserRouter basename="/MisionCristianaIncluyente">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/puerto_seguro' element={<PuertoSeguro/>}/>
        <Route path='/onLine' element={<OnLine/>}/>
        <Route path='/iglesia' element={<Iglesia/>}/>
        <Route path='/formacion' element={<Formacion/>}/>
        <Route path='/ofrendas' element={<Ofrendas/>}/>
      </Routes>
    </BrowserRouter>
  )
}