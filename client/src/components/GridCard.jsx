import axios from 'axios'
import { useEffect } from 'react'

const GridCard = (props) => {
  return (
    <div>
      <div className="grid-card">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div></div>
      <h3>{props.name}</h3>
      <button onClick={props.onClick}>Delete</button>
    </div>
  )
}

export default GridCard
