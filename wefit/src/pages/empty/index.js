import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as EmptySVG} from '../../assets/empty/empty.svg';
import "./Empty.scss"

export default function Empty() {

  const navigate = useNavigate()

  const home = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <section className='Container'>
      <h1>Parece que não há nada por aqui :(</h1>
      <EmptySVG />
      <hr/>
      <button onClick={home}>VOLTAR</button>
    </section>
  );
}