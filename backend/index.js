const express = require('express')
const cors = require('cors')
const { mongodbCon } = require('./configs/dbCon')
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(cors())
app.use(express.json())
var cookies = require("cookie-parser");

<<<<<<< HEAD
app.use(cookies());

app.use('/api/user', userRoutes)
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        success: false

    });
});



=======
>>>>>>> 84301ce09cae59b6c57a31b188f5a17c8181d77a
mongodbCon("mongodb+srv://jobPortal:jobPortal@database.f2htg2a.mongodb.net/?retryWrites=true&w=majority&appName=database")
app.listen(5500, () => console.log('port is running on 5500'))
