import React, { useState } from 'react';

export default function Buttons() {

  const [selectedButton, setSelectedButton] = useState('Posts');

      const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
      };

  return (
        <div className='w-44 flex justify-between'>
          <button
            style={{
              background: selectedButton === 'Posts' ? '#17b169' : 'white',
              color: selectedButton === 'Posts' ? 'white' : 'black',
            }}
            onClick={() => handleButtonClick('Posts')}
            className='px-4 py-2 rounded-full w-20 tracking-wider'
          >
            Posts
          </button>
          <button
            style={{
              background: selectedButton === 'CV' ? '#17b169' : 'white',
              color: selectedButton === 'CV' ? 'white' : 'black',
            }}
            onClick={() => handleButtonClick('CV')}
            className='px-4 py-2 rounded-full w-20 tracking-wider'
          >
            CV
          </button>
        </div>
      );
    }

