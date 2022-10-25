import { Link } from 'react-router-dom';
import Cast from '../Cast/Cast';
import styles from './MovieResults.module.css'
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieResults = ({movies}) => {

  return ( 
    <main className={styles.container}>
      { movies.length ? 
        movies.map( movie => {
          if (movie.backdrop_path)
          return (
            <>
              <MovieCard movie={movie} key={movie._id}/> 
            </>
          )
        })
        :
        <p>Search for Movies to get started</p>
      }
    </main>
  );
}

export default MovieResults