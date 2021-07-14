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
    saved,
    trending,
    trendingtv
  } = useContext(ContextApp)
    const limit= 20
  return (
    <div className="movies">
      <Banner tv={false} array={moviebrowse}/>
      {
        saved.length !==0 &&
        <Movielist movies={saved} title='Saved Movies'/>
      }
      <Movielist movies={trending} title='Trending Movies'/>
      <Movielist movies={moviebrowse} title='Movies'/>
      <Movielist movies={mostpopularmovies} title='Most Popular Movies'/>
      <Movielist movies={topratedmovies} title='Top Rated Movies'/>
      <Movielist movies={coming} title='Coming Soon'/>
      <Movielist movies={intheaters} title='In Theaters'/>
      <Movielist movies={tvdiscover} tv title='TV Shows'/>
      <Movielist movies={mostpopulartv} tv title='Most Popular TV Shows'/>
      <Movielist movies={toptv} tv title='Top TV Shows'/>
    </div>
  )
}
export default Movies