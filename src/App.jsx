import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-full'>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/create" element={<Create/>} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/recipes/:id" element={<Recipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App