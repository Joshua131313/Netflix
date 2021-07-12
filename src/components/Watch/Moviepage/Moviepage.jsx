import React from 'react'
import { timeConvert } from '../../../Functions'
import useGetdetails from '../Moviecard/Getdetails'
import './Moviepage.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Imgloaded from '../../Reuseable/Imgloaded/Imgloaded';
import Tabs from '../../Reuseable/Tabs/Tabs';
import Movieperson from './Movieperson';
import Addtofavorite from '../../Reuseable/Addtofavorite/Addtofavorite';
const Moviepage = (props) => {

  const {movie} = props
  const details = useGetdetails(movie)
  const trailersrow = details?.videos?.results?.slice(0, 3).map(el=> {
    return (
      <iframe allow='fullscreen' allowFullScreen={true} title='Video' src={`https://www.youtube.com/embed/${el.key}`} frameborder="0"></iframe>

    )
  })
  const backdroprow = details?.images?.backdrops?.map(img=> {
    return (
      <Imgloaded className='hor' img={img.file_path}/> 
    )
  }) 
  const postersrow = details?.images?.posters?.map(img=> {
    return (
      <Imgloaded className='ver' img={img.file_path}/> 
    )
  }) 
  const logosrow = details?.images?.logos?.map(img=> {
    return (
      <Imgloaded className='logoimg' img={img.file_path}/> 
    )
  })  
  const crewrow = details?.credits?.crew.map(person=> {
    return <Movieperson person={person} />
  })
  const castrow = details?.credits?.cast.map(person=> {
    return <Movieperson person={person} />
  })
  const tabs = [
    {
      link: 'backdrops',
      title: `Featured Images (${backdroprow?.length})`,
      content: backdroprow
    },
    {
      link: 'posters',
      title: `Posters (${postersrow?.length})`,
      content: postersrow
    },
    {
      link: 'logos',
      title: `Movie Logos (${logosrow?.length})`,
      content: logosrow
    }
  ]
  const crewcasttabs = [
    {
      link: 'crew',
      title: `Crew (${crewrow?.length})`,
      content: crewrow
    },
    {
      link: 'cast',
      title: `Cast (${castrow?.length})`, 
      content: castrow
    }
  ]
  return ( 
    
    <div className="moviepage">
       <div className="moviedetails">
        <div className="mainbgimgdetail">
        <Imgloaded img={details?.images?.backdrops[0]?.file_path}/>
        </div>
      <div className="innermoviedetails flexrow">
      <div className="imgpart">
          <Imgloaded img={details?.images?.posters[0]?.file_path}/>
        </div>
        <div className="leftpartmovie flex">
          <div className="upperleftpart">
          <h2>{details?.title}</h2>
          <div className="moredetails flexrow">
            <span>{details?.release_date}</span>
            <span>
              {details?.genres?.map(genre=> {
                return genre.name
              }).join(', ')}
            </span>
            <span>
              {timeConvert(details?.runtime)}
            </span>
          </div>
          </div>
          <div className="about">
            <small>{details.overview}</small>
          </div>

          <div className="midpart">
              <div>
              <span style={{color: details?.vote_average>8?'var(--green)':(details?.vote_average<8 && details?.vote_average>6)?'yellow':'var(--red)'}}>User Rating</span>
               <div className="circle">
              <CircularProgressbar 
                value={(details?.vote_average*10)} 
                text={details?.vote_average*10+'%'} 
                strokeWidth={5}
                styles={buildStyles({
                  textColor: details?.vote_average>8?'var(--green)':(details?.vote_average<8 && details?.vote_average>6)?'yellow':'var(--red)',
                  pathColor: details?.vote_average>8?'var(--green)':(details?.vote_average<8 && details?.vote_average>6)?'yellow':'var(--red)',
                  trailColor: '#141414',
                  backgroundColor: details?.vote_average>8?'var(--green)':(details?.vote_average<8 && details?.vote_average>6)?'yellow':'var(--red)',
                })}
                />
            </div>
              </div>
            <Addtofavorite Tag='i' id={movie.id} className='fal fa-heart'/>
              <i className={`fal fa-download`}></i>
          </div>
        </div>
      </div>
      </div>
      <div className="trailercont">
      <h2>Trailers</h2>

          <div className="trailers">
            <iframe allow='fullscreen' allowFullScreen={true} title='Video' src={`https://www.youtube.com/embed/${details?.videos?.results[0]?.key}`} frameborder="0"></iframe>
            <div className="othertrailers">
                {trailersrow}
            </div>
          </div>
      </div>
      <div className="featuredimgs trailercont tt">
        <h2>Media</h2>
        <Tabs links={tabs} initial={'backdrops'}/>
      </div>
      <div className="cast trailercont">
        <h2>Cast</h2>
        <div className="castrow">
        <Tabs links={crewcasttabs} initial={'crew'}/>
        </div>
      </div>
    </div>
  )
} 
export default Moviepage