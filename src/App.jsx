import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import Header from './components/Header'
import { store } from './app/store'

import Dashboard from './routes/dashboard'

const AuthenticatedRoute = ({ children, user }) => {
  return user ? children : <Navigate to='/login' />
}

const App = () => {
  const provider = new GoogleAuthProvider()

  // initialize firebase app
  initializeApp({
    apiKey: 'AIzaSyBzLAt-lV35gwxQ9ThZnw6UANlYd10CYHk',
    authDomain: 'storybored-3d0ab.firebaseapp.com',
    projectId: 'storybored-3d0ab',
    storageBucket: 'storybored-3d0ab.appspot.com',
    messagingSenderId: '953974228724',
    appId: '1:953974228724:web:555667776e8f257c53c0a1'
  })

  const auth = getAuth()

  const [user] = useAuthState(auth)

  const handleSignIn = () => {
    signInWithPopup(auth, provider) // TODO: restore .catch() here
  }

  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Header
            user={user}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
          />
          <Routes>
            <Route
              path='/'
              element={
                <AuthenticatedRoute
                  user={user}
                >
                  <Dashboard />
                </AuthenticatedRoute>
              }
            />
            <Route
              path='/login' element={
                <div>Login!</div>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App

AuthenticatedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
