import { useState } from "react";


const  App = () => {
  
  const [userChoice, setuserChoice] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setuserChoice(value)
  }

  const generateComputerChoice = () => {
    const randomChoice = 
  }

  return (
    <div>
      <h1>User Choice: {userChoice}</h1>
      <h1>Computer Choice:</h1>
      {choices.map((choice, index) => 
        <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
    </div>
  );
}

export default App;
