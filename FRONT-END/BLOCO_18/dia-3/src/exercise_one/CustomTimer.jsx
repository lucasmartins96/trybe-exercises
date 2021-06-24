import React from 'react';
import useTimer from './useTimer';

function CustomTimer() {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div>
      {timer}
      <br />
      {randomNumber}
      <br />
      {isMultiple ? 'Acerto' : ''}
    </div>
  );
}

export default CustomTimer;
