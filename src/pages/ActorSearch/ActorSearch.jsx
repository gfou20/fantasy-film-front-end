import { useState } from 'react'
import styles from './ActorSearch.module.css'

const ActorSearch = (props) => {

  const [formData, setFormData] = useState({
    actorSearch: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      // await 
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
        <button className={styles.button}>Search</button>
      </div>
    </form>
    </>
  );
}

export default ActorSearch;