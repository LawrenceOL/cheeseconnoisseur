//required
const express = require('express')
const createRoutes = require('./routes/createRouter.js')
const readRoutes = require('./routes/readRouter.js')
const updateRoutes = require('./routes/updateRouter.js')
const deleteRoutes = require('./routes/deleteRouter.js')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')

//middlewares

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/api', createRoutes)
app.use('/api', readRoutes)
app.use('/api', updateRoutes)
app.use('/api', deleteRoutes)
app.use(express.static(`${__dirname}/client/build`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
