import { useState, useRef } from 'react';


export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handelClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?enteredPlayerName:'Unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          />
        <button
          onClick={handelClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
