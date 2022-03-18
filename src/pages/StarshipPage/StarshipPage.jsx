import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllStarships } from '../../services/sw-api';
import { getAllStarshipDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';


const StarshipPage = () => {
const [starshipPages, setStarshipPages] = useState({})
let location = useLocation()

useEffect(()=> {
  getAllStarshipDetails(location.state.starship.url)
  .then(starshipDetail => setStarshipPages(starshipDetail))
}, [])

  return ( 
    <>
    <h3>Starship-details</h3>
    <h3>{starshipPages.name}</h3>
    <h3>{starshipPages.model}</h3>
    <Link to='/'>
      <button>Back to the lsit</button>
      </Link> 
    </>
    
  );
}
 
export default StarshipPage;