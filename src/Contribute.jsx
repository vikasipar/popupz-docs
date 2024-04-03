import React, {useEffect, useState} from 'react';

function Contribute() {
    const [contributors, setContributors] = useState("");

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
    })
  return (
    <div>
        <h2>Contribute</h2>
        <p>Your support ❤️ means a lot! Give us a ⭐️ on <a href='https://github.com/vikasipar/popupz'>GitHub</a>. Any suggestions are welcome!</p>
        <p>You can also find me on <a href='https://vikasipar.me' target='_blank'>vikasipar.me</a>.</p>

        <h2>Contributors</h2>
        <p>contributors</p>
    </div>
  )
}

export default Contribute;