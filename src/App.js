import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Dashboard from './components/Dashboard'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App
