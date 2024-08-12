export default function Card({cardName}) {
  return (
    <div className="card">
      <p className="image">image</p>
      <p className="cardName">{cardName}</p>
    </div>
  )
}