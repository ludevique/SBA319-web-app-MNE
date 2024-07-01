import express from 'express'
import dotenv from 'dotenv'
//----------------------import the routes files we used in our route folder.
import Movies from './Routes/movies.js';
import Theater from './Routes/theater.js';
import Users from './Routes/users.js'
dotenv.config()
 //create a variable to be able to work with express since i already imported
const app = express();
const PORT = process.env.PORT || 3200;
import { connectDB } from './db/conn.js';
 
 //-------create the connexion to our database by calling the connectdb we have imported----------------------
connectDB()
//-----------------create a middleware to help parse-----------------------------------------------------------------
app.use(express.urlencoded({extended : true}))
//-------render it as json format-----------------------
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hey');
})

//-----------------------set the middleware for all the files---------------------------
app.use('/movies', Movies);
app.use('/theater', Theater);
app.use('/users', Users)

//-----------------------------create the middleware to help handle when the server run into an error
app.use((err,req,res,next )=> {
    res.status(500).send('server ran into an error') // since this is the server issue we write res.status instead of res.send
})

//-----------------------------------make our app working-------------------------------------------------
app.listen(PORT, function(err) {
    if(err){res.status(500).send('server is not running')}
    else console.log('server is running')
})







// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './db/conn.js';

// // Import routers
// import MoviesRouter from './Routes/movies.js';
// import TheaterRouter from './Routes/theater.js';
// import UsersRouter from './Routes/users.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3200;

// connectDB();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Mount routers
// app.use('/movies', MoviesRouter);
// app.use('/theater', TheaterRouter);
// app.use('/users', UsersRouter);

// app.get('/', (req, res) => {
//     res.send('Server is up and running');
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Server error');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
