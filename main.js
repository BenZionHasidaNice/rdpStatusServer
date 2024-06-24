import express from 'express';
import morgan from 'morgan';
import eventsRouter from './routers/events.js';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Setup logger
app.use(morgan('combined'));

// Prefix '/events' to the events router
app.use('/events', eventsRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
