import express, { request, response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventsRouter from './routes/eventsRoute.js';
import hackathonRouter from "./routes/hackathonRoute.js";
import { PORT, mongoDBURL } from './config.js';

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

app.get('/', (request, response) => {
    response.status(234).send('Working!!');
});

// Routes
app.use('/api/events', eventsRouter);
app.use('/api/hackathon', hackathonRouter);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });