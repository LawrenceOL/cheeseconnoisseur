import { useEffect, useState } from 'react'
import axios from 'axios'
import GridCard from '../components/GridCard'

const Cheesemakers = () => {
  const [cheesemakers, setCheesemakers] = useState([])
  const [cheesemakertoDelete, setCheesemakertoDelete] = useState('')

  useEffect(() => {
    const getCheesemakers = async () => {
      const response = await axios.get(
        `http://10.0.0.242:3001/api/readAllCheesemakers`
      )
      console.log(response.data)
      setCheesemakers(response.data.cheesemaker)
    }
    getCheesemakers()
  }, [])

  // axios delete call to be used with button presses
  useEffect(() => {
    axios.delete(`http://10.0.0.242:3001/api/deleteCheesemaker`, {
      data: {
        _id: `${cheesemakertoDelete}`
      }
    })

    return () => {
      setCheesemakertoDelete('')
    }
  }, [cheesemakertoDelete])

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
                setCheesemakertoDelete(cheesemaker._id)
              }}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Cheesemakers
