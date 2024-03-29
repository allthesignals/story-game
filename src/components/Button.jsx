import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => (
  <button type='button' onClick={onClick} className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
    {children}
  </button>

)

export default Button

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  onClick: PropTypes.func
}
