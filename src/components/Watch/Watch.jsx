import React, { useContext, useState } from 'react'
import { avatars } from '../../Arrays'
import { ContextApp } from '../../ContextAPI'
import { db } from '../../Fire'
import Input from '../Input/Input'
import Logo from '../Reuseable/Logo/Logo'
import Lngselect from '../Select/Lngselect'
import './Watch.css'
import firebase from 'firebase'
import Movies from './Moviebrowse/Movies'
import Account from './Accountbrowse/Account'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Navbar from './Moviebrowse/Navbar/Navbar'
import Allmovies from './Moviebrowse/Allmovies/Allmovies'
import Moviepage from './Moviepage/Moviepage'
const Watch = () => {
  const {watching, intheaters} = useContext(ContextApp)
  const location = useLocation()
  const renderMovieRoute = () => {
    
    if(location.pathname.includes('watch')) {
      return (
        <Route path={`/watch/${location.pathname.split('/')[2]}`}>
            <Moviepage movie={{id: location.pathname.split('/')[2]}} />
        </Route>
      )
    }
  }
  return (
    <div className='watch'>
      {
        watching?
        <>
        <Navbar />

        <Switch>
          <Route exact path='/watch'>
            <Movies type={'all'}/>
          </Route>
          <Route path='/watch/shows'>
          </Route>
          <Route path='/watch/movies'>
              <Allmovies />
          </Route>
          <Route path='/watch/new-popular'>
            
          </Route>
          <Route path='/watch/saved'>

          </Route>
         {renderMovieRoute()}
        </Switch>
        </>
        : 
        <Account />
      }
    </div>
  )
}
export default Watch