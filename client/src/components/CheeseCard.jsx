const CheeseCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div></div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default CheeseCard
