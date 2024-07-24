import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput"
import GuessResult from '../GuessResult/GuessResult';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {

  const[guesses,setGuesses] = useState([])

  const handleSubmitGuesses  = (guess)=>{
    
    setGuesses([...guesses,guess])
  }

    return(
      <>
      <GuessResult guesses={guesses}/>
      <GuessInput handleSubmitGuesses={handleSubmitGuesses}/>
      </>
    )
}

export default Game;