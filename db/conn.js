import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

export function connectDB (){
    mongoose.connect(process.env.ATLAS_URI);

    const conn = mongoose.connection;
    conn.on('error', (e) => console.error(e));
    conn.on('open', () => console.log('connected to the database!'));
    conn.on('close', () => console.log('disconned to database!!'));
}