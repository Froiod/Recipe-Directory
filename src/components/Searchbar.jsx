import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [term,setTerm]  = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
    <div className='mr-8'>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <label htmlFor="search"className='text-base'>Search:</label>
        <input 
          className='ml-[10px]'
          type="text"
          id='search' 
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  )
}

export default Searchbar