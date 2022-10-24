import { useState,useEffect } from 'react';
import * as movieService from '../../services/movieService'

const Cast = ({movieId}) => {

  const [credits, setCredits] = useState([])

  useEffect(() => {
    const fetchCreditDetails = async () => {
      const resultData = await movieService.credits(movieId)
      setCredits(resultData)
    }
    fetchCreditDetails()
    
  }, [movieId])
  
  return (  
    <>
    {credits.map( (cast,idx) => 
      {if(idx < 5) return <li key={cast.name}>{cast.character} played by {cast.name}</li>} 
    )}
    </>
  );
}

export default Cast;