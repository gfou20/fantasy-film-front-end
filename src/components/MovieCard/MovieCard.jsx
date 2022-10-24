import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie._id}`}>
      <article>
        <header>
            <h1>{movie.name}</h1>
            <p>{movie.image}</p>
        </header>
      </article>
    </Link>
  )
}

export default MovieCard