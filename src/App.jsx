import { useState } from 'react'
import CardGrid from './components/CardGrid'
import './App.css'
import Header from './components/Header'

function App() {
  const [currScore, setCurrScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function incrementScore() {
    setCurrScore(currScore + 1);
  }

  function endRound() {
    if (currScore > bestScore) setBestScore(currScore)
    setCurrScore(0)
  }
  
  return (
    <>
      <Header
        currScore={currScore}
        bestScore={bestScore}
      />
      <CardGrid
        incrementScore={incrementScore}
        endRound={endRound}
      />
    </>
  )
}

export default App
