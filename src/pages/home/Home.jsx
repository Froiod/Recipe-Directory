import React, { useEffect } from 'react'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='max-w-[1200px] my-8 mx-auto p-4'>
      {error && <p className='load-err'>{error}</p>}
      {isPending && <p className='load-err'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home