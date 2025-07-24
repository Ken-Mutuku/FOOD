import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// import { config } from 'dotenv';
 
// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); // serve static files from the uploads directory, mounted the uplaod folder at the endpoint /images
app.use("/api/users", userRouter); // use the userRouter for user related routes
app.use("/api/cart",cartRouter); // use the cartRouter for cart related routes
app.use("api/order",orderRouter)


// routes siko sure though
app.get("/", (req, res) => {
    res.send("Welcome my first sbackend server!");
    });


// start server, this is a call back function that runs when the server starts
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//mongodb+srv://kendev:<db_password>@cluster0.ch5xz7x.mongodb.net/?

