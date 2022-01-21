import React from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBzLAt-lV35gwxQ9ThZnw6UANlYd10CYHk',
  authDomain: 'storybored-3d0ab.firebaseapp.com',
  projectId: 'storybored-3d0ab',
  storageBucket: 'storybored-3d0ab.appspot.com',
  messagingSenderId: '953974228724',
  appId: '1:953974228724:web:555667776e8f257c53c0a1'
}

initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export default function Auth () {
  const [user] = useAuthState(auth) // [..., loading, error ] are included with this hook if we ever need them

  // TODO: We have signin and signout here in the root component just to experiment with firebase
  // we will want to move these somewhere else and probably make them into proper redux actions
  const handleSignIn = () => {
    signInWithPopup(auth, provider) // TODO: restore .catch() here
  }

  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <div>
      {
        !user && <button onClick={handleSignIn}>Sign In</button>
      }
      {
        user && (
          <>
            <img src={user.photoURL} className='w-8 h-8 mr-2 inline-block' />
            <div className='mr-2'>{user.displayName}</div>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )
      }
    </div>
  )
}
