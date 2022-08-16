import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    let numberLocation
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])

  // Search from input:
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  return (
    <div className="App">
      <img className='ram-frontImg' src="/img/image3.png" alt="Image Rick and Morty" />
      <div className='container-ram'>
        <h1 className='ram-title'>Rick and Morty Wiki</h1>
        <form className='ram-form' onSubmit={handleSubmit}>
          <input className='ram-form__input' id='search' type="text" />
          <button className='ram-form__btn'>Search</button>
        </form>
        <LocationInfo location={location} />
        <h3 className='ram-subtitle'>Residents</h3>
        <div className='container-residents'>
          {
            location?.residents.map(url => (
              <CardResident
                key={url}
                url={url}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
