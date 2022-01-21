import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { store } from './app/store'
import './index.css'
import Landing from './routes/landing'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header'

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header auth={auth} />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
