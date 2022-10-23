import styles from './ActorResults.module.css'

const ActorResults = ({actors}) => {
  return (  
    <main className={styles.container}>
    {actors ?
    
      actors.map(actor => 
        {
          if (actor.profile_path)
            return (
            <div key={actor.id} className='card' style={{'width' : '18rem'}} >
              <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={`${actor.name}`} />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <ul className="card-text">
                  {actor.known_for.map( known => (
                    <li key={known.id}>{known.original_title}</li>
                  ))}
                </ul>
              </div>
            </div>
            )
        }
      )
      :

      <p>No actors</p>
    }
    </main>
  );
}

export default ActorResults;