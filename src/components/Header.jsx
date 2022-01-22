import React from 'react'
import PropTypes from 'prop-types'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import DropDownMenu from './DropDownMenu'
import Button from './Button'

const PencilSVG = () => (
  <svg viewBox='0 0 75.36 73.137' version='1.1'>
    <defs id='defs4'>
      <linearGradient id='linearGradient3696' y2='508.32' gradientUnits='userSpaceOnUse' x2='298.99' y1='487.99' x1='279.92'>
        <stop id='stop3692' stopColor='#f09092' offset='0' />
        <stop id='stop3714' stopColor='#f2acac' offset='.25' />
        <stop id='stop3712' stopColor='#f5c8c7' offset='.5' />
        <stop id='stop3716' stopColor='#cf8885' offset='.75' />
        <stop id='stop3694' stopColor='#aa4944' offset='1' />
      </linearGradient>
      <linearGradient id='linearGradient3724' y2='549.69' gradientUnits='userSpaceOnUse' x2='247.02' y1='538.62' x1='235.89'>
        <stop id='stop3720' stopColor='#ddb090' offset='0' />
        <stop id='stop3726' stopColor='#ebd1bf' offset='.5' />
        <stop id='stop3722' stopColor='#ce8d60' offset='1' />
      </linearGradient>
    </defs>
    <g id='layer1' transform='translate(-229.26 -482.76)'>
      <path id='path2830' d='m229.76 555.4 3.2561-9.2703 6.923-19.71s42.261-41.677 44.49-42.78c2.2293-1.1029 4.573 0.56973 4.573 0.56973s4.6354 2.0837 8.8807 6.9637c4.2452 4.88 6.3782 7.5724 6.23 10.106-0.1483 2.5336-44.48 43.032-44.48 43.032l-19.735 7.3258-10.138 3.7632z' stroke='#000' strokeWidth='1px' fill='url(#linearGradient3696)' />
      <path id='path2834' d='m238.94 529.62 0.38756 3.2698 7.1132-2.1889 1.3838 9.042 7.9794 0.42929 0.7179 5.1518 3.1176-1.0132 18.5-17.192s-3.9188-6.1573-9.3203-11.495c-5.3588-5.2956-9.8054-7.9366-9.8054-7.9366l-19.069 18.732-1.0054 3.2009z' stroke='#000' strokeWidth='1px' fill='#fba635' />
      <path id='path2836' d='m246.44 530.7 19.09-18.227s1.1615 0.58399 4.7343 4.4807 4.7759 5.49 4.7759 5.49l-19.237 17.728-7.9794-0.42929-1.3838-9.042z' fill='#f5b25f' />
      <path id='path2838' fill='#b54d0e' d='m256.52 545.32 3.1176-1.0132 18.5-17.192-3.0994-4.6745-19.237 17.728 0.7179 5.1518z' />
      <path id='path2832' d='m233.35 545.72 6.2295 5.8246-9.8159 3.8538 3.5863-9.6784z' />
      <path id='path2840' d='m238.94 529.62 0.38756 3.2698 7.1132-2.1889 1.3838 9.042 7.9794 0.42929 0.7179 5.1518 3.1176-1.0132 18.5-17.192s-3.9188-6.1573-9.3203-11.495c-5.3588-5.2956-9.8054-7.9366-9.8054-7.9366l-19.069 18.732-1.0054 3.2009z' stroke='#000' strokeWidth='1px' fill='none' />
      <path id='path2842' d='m233.35 545.72 6.2295 5.8246 16.94-6.2219-0.7179-5.1518-7.9794-0.42929-1.3838-9.042-7.1132 2.1889-0.38756-3.2698-5.5873 16.101z' stroke='#000' strokeWidth='1px' fill='url(#linearGradient3724)' />
      <path id='path2844' fill='#7e5f56' d='m273.13 494.59s6.4173 2.3893 10.652 7.017c4.2348 4.6277 8.9574 11.889 8.9574 11.889l-14.604 13.619s-6.3353-9.5962-9.4724-12.121c-3.1371-2.5246-9.6533-7.311-9.6533-7.311l14.12-13.093z' />
      <path id='path2846' fill='#d6c8c6' d='m259.01 507.69 6.5161 4.7864 14.588-13.997-6.9844-3.8825-14.12 13.093' />
      <path id='path2848' d='m265.53 512.47 3.8736 3.2765 5.6365 6.6943 14.372-13.104s-1.6856-4.1009-3.6664-6.1677c-1.9808-2.0667-5.6278-4.6966-5.6278-4.6966' fill='#ece4e2' />
      <path id='path2850' d='m273.13 494.59s6.4173 2.3893 10.652 7.017c4.2348 4.6277 8.9574 11.889 8.9574 11.889l-14.604 13.619s-5.7015-8.2713-8.7359-11.369c-2.8179-2.8765-10.39-8.0629-10.39-8.0629l14.12-13.093z' stroke='#000' strokeWidth='1px' fill='none' />
    </g>
  </svg>

)

const provider = new GoogleAuthProvider()

const Header = ({ auth }) => {
  const [user] = useAuthState(auth) // [..., loading, error ] are included with this hook if we ever need them

  // user menu dropdown items
  const items = [
    {
      label: 'Sign out',
      onClick: () => auth.signOut()
    }
  ]

  const handleSignIn = () => {
    signInWithPopup(auth, provider) // TODO: restore .catch() here
  }

  return (
    <div>
      <nav className='bg-white dark:bg-gray-800  shadow '>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center'>
              <a className='flex-shrink-0 flex items-center' href='/'>
                <div className='h-7 w-7 mr-2'>
                  <PencilSVG />
                </div>
                <div className='font-bold tracking-wider'>
                  StoryBored
                </div>
              </a>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                </div>
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
                        <Button onClick={handleSignIn}>Sign In</Button>
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
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#'>
              Home
            </a>
            <a className='text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#'>
              Gallery
            </a>
            <a className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#'>
              Content
            </a>
            <a className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium' href='/#'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

Header.propTypes = {
  auth: PropTypes.object
}
