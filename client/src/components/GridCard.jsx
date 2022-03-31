const GridCard = (props) => {
  return (
    <div>
      <div className="grid-card">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div></div>
      <h3>{props.name}</h3>
      <button onClick={props.onClick}>Delete</button>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name={'name'}
          onChange={props.onChange}
          placeholder={'Enter new name here'}
        />
      </form>
    </div>
  )
}

export default GridCard
