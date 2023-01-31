import React from 'react'
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='bg-[#58249c] p-4 text-white'>
      <nav className='flex items-center mx-auto max-w-[1200px]'>
        <Link to="/" className='mr-auto'>
          <h1 className='text-3xl font-bold'>Cooking Ina</h1>
        </Link>
        <Searchbar />
        <Link to="/create" className='p-2 border border-white rounded hover:bg-white  hover:text-gray-700 text-base'>
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}

export default Navbar