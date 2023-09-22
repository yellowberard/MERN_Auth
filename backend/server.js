import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import {
    notFound,
    errorHandler
} from './middleware/errorMiddleware.js';


dotenv.config(); // to load env variables
const port = process.env.PORT || 6969;


connectDB();
const app = express();

app.use(cookieParser());
app.use(express.json()); // parse raw json
app.use(express.urlencoded({
    extended: true
}))

// console.log('i' + userRoutes)
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server is ready!!!")
})

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
});