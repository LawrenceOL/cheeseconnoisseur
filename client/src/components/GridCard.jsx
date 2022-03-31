const GridCard = (props) => {
  return (
    <div>
      <div className="grid-card">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div></div>
      <h3>{props.name}</h3>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name={'name'}
          onChange={props.onChange}
          placeholder={'Enter new name here'}
        />
        <button>Submit</button>
      </form>
      <button onClick={props.onClick}>Delete</button>
    </div>
  )
}

export default GridCard
