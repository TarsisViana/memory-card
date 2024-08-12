import Card from "./Card"
import { shuffle } from 'lodash'

export default function CardGrid() {

  let arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  return (
    <>
      <Card cardName='x' />
    </>
  )
}

