import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const RecipeList = ({recipes}) => {
  
  const handleClick = async (id) => {
    
    await fetch(`http://localhost:3000/recipes/${id}`, {method: 'DELETE'})
    setList(list.filter((recipe) => recipe.id !==id))
    
  }
  
  const [list, setList] = useState(recipes)

  return (
    <div className='grid gap-10 max-w-[1200px] md:grid-cols-3 grid-cols-2 my-10 mx-auto'>
      {list.map((recipe) => (
        <div key={recipe.id} className='relative bg-white text-gray-700 p-5 rounded shadow-md shadow-black transition-transform ease-linear duration-300 hover:rotate-2'>
          <button className='absolute top-3 right-3 cursor-pointer opacity-50 hover:opacity-100' onClick={() => handleClick(recipe.id)}><FaTimes/></button>
          <h3 className='text-gray-700 text-2xl font-bold mb-1'>{recipe.title}</h3>
          <p className='text-gray-600 text-lg'>{recipe.cookingTime} to make</p>
          <div className='text-gray-700 text-base my-5 leading-6'>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`} className=' bg-gray-300 text-gray-700 block text-center w-32 p-2 rounded mt-5 mx-auto mb-0 text-xl'>Cook this</Link>
        </div>
       ))}
    </div>
  )
}

export default RecipeList