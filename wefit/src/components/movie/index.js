import React, {useCallback} from 'react';
import './Movie.scss';
import {ReactComponent as Cart} from '../../assets/movies/cart.svg';
import axios from 'axios';

export default function Movie(props) {


  const postMovies = useCallback(() => {
    axios.get("http://localhost:4000/selectedProducts/" + props.id).then((response) => {
      axios.put("http://localhost:4000/selectedProducts/" + props.id, {
        id: props.id,
        img_path: props.img_path,
        name: props.name,
        price: props.price,
        amount: response.data.amount + 1
      })
    }).catch((error) => {
      axios.post("http://localhost:4000/selectedProducts/", {
        id: props.id,
        img_path: props.img_path,
        name: props.name,
        price: props.price,
        amount: 1
      })
    })
  }, [props])

  return (
      <div className='Movie'>
        <img src={props.img_path} alt="Capa de Filme" />
        <h1>{props.name}</h1>
        <span>R$ {props.price}</span>
        <button onClick={postMovies}>
          <div>
            <Cart /> 1
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </div>
  );
}