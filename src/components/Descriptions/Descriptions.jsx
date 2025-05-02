import React from 'react';
import './Description.css';

function Descriptions({ word, meanings, category }) {
  console.log(word, meanings, category);
  return (
    
    <div>
      <div className='Audio'>
    {meanings[0] && meanings[0].phonetics[0] && meanings[0].phonetics[0].audio && (
        <audio controls>
          <source src={meanings[0].phonetics[0].audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
        
      </div>
      {word === "" ? (
        <span className="subTitles">Start Typing Something....</span>
      ) : (
        meanings.map((means) =>
          means.meanings.map((items) =>
            items.definitions.map((def) => (
              <div  className="singleMean">
                <p>{def.definition}</p>

                {def.example && (
                  <span>
                    <b>Example:</b> {def.example}
                  </span>
                )}

                {def.synonyms && def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms:</b> {def.synonyms.join(', ')}
                  </span>
                )}

                {def.antonyms && def.antonyms.length > 0 && (
                  <span>
                    <b>Antonyms:</b> {def.antonyms.join(', ')}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Descriptions;
