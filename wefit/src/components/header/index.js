import React, { useState, useCallback, useEffect } from 'react';
import './Header.scss';
import {ReactComponent as Cart} from '../../assets/cart/cart.svg';
import axios from 'axios';

export default function Header(props) {

  const [moviesAmount, setMoviesAmount] = useState(0)

  const fetchSelectedMovies = useCallback(() => {
    return axios.get("http://localhost:4000/selectedProducts").then((response) => setMoviesAmount(response.data.length))
  }, [])

  useEffect(() => {
    fetchSelectedMovies()
  }, [fetchSelectedMovies])

  return (
      <header>
          <h2>WeMovies</h2>
          <div className='Cart'>
            <div>
              <h3>Meu Carrinho</h3>
              <span>{moviesAmount} itens</span>
            </div>
            <Cart />
          </div>
      </header>
  );
}