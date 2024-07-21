import React from 'react';
import { checkGuess } from '../../game-helpers';

function Key({ letter, status }) {
  const className = status ? `key ${status}` : 'key'
  return (
    <span className={className}>{letter}</span>
  )
}

function Keyboard({ guessResults, answer }) {
  const letterToStatus = guessResults.reduce((acc, guess) => {
    const result = checkGuess(guess, answer)
    for (const { letter, status } of result) {
      acc[letter] = status
    }
    return acc
  }, {})

  return (
    <div className="keyboard">
      <p className="keyboard-row">
        {'QWERTYUIOP'.split('').map((letter) => (
          <Key
            key={letter}
            letter={letter}
            status={letterToStatus[letter]}
          />
        ))}
      </p>
      <p className="keyboard-row">
        {'ASDFGHJKL'.split('').map((letter) => (
          <Key
            key={letter}
            letter={letter}
            status={letterToStatus[letter]}
          />
        ))}
      </p>
      <p className="keyboard-row">
        {'ZXCVBNM'.split('').map((letter) => (
          <Key
            key={letter}
            letter={letter}
            status={letterToStatus[letter]}
          />
        ))}
      </p>
    </div>
  )
}

export default Keyboard;
