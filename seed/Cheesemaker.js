const db = require('../db')
const { Cheesemaker } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cheesemakers = [
    {
      name: 'Ack Giola',
      description: 'Brewster, MA',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/220px-Burrata2.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Mozzarella House',
      description: 'Peabody, MA.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/220px-Burrata2.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    }
  ]

  await Cheesemaker.insertMany(cheesemakers)
  console.log('Created some cheesemakers!')
}
const run = async () => {
  await main()
  db.close()
}

run()
