const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()


const mongodbCon = async (URL) => {
    await mongoose.connect(URL)
    console.log("Database COnnected");
}

mongodbCon("mongodb+srv://jobPortal:jobPortal@database.f2htg2a.mongodb.net/?retryWrites=true&w=majority&appName=database")

app.use(express.json())
app.use(cors())
app.listen(5500, () => console.log('port is running on 5500'))

// lorem