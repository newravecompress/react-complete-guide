import React, { useState } from 'react'

import MoviesList from './components/MoviesList'
import './App.css'

function App () {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchMoviesHandler () {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const mappedData = data.results.map(el => {
        return {
          id: el.episode_id,
          title: el.title,
          openingText: el.opening_crawl,
          releaseDate: el.release_date,
        }
      })

      setMovies(mappedData)
    } catch (e) {
      setError(e.message)
    }

    setIsLoading(false)
  }

  let content = <p>Found no movies!</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  )
}

export default App
