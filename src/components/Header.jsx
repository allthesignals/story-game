import React from 'react'
import PropTypes from 'prop-types'

import DropDownMenu from './DropDownMenu'
import Button from './Button'
import { ReactComponent as PencilIcon } from './pencil.svg'

const Header = ({ user, onSignOut, onSignIn }) => {
  // user menu dropdown items
  const items = [
    {
      label: 'Sign out',
      onClick: onSignOut
    }
  ]

  return (
    <div>
      <nav className='bg-white dark:bg-gray-800  shadow '>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center'>
              <a className='flex-shrink-0 flex items-center' href='/'>
                <div className='h-7 w-7 mr-2'>
                  <PencilIcon />
                </div>
                <div className='font-bold tracking-wider'>
                  StoryBored
                </div>
              </a>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4' />
              </div>
            </div>
            <div className='block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <div className='ml-3 relative'>
                  <div className='relative inline-block text-left'>
                    {
                      user && (
                        <DropDownMenu
                          items={items}
                          icon={<img src={user.photoURL} className='w-8 h-8 mr-2 inline-block rounded-3xl' referrerPolicy='no-referrer' />}
                        />
                      )
                    }
                    {
                      !user && (
                        <Button onClick={onSignIn}>Sign In</Button>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
                <svg width='20' height='20' fill='currentColor' className='h-8 w-8' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

Header.propTypes = {
  user: PropTypes.object,
  onSignIn: PropTypes.func,
  onSignOut: PropTypes.func
}
