import React, { useState, createContext, useContext } from 'react';
import Popz from './components/Popz.jsx';
const PopzContext = createContext();

export const PopzProvider = ({children}) => {
  const [popzQueue, setPopzQueue] = useState([]);
  const [id, setId] = useState(0);

  const popz = {
    popz: (theme, type, message, progressBar) => {
      const newId = id + 1;
      const newPopz = {id: newId, theme: theme.toLowerCase(), type: type.toLowerCase(), message: message, progressBar: progressBar.toLowerCase()};

      setPopzQueue(prevQueue => [...popzQueue, newPopz]);

      setTimeout(() => {
        setPopzQueue(prevQueue => prevQueue.filter(popz => popz.id !== newPopz.id));
      }, 3000);
    }
  };
    
  return (
    <PopzContext.Provider value={popz}>
      {children}
      {popzQueue.length > 0 && (
        <div className='fixed top-[20px] right-[20px] min-w-52'>
          {popzQueue.map((popzItem) => {
            <div key={popzItem.id} className='my-1'>
              <Popz theme={popzItem.theme} type={popzItem.type} message={popzItem.message} progressBar={popzItem.progressBar}/>
            </div>
          })}
        </div>
      )}
    </PopzContext.Provider>
  );
};

export const usePopz = () => {
  const context = useContext(PopzContext);

  if(!context){
      throw new Error('usePopz must be used within a PopzProvider');
  }
  return context;
};