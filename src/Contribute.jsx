import React, {useEffect, useState} from 'react';
import './App.css';

function Contribute() {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        const fetchContributors = async () => {
            try {
              const response = await fetch('https://api.github.com/repos/vikasipar/popupz/contributors');
              const data = await response.json();
              setContributors(data);
            } catch (error) {
              console.error('Error fetching contributors:', error);
            }
          };
          fetchContributors();
    }, []);
  return (
    <div>
        <h2 id='contribute'>Contribute</h2>
        <p>Your support ❤️ means a lot! Give us a ⭐️ on <a href='https://github.com/vikasipar/popupz'>GitHub</a>. Any suggestions are welcome!</p>
        <p>You can also find me on <a href='https://vikasipar.me' target='_blank'>vikasipar.me</a>.</p>

        <h2 style={{marginTop: "70px"}}>Contributors</h2>
        <p className='contributors'>
          {contributors.map((dev) => (
            <a href={dev.html_url} target='_blank' id={dev.id}>
              <img id='contributors' src={dev.avatar_url} alt={dev.login} title={dev.login} className='contributer-img' />
            </a>
          ))}
        </p>
    </div>
  )
}

export default Contribute;