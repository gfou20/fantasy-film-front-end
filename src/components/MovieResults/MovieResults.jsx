import Cast from '../Cast/Cast';
import styles from './MovieResults.module.css'

const MovieResults = ({movies}) => {

  return ( 
    <main className={styles.container}>
      { movies.length ? 
      
        movies.map( movie => {
          if (movie.backdrop_path)
          return (
            <div key={movie.id} className='card' style={{'width':'24rem'}}>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title}/> 
              <div className='card-body'>
                <h5 className='card-title'>{movie.original_title}</h5>
                <p className='card-text'>{movie.overview}</p>
                <p>Cast:</p>
                  <ul>
                    <Cast key={movie.id} movieId={movie.id}/>
                  </ul>
              </div>
            </div>
          )
        })
        :
        <p>Search for Movies to get started</p>
      }
    </main>
  );
}

export default MovieResults;