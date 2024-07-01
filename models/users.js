// IMPORT Mongoose

//-------------------------------------------------------------------------------------
import mongoose from 'mongoose'

//-------------------built the schema------------------------------------------------

const userChoice = new mongoose.Schema({
    name: {
        type : String,
        require:true
        
    },
    email: {
        type: String,
        require: true
        
    },
    password: {
        type:String,
        require:true
    }
})

export default new mongoose.model('users', userChoice)