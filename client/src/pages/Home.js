import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CheeseCard from '../components/CheeseCard'

const Home = () => {
  const [cheeses, setCheeses] = useState([])

  useEffect(() => {
    const getCheeses = async () => {
      const response = await axios.get(
        `http://10.0.0.242:3001/api/readAllCheese`
      )
      setCheeses(response.data.cheese)
    }
    getCheeses()
  }, [])

  return (
    <div>
      <div className="cheeses">
        <h1>Cheeses</h1>
        <section className="container-grid">
          {cheeses.map((cheese) => (
            <CheeseCard name={cheese.name} image={cheese.image} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
