const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const User = require('./Usermodel')
app.use(cors())
app.use(express.json())

const mongodbCon = async (URL) => {
    await mongoose.connect(URL)
    console.log("Database COnnected");
}

mongodbCon("mongodb+srv://jobPortal:jobPortal@database.f2htg2a.mongodb.net/?retryWrites=true&w=majority&appName=database")



app.post('/register', async (req, res) => {
    
    let data = User({
        email: req.body.email,
        password: req.body.password
    })
    let existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        res.send({ success: false, msg: 'user already registered' })
    } else {
        let result = await data.save()
        console.log(result)

        result ? res.send({ success: true, user: result, msg: 'registration successfully' }): res.send({ success: false, msg: 'error' })
    
    }
    console.log(req.body);

})

app.post('/login', async(req,res)=>{
    let {email,password} = req.body
    let existingUser = await User.findOne({email})
    console.log(existingUser,password)

     existingUser && pass === existingUser.password ? res.send({success:true, user: existingUser, msg:'user login successfully'}): res.send({success:false,msg:'login failed please check email or password'})
})



app.listen(5500,() => console.log('port is running on 5500'))


//hello all