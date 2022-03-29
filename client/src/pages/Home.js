import axios from 'axios'
import CheeseCard from '../components/CheeseCard.jsx'
import { useState, useEffect } from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom'

const Home = () => {
  const [inputField, setinputField] = useState('')
  const [cheeseData, setCheeseData] = useState([])

  useEffect(() => {
    const getCheeseData = async () => {
      const response = await axios.get(`localhost3001/readAllCheese`)

      setCheeseData(response.data.results)
    }
    getCheeseData()
  }, [])

  const handleChange = (e) => {
    setinputField(e.target.value)
  }

  return (
    <div>
      {cheeseData.map((result) => (
        <CheeseCard
          name={result.name}
          details={result.details}
          image={result.image}
          key={result._id}
        />
      ))}
      <p>routed to the root bb</p>
    </div>
  )
}
export default Home
