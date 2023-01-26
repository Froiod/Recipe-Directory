import React from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'

const Recipe = () => {

  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {error,   isPending, data: recipe,} = useFetch(url)

  return (
    <div className='max margin text-center bg-white p-10 box-border'>
      {error && <p className='load-err'>{error}</p>}
      {isPending && <p className='load-err'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='text-center my-10 mx-auto text-gray-700 text-2xl font-bold'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul className='flex p-0 mt-0 justify-center'>
            {recipe.ingredients.map(ing => <li key={ing} className='list-none mr-[10px] text-gray-600 after:content-[","] last:after:content-["."]'>{ing}</li>)}
          </ul>
          <p className='text-left leading-6'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe