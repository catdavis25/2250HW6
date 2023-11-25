import React from 'react';
import { useState } from 'react';

function Selection(){
    const [items, setItems] =React.useState([]);

  function getTweet(){
        fetch("https://api.kanye.rest")
          .then((res) => res.json())
          .then((json) => {
            setItems(json);
            console.log(json);
          })
          .catch((error) => {
            console.error("Error fetching API: ", error);
          });
      };
    
    return (
        <>
        <div>
          <h1>Kanye's Twitter has several memorable quotes, here's a random one</h1>
            <h2 key = {items.id}>
                Quote: {items.quote}
            </h2>
            <div className='buttonContainer'>
              <button onClick={getTweet}>Press here for new quote </button>
            </div>
        </div>
        </>
    );
}

export default Selection;