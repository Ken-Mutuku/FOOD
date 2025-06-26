import express from 'express';
import cors from 'cors';
// import { config } from 'dotenv';
 
// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome my the backend server!");
    });

// start server, this is a call back function that runs when the server starts
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

