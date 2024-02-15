import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    let nav=useNavigate()
     const handleNav=()=>{
       nav('/fav')
     }
  return (
         <div className='header'> 
            <p className='checkFav' onClick={handleNav}>Favourites</p>
        </div>
  )
}

export default Navbar