import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { genres } from '../../../../Arrays'
import { ContextApp } from '../../../../ContextAPI'
import Btn from '../../../Btn/Btn'
import Imgloaded from '../../../Reuseable/Imgloaded/Imgloaded'
import Select from '../../../Select/Select'
import Moviecard from '../../Moviecard/Moviecard'
import Movielist from '../Movierow/Movierow'
import './Banner.css'

const Banner = (props) => {
  const {title, video, description, filtertitle, filter, setFilter, showfilter, tv} = props
  const {coming, mostpopulartv, toptv, tvdiscover} = useContext(ContextApp)
  const [details, setDetails] = useState({})
  const [bannermovie, setBannermovie] = useState('')
  useEffect(()=> {
    if(bannermovie.id) {
      axios.get(`https://api.themoviedb.org/3/${tv?'tv':'movie'}/${bannermovie.id}?api_key=b500b7f81758d0ea6ef8e9df46c2718c&append_to_response=videos,images`).then(resp=> {
        setDetails(resp.data)
      })
    }
  }, [bannermovie])
  useEffect(()=> {
    if(!bannermovie) { 
      if(tv) {
        setBannermovie(tvdiscover[Math.floor(Math.random()*tvdiscover.length)])
      }
      else { 
        setBannermovie(coming[Math.floor(Math.random()*coming.length)])
      }
    } 
  }, [coming, bannermovie])

  return ( 
    <div className="banner">
        <div className="bannercont"> 
        <Imgloaded img={details?.images?.backdrops[0]?.file_path} />
      {
        showfilter &&
      <div className="filtertitle">
        <h2>{filtertitle}</h2>
        <Select value={filter} setValue={setFilter} options={genres} />
      </div>
      }
        <h1>{bannermovie.title?bannermovie.title:bannermovie.name}</h1>
        <p>{bannermovie.overview}</p> 
        <div className="mcontrols flexrow sb">
         <div className="leftcontrolsm flexrow">
          <Link to={`/watch/${tv?'tv':'movie'}/${bannermovie.id}`}>
            <Btn text='Play' icon='fa fa-play'/>
          </Link>
          <Btn text='More Info' icon='fal fa-info-circle'/>
         </div>
         <div className='reload flexrow'>
            <i className='fal fa-redo-alt'></i>
            <div className="r"><span>R</span></div>
         </div>
        </div>
          {/* <Movielist /> */}

        </div>
    </div>
  )
}
export default Banner