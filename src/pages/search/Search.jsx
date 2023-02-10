import {useLocation} from 'react-router-dom'
import RecipeList from '../../components/RecipeList';
import {useFetch} from '../../hooks/useFetch';

const Search = () => {

  const queryString =  useLocation().search
  const queryParams =  new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
  const { data, isPending, error} = useFetch(url)
  return (
    <div>
      <h2 className='page-title'>Recipes including '{query}'</h2>
      <div className='max-w-[1200px] my-8 mx-auto p-4'>
        {error && <p className='load-err'>{error}</p>}
        {isPending && <p className='load-err'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}
      </div>
    </div>
  )
}

export default Search