import React, { Component } from 'react'
import avatar from '../images/avatar.png'
import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <img src={avatar} alt='logo' />
        <h2>Welcome to mcmunder.de</h2>

      </div>
    )
  }
}

export default App
