const express = require ('express')
const bodyParser = require ('body-parser')
const session = require ('express-session')
const checkForSession = require ('./middlewares/checkForSession')
const swagController = require('./controllers/swag_controller')
const authController = require('./controllers/auth_controller')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkForSession)

app.get('/api/swag',swagController.read)

const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {console.log(`Server listening on port ${port}.`)
})