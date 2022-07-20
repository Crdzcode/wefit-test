import React, { useCallback, useEffect, useState } from 'react';
import "./Shopping-Cart.scss";
import {ReactComponent as Trash} from '../../assets/cart/trash.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [moviesSum, setMoviesSum] = useState(0);

  const navigate = useNavigate()

  const buy = useCallback(() => {
    navigate('/finished')
  }, [navigate])

  const empty = useCallback(() => {
    navigate('/empty')
  }, [navigate])

  const fetchSelectedMovies = useCallback(() => {
    return axios.get("http://localhost:4000/selectedProducts").then((response) => {
      setSelectedMovies(response.data)
      if(response.data.length === 0){
        empty()
      }
    })
  }, [empty])

  const deleteSelectedMovie = useCallback((id) => {
    axios.delete("http://localhost:4000/selectedProducts/" + id).then(() => {
      fetchSelectedMovies()
    })
  }, [fetchSelectedMovies])

  const generateSelectedComponents = useCallback(() => {
    let aux = []
    let sum = 0
    selectedMovies.forEach(movie => {
      sum += movie.price * movie.amount;
      aux.push(
        <tr key={movie.id}>
            <td><img src={movie.img_path} alt='Poster filme'/></td>
            <td>{movie.name} <br />R$ {movie.price}</td>
            <td>{movie.amount}</td>
            <td>R$ {movie.price * movie.amount}</td>
            <td className='trashbin' onClick={(e) => {
              deleteSelectedMovie(movie.id)
            }}><Trash/></td>
        </tr>
      )
    });
    setMoviesSum(sum)
    return aux
  }, [selectedMovies, deleteSelectedMovie])

  useEffect(() => {
    if(selectedMovies.length>=0){
      setSelectedComponents(generateSelectedComponents())
    }
  }, [selectedMovies, generateSelectedComponents])

  useEffect(() => {
    fetchSelectedMovies()
  }, [fetchSelectedMovies])

  return (
    <section className='ShoppingCart'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedComponents}
        </tbody>
      </table>
      <div className='ShoppingCart_footer'>
        <button onClick={buy}>FINALIZAR PEDIDO</button>
          <div>
            <span>TOTAL</span>
            <h1>R$ {moviesSum}</h1>
          </div>
      </div>
    </section>
  );
}