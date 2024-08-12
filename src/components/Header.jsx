export default function Header({ currScore, bestScore }) {
  return (
    <div className="header">
      <h1 className="title">Memory Game</h1>
      <p className="current score">Score: {currScore}</p>
      <p className="current score">Best Score: {bestScore}</p>
    </div>
  )
}