import React from 'react'

const LocationInfo = ({location}) => {

  return (
    <article className='container-location'>
        <h2 className='location-title'>{location?.name}</h2>
        <ul className='location-list'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo
