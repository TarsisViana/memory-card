import { useEffect, useState } from "react"

export default function Card({
  url,
  incrementScore,
  endRound,
  shuffleCards,
  reset
}) {
  const [wasClicked, setWasClicked] = useState(false)

  function handleClick() {
    if (wasClicked) {
      endRound()
      setWasClicked(false)

    } else {
      setWasClicked(true);
      incrementScore()
    }
    shuffleCards()
  }


  useEffect(() => {
    if (reset) {
      setWasClicked(false)
    }
  }, [reset])

  return (
    <div className="card" onClick={handleClick}>
      <img src={url} alt="" />
    </div>
  )
}