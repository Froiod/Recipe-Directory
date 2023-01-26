import React from 'react'
import {useState} from 'react'

const Create = () => {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime)
  }

  return (
    <div className='text-gray-600 margin max-w-lg'>
      <h2 className='text-center text-gray-700 margin text-2xl font-bold'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span className='span'>Recipe Title:</span>
          <input 
            type="text"  
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span className='span'>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span className='span'>Cooking Time (minutes):</span>
          <input 
            type="number"
            onChange={(e)=> setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button className='button'>Submit</button>

      </form>
    </div>
  )
}

export default Create