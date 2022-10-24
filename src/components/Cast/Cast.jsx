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
  
  // const fetchCreditDetails = async () => {
  //   const resultsData = await movieService.credits(movieId)
  //   setResults(resultsData)
  // }
  // fetchCreditDetails()
  
  return (  
    <>
    {credits.map( cast => 
      <li key={cast._id}>{cast.character} played by {cast.name}</li>
    )}
    </>
  );
}

export default Cast;