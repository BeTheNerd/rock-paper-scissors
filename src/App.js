import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";


const  App = () => {
  
  const [userChoice, setuserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [ result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setuserChoice(value)
    generateComputerChoice()
    
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length) ]
    setComputerChoice(randomChoice)
    
  }

  useEffect(() => {
    checkResult()
  }, [computerChoice, userChoice])
  
  const checkResult = () => {
    switch( userChoice + computerChoice ) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult("You Win!")
        break 
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult("You Lose!")
        break
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        setResult('Tie!')
        break


    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors Game!</h1>
      <h2>User Choice: {userChoice}</h2>
      <h2>Computer Choice:{computerChoice}</h2>
      {choices.map((choice, index) => 
        <Button key={index} className={choice} onClick={() => handleClick(choice)}>{choice}</Button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
