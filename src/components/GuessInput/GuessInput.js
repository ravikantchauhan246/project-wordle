import React, { useState } from "react";

function GuessInput({handleSubmitGuesses,gameStatus}) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault()
    setGuess("")
    handleSubmitGuesses(guess)
  }
  return (
    <form  onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={gameStatus !== 'running'} minlength="5" maxlength="5" pattern=".{5,}"   id="guess-input" type="text" value={guess} onChange={(event)=>{
        setGuess(event.target.value.toUpperCase())
      }} />
    </form>
  );
}

export default GuessInput;
