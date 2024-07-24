import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers"


function Cell({letter,status}){
    return(
      <span className={`cell ${status}`}>
          {letter}
      </span>
    )
}

function Guess({answer,value}) {

  const result = checkGuess(value,answer)
  return (
   
    <p class="guess">
      {range(5).map((num,index)=>(
        <Cell key={index} result={result} letter={result ? result[num].letter: undefined} status={result? result[num].status:undefined}/>
      ))}
    </p>
  );
}

export default Guess;
