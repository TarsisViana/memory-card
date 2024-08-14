import { useEffect, useState } from "react"
import { shuffle } from 'lodash'
import Card from "./Card"

let count = 0;

export default function CardGrid({
  incrementScore,
  endRound,
  reset,
  catData
}) {
  const [cardIndex, setCardIndex] = useState(
    shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  )


  function shuffleCards() {
    setCardIndex(shuffle(cardIndex))
  }




  return (
    <div className="cardGrid">
      {catData === undefined ? null :
        cardIndex.map(index => {
          return <Card
            key={catData[index].id}
            url={catData[index].url}
            incrementScore={incrementScore}
            endRound={endRound}
            shuffleCards={shuffleCards}
            reset={reset}
          />
        })}
    </div>
  )
}

