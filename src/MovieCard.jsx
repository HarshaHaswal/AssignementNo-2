import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
import Info from './Info';


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

  // const[info,setInfo]=useState('heloooooo')
  // const handleInfoPage =()=>{
  //   setInfo(true)
  // }
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
      {/* <a href="www.Google.com"> */}
      
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} onClick={()=>{alert('Helllo')
        }} />
      {/* </a> */}
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
      {/* {info&& <Info/>} */}
    </div>
  );
}

export default MovieCard;