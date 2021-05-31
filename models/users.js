import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
   name : String,
   email : String,
   mobileno : String,
   hashpassword : String
})

export default mongoose.model('users',usersSchema)