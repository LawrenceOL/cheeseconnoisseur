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
        'https://drive.google.com/uc?export=view&id=15qraXUUnTwy934abHQVOWQ5dR3yK0bV1',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Cheddar',
      description: 'Cheddar cheese is delicious',
      image:
        'https://drive.google.com/uc?export=view&id=1_o0481nS1rq6n48L1fxgRXHjsUcAlOQf',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Feta',
      description: 'Feta cheese is from Greece',
      image:
        'https://drive.google.com/uc?export=view&id=1PbBFYBLTBHYB7p4t48yQtbCVQwKUOwp_',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Gouda',
      description: 'Gouda cheese is so good-ah',
      image:
        'https://drive.google.com/uc?export=view&id=1rO1Jvf7DVYBiVrogJTcBqQ96hqrFH1QT',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Muenster',
      description: 'Muenster is funster',
      image:
        'https://drive.google.com/uc?export=view&id=1KvCazt3OzkKCUi8_1g6rdSJiW-DM0t7q',
      cheesemaker: null,
      Review: null,
      rating: null
    },
    {
      name: 'Swiss',
      description: 'Swiss cheese is full of holes',
      image:
        'https://drive.google.com/uc?export=view&id=1msiR-r1rP-GHzBTLO2NOO7EKeZWYPLtD',
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
