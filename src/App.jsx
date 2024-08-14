import { useState, useEffect } from 'react'
import CardGrid from './components/CardGrid'
import './App.css'
import Header from './components/Header'
import getCats from './components/cardData'

let gameCount = 0;

function App() {
  const [currScore, setCurrScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [reset, setReset] = useState(false)
  const [catData, setCatData] = useState();

  let count = 0;

  function incrementScore() {
    setCurrScore(currScore + 1);
    setReset(false)
  }

  function endRound() {
    if (currScore > bestScore) setBestScore(currScore)
    setCurrScore(0);
    setReset(true);
  }

  if (currScore === 10) {
    setBestScore(currScore);
    setCurrScore(0);
    setReset(true);
    alert('You Win!!!')
    gameCount++
  }

  useEffect(() => {
    let ignore = false

    let cats = async () => {
      if (!ignore) {
        let catArr = await getCats()
        setCatData(catArr)
      }

    }
    cats()

    return () => {
      ignore = true
    }

  }, [gameCount])

  return (
    <>
      <Header
        currScore={currScore}
        bestScore={bestScore}
      />
      <CardGrid
        incrementScore={incrementScore}
        endRound={endRound}
        reset={reset}
        catData={catData}
      />
    </>
  )
}

export default App
