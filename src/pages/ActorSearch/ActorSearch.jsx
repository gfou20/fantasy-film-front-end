import { useState } from 'react'
import styles from './ActorSearch.module.css'
import * as actorService from '../../services/actorService'
import ActorResults from '../../components/ActorResults/ActorResults'

const ActorSearch = (props) => {

  const [formData, setFormData] = useState({
    actorSearch: ''
  })

  const [results, setResults] = useState([])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const resultData = await actorService.search(formData)
      setResults(resultData)
    } catch (err) {
      console.log(err)
    }
  }

  return (  
    <>
      <h1>Actor Search</h1>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
      >
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          placeholder='Search for an actor...'
          id="actor-search"
          value={formData.actorSearch}
          name="actorSearch"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn btn-primary">Search</button>
      </div>
    </form>

      <ActorResults actors={results}/>
    
    </>
  );
}

export default ActorSearch;