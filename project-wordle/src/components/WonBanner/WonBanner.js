import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy" handleRestart={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses} guess{numOfGuesses > 1 && 'es'}</strong>.
      </p>
    </Banner>
  )
}

export default WonBanner;
