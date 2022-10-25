import { useState, useEffect } from "react"
import * as actorService from '../../services/actorService'

const ActorCard = ({actor, handleAddToFav, handleDeleteFromFav}) => {

  const [isFavoriteActor, setIsFavoriteActor] = useState(false)
  
  useEffect(() => {
    const fetchFavoriteDetails = async () => {
      const actorData = {
        tmdbID: `${actor.id}`
      }
      const resultData = await actorService.favorite(actorData)
      setIsFavoriteActor(resultData)
    }
    
    fetchFavoriteDetails()
  }, [isFavoriteActor])

  return (  
    <div className='card' style={{'width' : '24rem'}} >
      <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={`${actor.name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{actor.name}</h5>
        <ul className="card-text">
          {actor.known_for.map( known => (
            <li key={known.id}>{known.original_title ? known.original_title : known.name}</li>
          ))}
        </ul>
        {isFavoriteActor 
          ? 
          <button 
            className='btn btn-danger mt-auto'
            onClick={()=> handleDeleteFromFav(actor)}
            
          >
            Delete from Favorite
          </button>
          :
          <button 
            className='btn btn-primary mt-auto'
            onClick={()=> handleAddToFav(actor)}
          >
            Add to Favorite
          </button>
        }
        
      </div>
    </div>
  );
}

export default ActorCard;