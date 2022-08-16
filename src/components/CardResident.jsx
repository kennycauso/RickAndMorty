import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({ url }) => {

  const resident = useFetch(url)

  let colorStatus = {
    dead: "red",
    alive: "green",
    unknow: "gray"
  }

  return (
    <article className='container-card'>
      <header className='card-header'>
        <img className='card-img' src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='container-tagImg'>
          <div className='tag__circle'style={{backgroundColor: colorStatus[`${resident?.status}`]}}></div>
          <span className='tag__status'>{resident?.status}</span>
        </div>
      </header>
      <div className='container-card__info'>
        <h3 className='card-info__title'>{resident?.name}</h3>
        <ul className='card-info__list'>
          <li>
            <span>Species: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
            </li>
          <li>
            <span>Episodes where appear: </span>
            {resident?.episode.length}
            </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident
