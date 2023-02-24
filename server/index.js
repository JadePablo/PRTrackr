import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes/routes.js'
const app = express()
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/gyms',routes)

const CONNECTION_URL = "mongodb+srv://manic:mike@cluster0.4ebw0jy.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000
mongoose.set('strictQuery',true)
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true})
    .then(function() {
        app.listen(PORT,function() {
            console.log(`Server running on PORT ${PORT}`)
            console.log(`db connection state: ${mongoose.connection.readyState}`)
        })
    })

