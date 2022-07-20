import React, { useCallback, useEffect, useState } from 'react';
import "./Home.scss"
import axios from 'axios';
import Movie from '../../components/movie';

export default function Home(props) {
  const [movies, setMovies] = useState([])
  const [moviesComponents, setMoviesComponents] = useState([])

  const fetchMovies = useCallback(() => {
      return axios.get("http://localhost:4000/products").then((response) => setMovies(response.data))
  }, [])

  const generateMoviesComponents = useCallback(() => {
    let aux = []
    movies.forEach(movie => {
      aux.push(
        <Movie
          key={movie.id}
          id={movie.id}
          img_path={movie.image}
          name={movie.title}
          price={movie.price}/>
      )
    });
    return aux
  }, [movies])

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies])

  useEffect(() => {
    if(movies.length > 0){
      setMoviesComponents([...generateMoviesComponents()])
    }
  }, [movies, generateMoviesComponents])

  return (
      <section className='Movies'>
        {moviesComponents.length >= 1 &&
          moviesComponents
        }
      </section>
    
  );
}