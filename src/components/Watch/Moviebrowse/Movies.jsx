import React, { useContext } from 'react'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import './Movies.css'
import Moviecard from '../Moviecard/Moviecard'
import { ContextApp } from '../../../ContextAPI'
import Movielist from './Movierow/Movierow'
const Movies = (props) => {
    const {type, title} = props

  const { 
    mostpopularmovies,
    coming,
    intheaters,
    mostpopulartv,
    toptv, 
    lastestmovies,
    topratedmovies, 
    moviebrowse,
    tvdiscover,
    saved
  } = useContext(ContextApp)
    const limit= 20
  return (
    <div className="movies">
      <Banner  array={moviebrowse}/>
      <Movielist movies={saved.slice(0, limit)} title='Saved Movies'/>
      <Movielist movies={moviebrowse.slice(0, limit)} title='Movies'/>
      <Movielist movies={mostpopularmovies.slice(0, limit)} title='Most Popular Movies'/>
      <Movielist movies={topratedmovies.slice(0, limit)} title='Top Rated Movies'/>
      <Movielist movies={coming.slice(0, limit)} title='Coming Soon'/>
      <Movielist movies={intheaters.slice(0, limit)} title='In Theaters'/>
      <Movielist movies={tvdiscover.slice(0, limit)} title='TV Shows'/>
      <Movielist movies={mostpopulartv.slice(0, limit)} title='Most Popular TV Shows'/>
      <Movielist movies={toptv.slice(0, limit)} title='Top TV Shows'/>
    </div>
  )
}
export default Movies