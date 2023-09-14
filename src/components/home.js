import React from 'react' 
import Command from './command-page'
import './style.css';


const Home = () => {
  return (
    <div className='home'>
      <Command />
      <div className='home-image'>
        <img src='log.png' alt='home image' />
      </div>
    </div>
  )
}

export default Home
