import { useState, useEffect } from 'react'
import ActorCard from '../ActorCard/ActorCard'
import * as actorService from '../../services/actorService'

import styles from './ActorResults.module.css'

const ActorResults = ({actors}) => {

  const handleAddToFav = async actor => {
    try {
      const setFavActor={
        name: `${actor.name}`,
        photo: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
        tmdbID: `${actor.id}`
      }
      await actorService.create(setFavActor)
    } catch (err) {
      console.log(err)
    }
  }
  const handleDeleteFromFav = async actor => {
    try {
      const deleteFavActor ={
        tmdbID: `${actor.id}`
      }
      await actorService.deleteFav(deleteFavActor)
    } catch (error) {
      console.log(error)
    }
  } 

  return (  
    <main className={styles.container}>
    {actors.length ?
    
      actors.map(actor => 
        {
          if (actor.profile_path){
            return (
              <ActorCard key={actor.id} actor={actor} handleDeleteFromFav={handleDeleteFromFav} handleAddToFav={handleAddToFav}/>
            )
          }
        }
      )
      :

      <p>Search for Actors to get started!</p>
    }
    </main>
  );
}

export default ActorResults;