import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'


const app = express();

//MiddleWare For Parsing request body

app.use(express.json());


//MiddleWare For Handeling CORS POLICY
//Option 1: Allow All Origin with Default of Cors
app.use(cors());

// app.use(
//     cors(
//         {
//             origin: 'http://localhost:3000',
//             methods: ['GET', 'POST', 'PUT', 'DELETE'],
//             allowedHeaders: ['Content-Type'],
//         }
//     ));




app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome To MERN Stack Tutorial')
});

app.use('/books', booksRoutes)


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connectedto database');
        app.listen(PORT, () => {
            console.log(`App is Listening to port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })