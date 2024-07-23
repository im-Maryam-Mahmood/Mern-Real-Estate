import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const MONGO = process.env.MONGO
mongoose.connect(MONGO)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(3000, () => {
            console.log('Server Started at Port : 3000')
        });
    }).catch((err) => {
        console.log(err)
    });



