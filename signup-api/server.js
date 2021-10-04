// IMPORTS ------------------------------------------
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
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


// MIDDLEWARE ---------------------------------------
app.use( express.json() );

app.use( cors() );
// --------------------------------------------------


// ROUTES -------------------------------------------
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Simple-Signup API</h1>");
});


// --------------------------------------------------


const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});