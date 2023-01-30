import React from 'react'
import {useState, useRef} from 'react'
import {useFetch} from '../../hooks/useFetch';

const Create = () => {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredients, setNewIngredients] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'})
  }

  const handleAdd = (e) => {
    e.preventDefault
    const ing = newIngredients.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }

    setNewIngredients('')
    ingredientsInput.current.focus()
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
          <span>Recipe ingredients</span>
          <div className="flex items-center">
            <input 
              type="text" 
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="text-[1em] text-white py-1 px-5 ml-2 my-0 rounded bg-purple-700 cursor-pointer">add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i},</em>)}</p>

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

        <button className='text-[1em] w-full text-white py-2 px-5 my-5 mx-auto border-0 rounded bg-purple-700 cursor-pointer block'>Submit</button>

      </form>
    </div>
  )
}

export default Create