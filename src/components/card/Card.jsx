import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css"

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const   Card = ({movie}) => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

  return (
    <>
        {
            isLoading ? 
            <div className="cards">
                <SkeletonTheme baseColor = "#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div> :
            <Link to={`movie/${movie.id}`} style={{color:"white"}}>
                <div className="cards">
                    <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="" className="cards__img" />
                    <div className="cards__overlay">
                        <div className="cards__img">{movie?movie.original_title:""}</div>
                        <div className="card__runtime"> {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                        </div>
                        <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>
  )
}

export default Card