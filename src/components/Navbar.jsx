import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-[#58249c] p-4 text-white'>
      <nav className='flex items-center mx-auto max-w-[1200px]'>
        <Link to="/" className='mr-auto'>
          <h1 className='text-3xl font-bold'>Cooking Ina</h1>
        </Link>
        <Link to="/create" className='p-2 border border-white rounded hover:bg-white  hover:text-gray-700'>
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar