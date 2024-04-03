import React, { useState } from 'react';
import './index.css';
import { usePopz } from 'popupz';

function Playground() {
    const [theme, setTheme] = useState('default');
    const [type, setType] = useState('Default');
    const [message, setMessage] = useState('Welcome to Popupz!');
    const [progressBar, setProgressBar] = useState('true');
    const {popz} = usePopz();

    const handleMessage = (e) => {
        e.target.preventDefault;
        setMessage(e.target.value);
    };

    const showPopz = () => {
        popz(theme, type, message, progressBar);
    }

  return (
    <><br/>
        <code>
            popz("{theme}", "{type}", "{message}", {progressBar});
        </code>
        <br/><br/>
        <h3>Theme:</h3>
        <ul className='theme'>
            <li type={`${theme === 'light' ? 'disc':'circle'}`} onClick={()=>setTheme('light')} style={{color: (theme === 'light')&&'red'}}>Light</li>
            <li type={`${theme === 'dark' ? 'disc':'circle'}`} onClick={()=>setTheme('dark')} style={{color: (theme === 'dark')&&'red'}}>Dark</li>
            <li type={`${theme === 'default' ? 'disc':'circle'}`} onClick={()=>setTheme('default')} style={{color: (theme === 'default')&&'red'}}>Default</li>
        </ul>
        
        <h3>Type:</h3>
        <ul className='theme'>
            <li type={`${type === 'Success' ? 'disc':'circle'}`} onClick={()=>setType('Success')} style={{color: (type === 'Success')&&'red'}}>Success</li>
            <li type={`${type === 'Error' ? 'disc':'circle'}`} onClick={()=>setType('Error')} style={{color: (type === 'Error')&&'red'}}>Error</li>
            <li type={`${type === 'Warning' ? 'disc':'circle'}`} onClick={()=>setType('Warning')} style={{color: (type === 'Warning')&&'red'}}>Warning</li>
            <li type={`${type === 'Info' ? 'disc':'circle'}`} onClick={()=>setType('Info')} style={{color: (type === 'Info')&&'red'}}>Info</li>
            <li type={`${type === 'Default' ? 'disc':'circle'}`} onClick={()=>setType('Default')} style={{color: (type === 'Default')&&'red'}}>Default</li>
        </ul>

        <h3>Message: </h3>
        <input type='text' className='message-box' placeholder='Welcome to Popupz!' onChange={handleMessage} style={{color:"red"}}/>

        <h3>Progess Bar:</h3>
        <ul className='theme'>
            <li type={`${progressBar === 'true' ? 'disc':'circle'}`} onClick={()=>setProgressBar('true')} style={{color: (progressBar === 'true')&&'red'}}>True</li>
            <li type={`${progressBar === 'false' ? 'disc':'circle'}`} onClick={()=>setProgressBar('false')} style={{color: (progressBar === 'false')&&'red'}}>False</li>
        </ul>

        <button className='btn' onClick={showPopz}>Show Popz</button>
        <br/><br/>
        
        <br/><br/>
    </>
  )
}

export default Playground;