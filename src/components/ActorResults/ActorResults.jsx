import * as actorService from '../../services/actorService'

import styles from './ActorResults.module.css'

const ActorResults = ({actors}) => {

  const handleOnClick = async actor => {
    try {
      const setFavActor={
        name: `${actor.name}`,
        photo: `https://image.tmdb.org/t/p/original${actor.profile_path}`
      }
      await actorService.create(setFavActor)
    } catch (err) {
      console.log(err)
    }
  }

  return (  
    <main className={styles.container}>
    {actors.length ?
    
      actors.map(actor => 
        {
          if (actor.profile_path)
            return (
              <div key={actor.id} className='card' style={{'width' : '24rem'}} >
                <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={`${actor.name}`} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{actor.name}</h5>
                  <ul className="card-text">
                    {actor.known_for.map( known => (
                      <li key={known.id}>{known.original_title ? known.original_title : known.name}</li>
                    ))}
                  </ul>
                  <button 
                    className='btn btn-primary mt-auto'
                    onClick={()=> handleOnClick(actor)}
                  >Add to Favorite</button>
                </div>
              </div>
            )
        }
      )
      :

      <p>Search for Actors to get started!</p>
    }
    </main>
  );
}

export default ActorResults;