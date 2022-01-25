import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { QueryClientProvider, QueryClient } from 'react-query'
import Header from './components/Header'
import Dashboard from './routes/dashboard'
import Landing from './routes/landing'
import Story from './routes/stories/story'

const AuthenticatedRoute = ({ children, loading, user }) => {
  if (loading) {
    return null
  } else {
    if (user) {
      return children
    } else {
      return <Redirect to='/' />
    }
  }
}

const App = () => {
  const queryClient = new QueryClient()
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

  const [user, loading] = useAuthState(auth)

  const handleSignIn = () => {
    signInWithPopup(auth, provider) // TODO: restore .catch() here
  }

  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider
          client={queryClient}
        >
          <Header
            user={user}
            onSignIn={handleSignIn}
            onSignOut={handleSignOut}
          />
          <Switch>
            <Route
              path='/stories/:id'
            >
              <Story
                user={user}
              />
            </Route>
            <Route
              path='/'
            >
              <div>
                {(loading ? <div className='container mx-auto'>Loading...</div> : (user ? <Dashboard user={user} /> : <Landing />))}
              </div>
            </Route>
          </Switch>
        </QueryClientProvider>
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
  ]),
  loading: PropTypes.bool
}
