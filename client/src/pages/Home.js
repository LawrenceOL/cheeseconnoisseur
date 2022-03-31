import { useEffect, useState } from 'react'
import axios from 'axios'
import GridCard from '../components/GridCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [cheeses, setCheeses] = useState([])
  const [cheesetoDelete, setCheesetoDelete] = useState('')
  const [newCheeseName, setNewCheeseName] = useState({
    name: ''
  })

  const handleChange = (e) => {
    setNewCheeseName({ ...newCheeseName, [e.target.name]: e.target.value })
  }

  //need to add correct put request here
  const submitNewCheeseName = async (event) => {
    event.preventDefault()
    await axios.post(`http://10.0.0.242:3001/api/createCheese`, newCheeseName)
    setNewCheeseName('')
  }

  useEffect(() => {
    const getCheeses = async () => {
      const response = await axios.get(
        `http://10.0.0.242:3001/api/readAllCheese`
      )
      setCheeses(response.data.cheese)
    }
    getCheeses()
  }, [])

  // axios delete call to be used with button presses
  const deleteCheese = (_id) => {
    axios.delete(`http://10.0.0.242:3001/api/deleteCheese`, {
      data: {
        _id: `${_id}`
      }
    })
    navigate('/about')
  }

  return (
    <div>
      <div className="cheeses">
        <h1>Cheeses</h1>
        <section className="container-grid">
          {cheeses.map((cheese) => (
            <GridCard
              key={cheese._id}
              name={cheese.name}
              image={cheese.image}
              onClick={() => {
                deleteCheese(cheese._id)
              }}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
