// IMPORTS ------------------------------------------
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
// --------------------------------------------------


// SETUPS -------------------------------------------
const app = express();

dotenv.config();
// --------------------------------------------------


// MONGOOSE CONFIG ----------------------------------
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log("Successfully connected to the database"))
.catch((error) => console.log("Unable to establish connection to database --> ", error));
// --------------------------------------------------