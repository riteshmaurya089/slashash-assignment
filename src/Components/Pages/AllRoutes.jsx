import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favourites from '../Favourites/Favourites'
import Home from '../Home/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fav' element={<Favourites/>}></Route>
    </Routes>
  )
}

export default AllRoutes