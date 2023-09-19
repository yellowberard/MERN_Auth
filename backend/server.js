import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import {
    authUser
} from './controllers/userController.js';

dotenv.config();

const port = process.env.PORT || 6969;
const app = express();

// console.log('i' + userRoutes)
app.use('/api/users', authUser);

app.get('/', (req, res) => {
    res.send("Server is ready!!!")
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
});