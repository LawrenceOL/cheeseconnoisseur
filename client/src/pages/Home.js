import { useEffect, useState } from 'react'
import axios from 'axios'
import GridCard from '../components/GridCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [cheeses, setCheeses] = useState([])
  const [newCheeseName, setNewCheeseName] = useState('')

  useEffect(() => {
    const getCheeses = async () => {
      const response = await axios.get(
        `http://10.0.0.242:3001/api/readAllCheese`
      )
      setCheeses(response.data.cheese)
    }
    getCheeses()
  }, [])

  const handleChange = (e) => {
    setNewCheeseName({ ...newCheeseName, [e.target.name]: e.target.value })
  }

  // axios delete call to be used with button presses
  const deleteCheese = (_id) => {
    axios.delete(`http://10.0.0.242:3001/api/deleteCheese`, {
      data: {
        _id: `${_id}`
      }
    })
    navigate('/cheeseconfirmation')
  }

  const updateCheeseName = (_id) => {
    axios.put(`http://10.0.0.242:3001/api/updateCheese/${_id}`, {
      name: `${newCheeseName}`
    })
    // navigate('/cheeseconfirmation')
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
              onChange={handleChange}
              onSubmit={() => {
                updateCheeseName(cheese._id)
              }}
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
