import React from 'react'

const Loader = () => {
  return (
    <div className='flex mx-auto items-center justify-center text-center'>
      <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-12 w-12"></div>
      <p className='ml-4'>Carregando...</p>
    </div>
  )
}

export default Loader