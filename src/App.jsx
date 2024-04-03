import React from 'react';
import './index.css';
import Playground from './Playground';
import Contribute from './Contribute';

function App() {

  return (
    <div className='app'>
    <div className='left-content'>
      <h1 className='heading'> <img src="https://cdn-icons-png.flaticon.com/512/5675/5675503.png" alt="popupz icon" className='logo' /> Popupz</h1>
      <p>Popupz is a simple, light-weight and customizable popup notification library for React applications. It provides an easy way to display success, error, warning, info, or default messages to users with customizable themes and message content.</p>
      <h3>Installation</h3>
      <p>To <i><b>install</b></i> and <i><b>setup</b></i> Popupz, visit: <a href='https://www.npmjs.com/package/popupz' target='_blank'>npmjs.com/popupz</a></p>

       <h2 style={{marginTop:"70px"}}>Try Popupz</h2>
      
      <Playground/>
      <Contribute/>
    </div>

    <div className='right-content'>
      <ul>
        <a href='/'><li>Try Popupz</li></a>
        <a href='/#contribute'><li>Contribute</li></a>
        <a href='/#contributors'><li>Contributors</li></a>
      </ul>
    </div>
    </div>
  )
}

export default App;