import { useEffect, useState } from 'react'
import axios from 'axios'
import GridCard from '../components/GridCard'
import { useNavigate } from 'react-router-dom'

const Cheesemakers = () => {
  let navigate = useNavigate()
  const [cheesemakers, setCheesemakers] = useState([])
  const [newCheesemakerName, setNewCheesemakerName] = useState('')

  // axios delete call to be used with button presses
  const deleteCheesemaker = (_id) => {
    axios.delete(`/api/deleteCheesemaker`, {
      data: {
        _id: `${_id}`
      }
    })
    navigate('/cheesemakerconfirmation')
  }

  const handleChange = (e) => {
    setNewCheesemakerName({
      ...newCheesemakerName,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const getCheesemakers = async () => {
      const response = await axios.get(`/api/readAllCheesemakers`)
      setCheesemakers(response.data.cheesemaker)
    }
    getCheesemakers()
  }, [])

  const updateCheesemakerName = (_id) => {
    axios.put(`/api/updateCheesemaker/${_id}`, {
      name: `${newCheesemakerName.name}`
    })
  }

  return (
    <div>
      <div className="cheesemakers">
        <h1>Cheesemakers</h1>
        <section className="container-grid">
          {cheesemakers.map((cheesemaker) => (
            <GridCard
              key={cheesemaker._id}
              name={cheesemaker.name}
              image={cheesemaker.image}
              onClick={() => {
                deleteCheesemaker(cheesemaker._id)
              }}
              onChange={handleChange}
              onSubmit={() => {
                updateCheesemakerName(cheesemaker._id)
              }}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Cheesemakers
