import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextApp } from '../../../../ContextAPI'
import { findProfile } from '../../../../Functions'
import Logo from '../../../Reuseable/Logo/Logo'
import VMoviecard from '../../Moviecard/Vmoviecard'
import Dropdown from './Dropdown'
import './Navbar.css'
import Search from './Search'
 
const Navbar = () => {
  const {profiles, watching} = useContext(ContextApp)
  const [scrolled, setScrolled] = useState(false)
  const [modal, setModal] = useState(false)
  const [searched, setSearched] = useState([])
  const links = [
    {
      text: 'Home',
      link: ''
    },
    {
      text: 'TV Shows',
      link: 'shows'
    },
    {
      text: 'Movies',
      link: 'movies'
    },
    {
      text: 'New & Popular',
      link: 'new-popular'
    },
    {
      text: 'My List',
      link: 'saved'
    }
  ]
  const linksrow = links.map(link=> {
    return (
      <NavLink exact activeClassName='activenavlink' to={`/watch/${link.link}`}>
        {link.text}
      </NavLink>
    )
  })
  const handleScroll = () => {
    if(window.scrollY  > 80) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }
  useEffect(()=> {
    document.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
    <div className={`navbar flexrow sb ${(scrolled || modal)?'scrollednav':''}`}>
      <div className="leftpartnav flexrow">
        <Logo />
        <div className='browsecont'>
        <span className="browseresp">
          Browse
          <i className='fal fa-chevron-down'></i>
        </span>
        <Dropdown row={linksrow} />
        </div>
        <div className="leftlinks flexrow">
          {linksrow}
        </div>
      </div>
      <div className="rightpartnav flexrow">
        <Search searched={searched} setSearched={setSearched} modal={modal} setModal={setModal}/>
        <span>KIDS</span>
        <i className="fa fa-bell"></i>
        <div className='profiledrop flexrow'>
          <img src={findProfile(profiles, watching)?.img} alt=""/>
          <i className='fal fa-chevron-down'></i>
        </div>
      </div>
      
    </div>
    {
      modal && 
      <div className="searchmodal modal">
      <div className="innermodal">
        {searched?.map(el=> {
          return (
            <VMoviecard movie={el} />
          )
        })}
      </div>
    </div>
    }
    </>
  )
}
export default Navbar