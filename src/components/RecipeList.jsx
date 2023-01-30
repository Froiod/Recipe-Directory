import React from 'react'
import {Link} from 'react-router-dom'

const RecipeList = ({recipes}) => {
  return (
    <div className='grid gap-10 max-w-[1200px] grid-cols-3 my-10 mx-auto'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='relative bg-white text-gray-700 p-5 rounded shadow-md shadow-black transition-transform ease-linear duration-300 hover:rotate-2'>
          <h3 className='text-gray-700 text-2xl font-bold mb-1'>{recipe.title}</h3>
          <p className='text-gray-600 text-lg'>{recipe.cookingTime}to make</p>
          <div className='text-gray-700 text-base my-5 leading-6'>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`} className=' bg-gray-300 text-gray-700 block text-center w-32 p-2 rounded mt-5 mx-auto mb-0 text-xl'>Cook this</Link>
        </div>
       ))}
    </div>
  )
}

export default RecipeList