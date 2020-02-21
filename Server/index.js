require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: { maxAge: 10000 * 60 * 60 * 24 },
        secret: SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db', db)
    app.listen(port || 4040, () => console.log(`Server running on ${port}`))
})

app.post('/api/auth/register', controller.register)
app.post('/api/auth/login', controller.login)
app.post('/api/newPost', controller.newPost)
app.get('/api/posts', controller.getPosts)