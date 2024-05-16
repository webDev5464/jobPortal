const mongoose = require('mongoose')
let UserSchema = mongoose.Schema({
    email:String,
    password:String
})
let User = mongoose.model('users',UserSchema)

module.exports = User