// IMPORTS ------------------------------------------
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import User from './User.js';
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

app.get("/users", async (req,res, next) => {
    try {
        const users = await User.find();
        res.json( users );
    } catch (error) {
        next( error );
    }
});

app.post("/signup", async (req, res, next) => {
    try {
        const body = req.body;
        const user = await User.create(body);

        res.send( user );
    } catch (error) {
        next( error );
    }
});
// --------------------------------------------------


const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


app.use(
    function errorHandler (err, req, res, next) {
        res.status(err.status || 400).send({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
);