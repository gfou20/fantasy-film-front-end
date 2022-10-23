import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import * as movieService from "../../services/movieService"

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const moviedata = await movieService.show(id)
      setMovie(moviedata)
    }
    fetchMovie()
  }, [id])

  return (
    <main>
        <header>
          <h1>{movie.name}</h1>
          <h2>{movie.actors}</h2>
          <h3>{movie.image}</h3>
        </header>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default MovieDetails