import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VMoviecard from '../../Moviecard/Vmoviecard'
import Banner from '../Banner/Banner'
import './Allmovies.css'
import ReactLoading from 'react-loading';
import Loading from '../../../Reuseable/Loading/Loading'

const Allmovies = (props) => {
  const {type, title, tv} = props
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('All')
  const moviesrow = movies?.filter(x=> x.genre_ids.some(x=> x == filter) || filter === 'All').map(movie=> {
    return (
      <VMoviecard tv={type==='shows'} movie={movie} /> 
    )
  })

  useEffect(()=> {  
    setLoading(true)
    if(type === 'movies') {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b500b7f81758d0ea6ef8e9df46c2718c&language=en-US&page=${page}`)
      .then((resp)=> {
        setMovies([...movies, ...resp.data.results])
        setLoading(false)
      })
      .catch(err=> {
        console.log(err)
        setLoading(false)
      })
    }
    else if(type === 'shows') {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=b500b7f81758d0ea6ef8e9df46c2718c&language=en-US&page=${page}`).then(resp=> {
        setMovies([...movies, ...resp.data.results])
        setLoading(false)
      })

      .catch(err=> {
        console.log(err)
        setLoading(false)

      })
    } 
  }, [page, type])
  const infinitScroll = () => {
    if((window.innerHeight + window.scrollY+30) >= document.body.offsetHeight) {
      setPage(prev=> prev + 1)
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', infinitScroll)
  }, [])
  useEffect(()=> {
    setMovies([])
    return  ()=> {
      setMovies([])
    }
  }, [type])
  return (
    <div className="allmovies">

      <Banner tv={tv} filter={filter} setFilter={setFilter} array={movies} showfilter={true} filtertitle={title}/>
 
      <div className="innerallmovies">
        {moviesrow}
      </div>
      <Loading loading={true} type='spin'/>
    </div>
  )
}
export default Allmovies