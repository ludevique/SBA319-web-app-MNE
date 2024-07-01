// inmport monngoose

//--------------------------------------------------------------------------------------------------
import mongoose  from "mongoose"

//-----------------built the schema-------------------------------------------------------------------

const TheaterMovies = new mongoose.Schema({
    location: {
        type: String,
        require:true
    },
     theaterId: {
        type: Number,
        require: true,
     },
     id:{
        type:String,
        require: true,
        unique: true
     }
})

export default new mongoose.model('theater',TheaterMovies )