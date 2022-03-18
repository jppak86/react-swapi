import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Starship from './components/Starship/Starship';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import NavBar from './components/NavBar/NavBar'


function App() {
  const [navItems, setNavItems] = useState([
    {url: "/starships", name: "STAR WARS STARSHIPS"}
  ])


  return (
   
      <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/starship-page' element={<StarshipPage />} />
        <Route path='/starships' element={<Starship />} />
        <Route path='/' element={<Starship />} />
      </Routes>
      </>
  );
}

export default App;