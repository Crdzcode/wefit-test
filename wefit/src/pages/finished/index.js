import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as FinishedSVG} from '../../assets/finished/finished.svg';
import "./Finished.scss"

export default function Finished() {

  const navigate = useNavigate()

  const home = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <section className='Container'>
      <h1>Compra realizada com sucesso!</h1>
      <FinishedSVG />
      <button onClick={home}>VOLTAR</button>
    </section>
  );
}