//required
const express = require('express')
const createRoutes = require('./routes/createRouter.js')
const readRoutes = require('./routes/readRouter.js')
const updateRoutes = require('./routes/updateRouter.js')
const deleteRoutes = require('./routes/deleteRouter.js')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')

//middleware

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

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
