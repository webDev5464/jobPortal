const express = require('express')
const cors = require('cors')
const { mongodbCon } = require('./configs/dbCon')

const app = express()
app.use(cors())
app.use(express.json())

mongodbCon("mongodb+srv://jobPortal:jobPortal@database.f2htg2a.mongodb.net/?retryWrites=true&w=majority&appName=database")
app.listen(5500, () => console.log('port is running on 5500'))
