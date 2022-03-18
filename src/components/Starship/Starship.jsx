import { useEffect, useState } from 'react';
import { getAllStarships } from '../../services/sw-api';

import { Link } from 'react-router-dom'



const Starship = (props) => {
  const [starships, setStarships] = useState([

  ])

  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])
  
  return ( 
    <>
    <div className='container'>
      {starships.length ?
      <>
    {starships.map((starship)=>
    <div key={starship.name} className="starship">
      <Link to='/starship-page'
      state={{starship}}
      key={starship.name}>
      {starship.name}
      </Link> 
    </div>
    )}
    </>
    :
    <>
    <h2>
      Loading...
    </h2>
      </>}
      </div> 
      </>

   );
}
 
export default Starship;