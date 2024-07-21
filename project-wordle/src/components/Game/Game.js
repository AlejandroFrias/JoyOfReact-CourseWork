import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every page load.

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleAddGuess(guess) {
    setGuessResults([
      ...guessResults,
      guess
    ]);
  }

  function handleRestart() {
    console.log('restart')
    setGuessResults([]);
    setAnswer(sample(WORDS))
  }

  let gameStatus = 'running'
  if (
    guessResults.find((guess) => guess === answer)
  ) {
    gameStatus = 'won'
  } else if (guessResults.length === NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lost'
  }

  return <>
    <GuessResults
      guessResults={guessResults}
      answer={answer}
    />
    <GuessInput
      handleAddGuess={handleAddGuess}
      disabled={gameStatus !== 'running'}
    />
    <Keyboard
      guessResults={guessResults}
      answer={answer}
    />
    {gameStatus === 'lost' && (
      <LostBanner
        answer={answer}
        handleRestart={handleRestart}
      />
    )}
    {gameStatus === 'won' && (
      <WonBanner
        numOfGuesses={guessResults.length}
        handleRestart={handleRestart}
      />
    )}
  </>;
}

export default Game;
