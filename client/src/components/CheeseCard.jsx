const CheeseCard = (props) => {
  return (
    <div className="card cheese-card">
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="info-wrapper flex-col"></div>
      <h2>{props.name}</h2>
      <p>{props.details}</p>
    </div>
  )
}

export default CheeseCard
