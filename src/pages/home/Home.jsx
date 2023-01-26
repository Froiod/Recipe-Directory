import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='max-w-[1200px] my-16 mx-auto'>
      {error && <p className='load-err'>{error}</p>}
      {isPending && <p className='load-err'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home