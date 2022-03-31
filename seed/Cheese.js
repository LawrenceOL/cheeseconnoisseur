const db = require('../db')
const { Cheese } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cheeses = [
    {
      name: 'Mozzarella',
      description:
        "Mozzarella is a southern Italian cheese traditionally made from Italian buffalo's milk by the pasta filata method. Fresh mozzarella is generally white but when seasoned it turns to a light yellow depending on the animal's diet.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/220px-Burrata2.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Burrata',
      description:
        'Burrata is an Italian cow milk cheese made from mozzarella and cream. The outer casing is solid cheese, while the inside contains stracciatella and cream, giving it an unusual, soft texture. It is typical of Apulia',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/220px-Burrata2.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Cheddar',
      description: 'Cheddar cheese is delicious',
      image: '/assets/cheddar.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Feta',
      description: 'Feta cheese is from Greece',
      image: '/assets/feta.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Gouda',
      description: 'Gouda cheese is so good-ah',
      image: '/assets/gouda.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Muenster',
      description: 'Muenster is funster',
      image: '/assets/muenster.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Swiss',
      description: 'Swiss cheese is full of holes',
      image: '/assets/swiss.jpg',
      cheesemaker: null,
      Review: null,
      rating: null
    }
  ]

  await Cheese.insertMany(cheeses)
  console.log('Created some cheese!')
}
const run = async () => {
  await main()
  db.close()
}

run()
