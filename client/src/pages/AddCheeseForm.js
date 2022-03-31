import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddCheeseForm = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    console.log({ newCheese })
    navigate('/')
  }

  const [newCheese, setNewCheese] = useState({
    name: '',
    details: '',
    image: ''
  })

  const handleChange = (e) => {
    setNewCheese({ ...newCheese, [e.target.name]: e.target.value })
  }

  const submitNewCheese = async (event) => {
    event.preventDefault()
    await axios.post(`http://10.0.0.242:3001/api/createCheese`, newCheese)
    setNewCheese({ name: '', image: '', description: '' })
    handleSubmit()
  }

  return (
    <div>
      <h1>Add A New Cheese Listing</h1>
      <form onSubmit={submitNewCheese}>
        <input
          type="text"
          value={newCheese.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          value={newCheese.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image url'}
        />
        <input
          type="text-area"
          value={newCheese.description}
          onChange={handleChange}
          name={'details'}
          placeholder={'details'}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddCheeseForm
