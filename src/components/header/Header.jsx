import  "./header.css" ;
import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <Link to="/"><img src="" className="header
            _icon" alt="" /></Link>
            <Link to="/movies/popular"><span>Popular</span> </Link>
            <Link to="/movies/top_rated"><span>Top Rated</span> </Link>
            <Link to="/movies/upcoming"><span>Upcoming</span> </Link>
        </div>
    </div>
  )
}

export default Header