// import mongoose to talk with our model movies

//----------------------------------------------------------------------------------------
import mongoose from "mongoose"

//-----------------------------make our schema for our model movie--------------------
const MovieSchema = new mongoose.Schema({
    rated: {
        type:String,
        required:true
    },
    realised: {
        type: Number,
        required: true
    },
    type : {
        type: String,
        required: true
    }
})

export default new mongoose.model('movies' , MovieSchema) 