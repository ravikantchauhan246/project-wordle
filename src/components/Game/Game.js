import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput"
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameOverBanner from '../GameOverBanner/GameOverBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {

  const [gameStatus,setGameStatus] = React.useState('running')

  const[guesses,setGuesses] = useState([])

  const handleSubmitGuesses  = (guess)=>{
    const nextGuesses = [...guesses,guess]
    setGuesses(nextGuesses)

    if(guess.toUpperCase() === answer){
      setGameStatus("won")
    }else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus("lost")
    }
  }

    return(
      <>
      <GuessResult guesses={guesses} answer={answer}/>
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} gameStatus={gameStatus}/>
      {gameStatus !== 'running' && (
        <GameOverBanner gameStatus={gameStatus} answer={answer} numOfGuesses={guesses.length}/>
      )}
      </>
    )
}

export default Game;